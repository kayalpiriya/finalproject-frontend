import React, { useState, useEffect } from "react";

const BakeryMemoryGame = () => {
  // Game State
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Ungaloda Bakery Items (Emojis allathu Image URL inga podalam)
  const cardImages = [
    { src: "🍩", matched: false },
    { src: "🍰", matched: false },
    { src: "🥐", matched: false },
    { src: "🍪", matched: false },
    { src: "🧁", matched: false },
    { src: "🥯", matched: false },
  ];

  // Game Start Logic
  const shuffleCards = () => {
    // Ovvoru image-yum 2 thadava edukkirom (Jodi serkka)
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setGameWon(false);
  };

  // Handle a Choice
  const handleChoice = (card) => {
    if(choiceOne && choiceOne.id === card.id) return; // Same card click thadukka
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Check if Game Won
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start game automatically on load
  useEffect(() => {
    shuffleCards();
  }, []);

  // --- INLINE STYLES ---
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#fff0f5", // Light Pink Background
      borderRadius: "15px",
      border: "3px solid #d8bfd8",
    },
    title: {
      color: "#d65a82",
      marginBottom: "10px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", // 4 Columns
      gap: "10px",
      marginTop: "20px",
    },
    card: {
      position: "relative",
      height: "80px", // Card Height
      cursor: "pointer",
    },
    cardContent: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "40px", // Emoji size
      transition: "all 0.3s ease",
      userSelect: "none",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    button: {
      background: "#d65a82",
      color: "#fff",
      border: "0",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "10px",
    },
    winner: {
      color: "green",
      fontWeight: "bold",
      fontSize: "20px",
      marginTop: "15px",
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🧩 Bakery Memory Match</h2>
      <p>Turns: {turns}</p>
      <button style={styles.button} onClick={shuffleCards}>New Game</button>

      <div style={styles.grid}>
        {cards.map((card) => {
          const isFlipped = card === choiceOne || card === choiceTwo || card.matched;
          
          return (
            <div 
              key={card.id} 
              style={styles.card}
              onClick={() => !disabled && !isFlipped && handleChoice(card)}
            >
              <div style={{
                ...styles.cardContent,
                backgroundColor: isFlipped ? "#fff" : "#8b4513", // White if flipped, Brown if hidden
                transform: isFlipped ? "rotateY(0deg)" : "rotateY(0deg)", // Simple flip logic
              }}>
                {/* Flipped aanal Emoji theriyum, illaina "?" theriyum */}
                {isFlipped ? card.src : "🍩"} 
              </div>
            </div>
          );
        })}
      </div>

      {gameWon && (
        <div style={styles.winner}>
          🎉 Congratulations! You won in {turns} turns!
          <br/>
          <small>Use code <b>MASTERBAKER</b> for 10% off!</small>
        </div>
      )}
    </div>
  );
};

export default BakeryMemoryGame;