import React, { useState, useRef, useEffect } from "react";

const BakeryGame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Prizes Configuration
  const prizes = [
    "Free Cookie (Code: COOKIE)",    // 0-60 deg
    "10% Off (Code: YUMMY10)",       // 60-120 deg
    "Free Muffin (Code: MUFFIN)",    // 120-180 deg
    "5% Off (Code: CAKE5)",          // 180-240 deg
    "Buy 1 Get 1 (Code: BOGO)",      // 240-300 deg
    "No Luck! Try again."            // 300-360 deg
  ];

  // Check LocalStorage on mount to see if user already played
  useEffect(() => {
    const hasPlayed = localStorage.getItem("bakeryGamePlayed");
    if (!hasPlayed) {
      const timer = setTimeout(() => setIsOpen(true), 2000); // Open after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult("");

    // Math: Spin at least 5 times (1800deg) + random segment
    const randomDeg = Math.floor(Math.random() * 360);
    const newRotation = rotation + 1800 + randomDeg;
    
    setRotation(newRotation);

    // Wait 4 seconds for animation
    setTimeout(() => {
      calculateResult(newRotation);
      setIsSpinning(false);
      localStorage.setItem("bakeryGamePlayed", "true"); // Save that they played
    }, 4000);
  };

  const calculateResult = (actualDeg) => {
    const finalDeg = actualDeg % 360;
    const sliceIndex = Math.floor(finalDeg / 60);
    setResult(prizes[sliceIndex]);
  };

  if (!isOpen) return null;

  // --- INLINE STYLES OBJECT ---
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
    },
    modal: {
      backgroundColor: "#fff0f5", // Lavender Blush
      padding: "30px",
      borderRadius: "20px",
      border: "4px solid #d8bfd8",
      textAlign: "center",
      position: "relative",
      width: "90%",
      maxWidth: "400px",
      boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "15px",
      background: "none",
      border: "none",
      fontSize: "28px",
      cursor: "pointer",
      color: "#888",
    },
    title: {
      color: "#d65a82", // Deep Pink
      marginTop: 0,
      marginBottom: "5px",
    },
    wheelContainer: {
      position: "relative",
      width: "250px",
      height: "250px",
      margin: "20px auto",
    },
    wheel: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "6px solid #8b4513", // Chocolate
      boxSizing: "border-box",
      // CSS Gradient to create the slices
      background: `conic-gradient(
        #ffb7b2 0deg 60deg,
        #ffe4e1 60deg 120deg,
        #ffb7b2 120deg 180deg,
        #ffe4e1 180deg 240deg,
        #ffb7b2 240deg 300deg,
        #ffe4e1 300deg 360deg
      )`,
      transform: `rotate(-${rotation}deg)`,
      transition: "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)",
    },
    pointer: {
      position: "absolute",
      top: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: 0,
      height: 0,
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      borderTop: "25px solid #8b4513", // Chocolate Pointer
      zIndex: 10,
    },
    resultText: {
      minHeight: "30px",
      marginTop: "15px",
      fontWeight: "bold",
      color: "#8b4513",
      fontSize: "18px",
    },
    button: {
      backgroundColor: isSpinning ? "#ccc" : "#d65a82",
      color: "white",
      border: "none",
      padding: "12px 30px",
      fontSize: "18px",
      borderRadius: "25px",
      cursor: isSpinning ? "not-allowed" : "pointer",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>

        <h2 style={styles.title}>🍰 Spin & Win!</h2>
        <p style={{ color: "#555", margin: 0 }}>Win a discount for your order</p>

        <div style={styles.wheelContainer}>
          <div style={styles.pointer}></div>
          <div style={styles.wheel}></div>
        </div>

        <div style={styles.resultText}>
          {result ? `🎉 ${result}` : "Good Luck!"}
        </div>

        <button 
          style={styles.button} 
          onClick={spinWheel} 
          disabled={isSpinning || (result !== "" && result.includes("No Luck"))}
        >
          {isSpinning ? "Spinning..." : (result ? "Claim Prize" : "SPIN NOW")}
        </button>
      </div>
    </div>
  );
};

export default BakeryGame;