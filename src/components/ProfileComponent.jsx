import React, { useState } from 'react';

const ProfileComponent = ({ backgroundColor = '#3d3d3d' }) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = {
    avatarCircle: {
      width: '100%',
      maxWidth: '60px',
      aspectRatio: '1/1',
      borderRadius: '50%',
      backgroundColor: backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #efebc1',
      cursor: 'pointer',
      transition: 'all 0.1s ease', // Smooth transition between states
      
      // DYNAMIC 3D SHADOW
      // If pressed: smaller shadow + moved down. If not: deep shadow.
      boxShadow: isPressed 
        ? 'inset 0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)' 
        : 'inset 0 2px 4px rgba(255,255,255,0.1), 0 6px 12px rgba(0,0,0,0.5)',
      
      transform: isPressed ? 'translateY(2px)' : 'translateY(0)',
    },
    icon: {
      fontSize: '1.5em',
      color: '#efebc1',
      opacity: 0.9,
      lineHeight: 1,
      display: 'block',
      // Subtle shrink on the icon when pressed
      transform: isPressed ? 'scale(0.95)' : 'scale(1)',
      transition: 'transform 0.1s ease'
    }
  };

  return (
    <div 
      style={styles.avatarCircle}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)} // Reset if mouse drifts away
    >
      <span style={styles.icon}>👤</span>
    </div>
  );
};

export default ProfileComponent;
