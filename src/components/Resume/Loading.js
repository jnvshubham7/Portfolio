import React, { useEffect } from 'react';

const Loading = ({ isDarkMode }) => {
  useEffect(() => {
    // Add keyframe animations to the document once
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes dots {
        0%, 20% { color: rgba(255, 255, 255, 0); }
        40% { color: #fff; }
        60%, 100% { color: rgba(255, 255, 255, 0); }
      }
    `;
    document.head.appendChild(styleSheet);

    // Clean up the style element on component unmount
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.container(isDarkMode)}>
      <div style={styles.spinner(isDarkMode)}></div>
      <p style={styles.text(isDarkMode)}>Loading<span style={styles.dots}>...</span></p>
    </div>
  );
};

const styles = {
  container: (isDarkMode) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: isDarkMode ? ' #24292e;' : '#fff', // Darker background for dark mode
    color: isDarkMode ? '#e0e0e0' : '#333', // Light text color for dark mode
  }),
  spinner: (isDarkMode) => ({
    width: '60px',
    height: '60px',
    border: `8px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 123, 255, 0.2)'}`, // Light border for dark mode
    borderTop: `8px solid ${isDarkMode ? '#00e0ff' : '#007bff'}`, // Neon light blue for dark mode
    borderRadius: '50%',
    animation: 'spin 1.5s linear infinite',
  }),
  text: (isDarkMode) => ({
    marginTop: '20px',
    fontSize: '1.5rem',
    color: isDarkMode ? '#e0e0e0' : '#333',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  }),
  dots: {
    animation: 'dots 1s steps(5, end) infinite',
  },
};

export default Loading;
