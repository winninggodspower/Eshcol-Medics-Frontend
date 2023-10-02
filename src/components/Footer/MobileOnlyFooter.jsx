import React, { useEffect, useState } from 'react';
import Footer from './Footer';

function MobileOnlyFooter() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width state when the window is resized
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Conditional rendering based on screen size
  if (windowWidth <= 768) {
    return <Footer />;
  } else {
    return null; // Render nothing on larger screens
  }
}

export default MobileOnlyFooter;
