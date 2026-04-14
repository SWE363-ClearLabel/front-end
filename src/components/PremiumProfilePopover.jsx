import React, { useState, useEffect, useRef } from 'react';
import ProfileComponent from './ProfileComponent';

// --- 1. CLICK OUTSIDE HOOK ---
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// --- 2. THE PREMIUM POPOVER ---
const PremiumProfilePopover = ({ onSignOut, username, role, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef();

  useOnClickOutside(popoverRef, () => setIsOpen(false));

  const styles = {
    wrapper: {
      position: 'relative',
      display: 'inline-block',
    },
    trigger: {
      cursor: 'pointer',
    },
    dropdownCard: {
      position: 'absolute',
      top: '75px', // Drops perfectly below your avatar circle
      left: '0',   // Align left because it sits on the left side of your topBar
      width: '220px',
      backgroundColor: '#2b2b2b', 
      borderRadius: '24px',
      padding: '30px 20px 20px 20px',
      boxShadow: '0px 15px 40px rgba(0,0,0,0.8), inset 0px 1px 2px rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 1000, 
    },
    iconBackground: {
      width: '70px',
      height: '70px',
      backgroundColor: '#8c8c8c', 
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    },
    statusText: {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#ffffff',
      letterSpacing: '1px',
      marginBottom: '25px',
    },
    actionButton: {
      width: '100%',
      padding: '12px',
      marginBottom: '10px',
      backgroundColor: '#9e9e9e', 
      color: '#000000',
      border: 'none',
      borderRadius: '8px',
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '14px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      transition: 'background-color 0.2s ease',
    }
  };

  return (
    <div style={styles.wrapper} ref={popoverRef}>
      
      {/* TRIGGER: We pass your exact props down to your original component */}
      <div style={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <ProfileComponent 
           username={username} 
           role={role} 
           isLoggedIn={isLoggedIn} 
        />
      </div>

      {/* POP-UP MENU */}
      {isOpen && (
        <div style={styles.dropdownCard}>
          
          <div style={styles.iconBackground}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2b2b2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          
          <div style={styles.statusText}>PREMIUM</div>
          
          <button 
            style={styles.actionButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b0b0b0'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#9e9e9e'}
          >
            SUBSCRIPTIONS
          </button>
          
          <button 
            style={{...styles.actionButton, marginBottom: 0}}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b0b0b0'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#9e9e9e'}
            onClick={() => {
              setIsOpen(false);
              if (onSignOut) onSignOut();
            }}
          >
            SIGN OUT
          </button>
          
        </div>
      )}
    </div>
  );
};

export default PremiumProfilePopover;
