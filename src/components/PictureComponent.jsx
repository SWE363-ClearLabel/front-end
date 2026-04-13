import React, { useState, useEffect, useRef } from "react";

const CameraPortal = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // START CAMERA FEED
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera permission denied or failed.", err);
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // CIRCLE BUTTON LOGIC
  const handleMainButtonClick = () => {
    if (!isExpanded && !capturedImage) {
      // STATE 0 -> 1: Expand and clear
      setIsExpanded(true);
    } else if (isExpanded) {
      // STATE 1 -> 2: Capture image and shrink
      captureAndSaveImage();
    }
    // If we are in State 2 (Image captured), the circle button does nothing
    // until they click "Reset to Camera"
  };

  // RESET BUTTON LOGIC (Fixes the black screen)
  const handleResetToBlur = () => {
    setCapturedImage(null); // Removes the image overlay
    setIsExpanded(false); // Ensures window is small (and blur applies)
  };

  const captureAndSaveImage = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL("image/png");

    setCapturedImage(imageUrl);

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `capture_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsExpanded(false);
  };

  const styles = {
    overlay: {
      // DYNAMIC FIX: 'relative' when small, 'fixed' when expanded
      position: isExpanded ? "fixed" : "relative",
      top: isExpanded ? 0 : "auto",
      left: isExpanded ? 0 : "auto",
      width: isExpanded ? "100vw" : "100%",
      // changing height 300px to auto
	    height: isExpanded ? "100vh" : "auto", // The resting height in your panel
      backgroundColor: isExpanded ? "rgba(0,0,0,0.85)" : "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: isExpanded ? 1000 : 1,
      transition: "all 0.4s ease-in-out",
    },
    cameraContainer: {
      // DYNAMIC FIX: Take up 100% of the row when small, 100vw when expanded
      width: isExpanded ? "100vw" : "100%",
      maxWidth: "100%",
	    // new 
	    maxHeight : isExpanded ? '100vh' : '70vh' , 
	    aspectRatio : isExpanded ? 'auto' : '16 / 10',
	    minHeight  : isExpanded ? '100vh' : '500px',
	    // finish new code

      height: isExpanded ? "100vh" : "auto",// from 100% to auto
      borderRadius: isExpanded ? "0px" : "24px", // Smooth corners when small
      backgroundColor: "#000",
      position: "relative",
      overflow: "hidden",
      border: isExpanded ? "none" : "2px solid #efebc1",
      transition: "all 0.4s ease-in-out",
      display: "flex",
      flexDirection: "column",
    },
    videoDisplay: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: isExpanded ? "none" : "blur(20px)",
      transition: "filter 0.5s ease-in-out",
      transform: "scale(1.1)",
      // BUG FIX: Hide the video instead of destroying it so the stream stays alive
      display: capturedImage ? "none" : "block",
    },
    imageDisplay: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "scale(1.1)",
      display: capturedImage ? "block" : "none",
    },
    captureButton: {
      position: "absolute",
      bottom: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      backgroundColor: "white",
      border: "5px solid rgba(0,0,0,0.2)",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      zIndex: 10,
    },
    topLeftBtn: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "white",
      background: "rgba(0,0,0,0.5)",
      border: "1px solid #efebc1",
      borderRadius: "8px",
      padding: "8px 15px",
      fontSize: "14px",
      cursor: "pointer",
      zIndex: 10,
    },
    topRightBtn: {
      position: "absolute",
      top: "20px",
      right: "20px",
      color: "white",
      background: "rgba(255,0,0,0.6)",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "20px",
      cursor: "pointer",
      zIndex: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  const handleRedButtonClick = () => {
    if (isExpanded) {
      // When BIG: Cancel the expansion and return to the blur component
      setIsExpanded(false);
    } else {
      // When BLURRY: Completely exit the portal
      if (onClose) onClose();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.cameraContainer}>
        {/* WE RENDER BOTH, BUT ONLY SHOW ONE AT A TIME TO PREVENT BLACK SCREEN */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={styles.videoDisplay}
        />
        {capturedImage && (
          <img src={capturedImage} style={styles.imageDisplay} alt="Captured" />
        )}

        {/* THE CIRCLE BUTTON (ALWAYS VISIBLE) */}
        <button style={styles.captureButton} onClick={handleMainButtonClick} />

        {/* STRICT STATE CONTROLS */}

        {/* ONLY shows when Expanded */}
        {isExpanded && (
          <button onClick={handleRedButtonClick} style={styles.topRightBtn}>
            ✕
          </button>
        )}

        {/* ONLY shows when Image is Taken & Shrunken */}
        {!isExpanded && capturedImage && (
          <button onClick={handleResetToBlur} style={styles.topRightBtn}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default CameraPortal;

