import React, { useState } from 'react';
import ChessBoard from "./ChessBoard";
import Chess from "./Chess";
import GameSetup from "./GameSetup";

const Play = () => {
    const [showBoard, setShowBoard] = useState(false);
    const [level, setLevel] = useState(0);
    const [timeFormat, setTimeFormat] = useState(300);
    const [side, setSide] = useState("white"); // Default side: White
const [whiteTime, setWhiteTime] = useState(timeFormat);
  const [blackTime, setBlackTime] = useState(timeFormat);
   const [gameStarted, setGameStarted] = useState(false);
   const [isUserTurn, setIsUserTurn] = useState(false);
   
    // Update game start handler
const handleStartGame = (settings) => {
    // Reset all timer-related states
    setWhiteTime(settings.timeFormat);
    setBlackTime(settings.timeFormat);
    setGameStarted(false);
    setIsUserTurn(false);
    
    // Existing setup code
    setLevel(settings.level);
    setTimeFormat(settings.timeFormat);
    setSide(settings.side);
    setShowBoard(true);
  };
    return (
        <div>
            {/* Display the GameSetup form if the board is not shown */}
            {!showBoard && (
                <div className="flex justify-center items-center min-h-screen bg-gray-900">
                    <GameSetup onStartGame={handleStartGame} />
                </div>
            )}

            {/* Display the Chess component when the board is shown */}
            {showBoard && (
                <Chess level={level} timeFormat={timeFormat} side={side} />
            )}
        </div>
    );
};

export default Play;