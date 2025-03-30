import React, { useContext, useState } from 'react';

import Chess from "./Chess";
import GameSetup from "./GameSetup";
import { commoncontext } from '../contexts/commoncontext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Play = () => {
    const navigate = useNavigate();
    const [showBoard, setShowBoard] = useState(false);
    const [level, setLevel] = useState(0);
    const [timeFormat, setTimeFormat] = useState(300);
    const [side, setSide] = useState("white"); 
const [whiteTime, setWhiteTime] = useState(timeFormat);
  const [blackTime, setBlackTime] = useState(timeFormat);
   const [gameStarted, setGameStarted] = useState(false);
   const [isUserTurn, setIsUserTurn] = useState(false);
   const { token , user,showNavbar , setShowNavbar } = useContext(commoncontext);
   
   setShowNavbar(false);
   
const handleStartGame = (settings) => {
    setWhiteTime(settings.timeFormat);
    setBlackTime(settings.timeFormat);
    setGameStarted(false);
    setIsUserTurn(false);
    setLevel(settings.level);
    setTimeFormat(settings.timeFormat);
    setSide(settings.side);
    setShowBoard(true);
  };
  
  return (
    <div 
      className="heii2 bg-cover bg-center overflow-hidden min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/chessfloor2.jpg')" }}
    >
      {!showBoard ? (
        <div className="flex justify-center items-center w-full h-full p-4">
          <GameSetup onStartGame={handleStartGame} />
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Chess level={level} timeFormat={timeFormat} side={side} />
        </div>
      )}
    </div>
  );
  
};

export default Play;