// app/ui/ImageWithText.tsx

'use client';
import React, { useEffect, useState } from 'react';
import styles from './image.module.css'; // Import your CSS module

const ImageWithText = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set the visibility to true after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0); // Change to a small delay if needed
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className={styles.container}>
      <img
        src="/images/top_image.jpg" // Update with your image path
        alt="Descriptive Alt Text"
        className={styles.image}
      />
      <h1 className={`${styles.text} ${isVisible ? styles.expand : ''}`}>
        宇宙デブリとエネルギー問題の解決に挑戦
      </h1>
    </div>
  );
};

export default ImageWithText;
