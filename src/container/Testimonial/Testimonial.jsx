import React from 'react';
import useWordGame from "../../hooks/useWordGame";
import './Testimonial.scss';

function TypeGame() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(5);

  return (
    <div className='body-typegame'>
      <h1 className="title-typegame">How fast do you type?</h1>
      <textarea
        className="textarea-typegame"
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        className="button-typegame"
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1 className="title-typegame">Word count: {wordCount}</h1>
    </div>
  );
}

export default TypeGame;
