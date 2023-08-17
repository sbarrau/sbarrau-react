import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [timingType, setTimingType] = useState("SESSION");
  const [play, setPlay] = useState(false);

  let timeout;

  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    }
  };

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    }
  };

  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimingType("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
  };

  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if (!timeLeft && timingType === "SESSION") {
      setTimeLeft(breakLength * 60);
      setTimingType("BREAK");
      audio.play();
    }
    if (!timeLeft && timingType === "BREAK") {
      setTimeLeft(sessionLength * 60);
      setTimingType("SESSION");
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const clock = () => {
    if (play) {
      timeout = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      resetTimer();
    } else {
      clearTimeout(timeout);
    }
  };

  useEffect(() => {
    clock();
  }, [play, timeLeft, timeout, clock]);

  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const title = timingType === "SESSION" ? "Session" : "Break";

  return (


    <div className="flex flex-col items-center justify-center h-screen">
  <h2 className="text-3xl mb-4">Pomodoro by Seba Barrau</h2>
  <div className="flex gap-4">
    <div>
      <h3 className="text-lg" id="break-label">Descanso (min)</h3>
      <div className="flex items-center">
        <button
          disabled={play}
          onClick={handleBreakIncrease}
          id="break-increment"
          className="w-12 h-12 rounded-full bg-green-500 text-white font-bold"
        >
          +
        </button>
        <strong id="break-length">{breakLength}</strong>
        <button
          disabled={play}
          onClick={handleBreakDecrease}
          id="break-decrement"
          className="w-12 h-12 rounded-full bg-yellow-500 text-black font-bold"
        >
          -
        </button>
      </div>
    </div>
    <div>
      <h3 className="text-lg" id="session-label">Trabajo (min)</h3>
      <div className="flex items-center">
        <button
          disabled={play}
          onClick={handleSessionIncrease}
          id="session-increment"
          className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold"
        >
          +
        </button>
        <strong id="session-length">{sessionLength}</strong>
        <button
          disabled={play}
          onClick={handleSessionDecrease}
          id="session-decrement"
          className="w-12 h-12 rounded-full bg-red-500 text-white font-bold"
        >
          -
        </button>
      </div>
    </div>
  </div>
  <div className="timer-wrapper mt-4">
    <div className="timer border-2 border-gray-300 rounded-lg text-center py-4 px-6 mb-4">
      <h2 id="timer-label">{title}</h2>
      <h3 id="time-left">{timeFormatter()}</h3>
    </div>
    <button
      onClick={handlePlay}
      id="start_stop"
      className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
    >
      Start - Stop
    </button>
    <button
      onClick={handleReset}
      id="reset"
      className="bg-red-500 text-white py-2 px-4 rounded-lg"
    >
      Reiniciar
    </button>
  </div>
  <audio
    id="beep"
    preload="auto"
    src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
  />
    
</div>



  );
};

export default Pomodoro;