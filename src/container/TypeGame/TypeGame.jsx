import React from 'react';
import useWordGame from "../../hooks/useWordGame";
import './TypeGame.scss';

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
      <>
       <div className='body-typegame'>
         <div className='bg-yellow-200  rounded-lg shadow-lg mx-52 my-2  text-2xl'>Learning by doing</div>
         <div className='flex flex-row'>
      <div className='flex flex-col bg-yellow-50 w-1/3 text-center rounded-lg shadow-md ml-7'>
        <h1 className='p-4'>Topics</h1>
        <div className='flex flex-col gap-2 text-xs'>
          <li>UseEffect</li>
          <li>UseState</li>
          <li>Custom Hook</li>
        </div>
      </div>
      <div className='flex flex-col w-full justify-center items-center'>
      <h1 className="title-typegame">How fast do you type?</h1>
      <textarea
        className="textarea-typegame"
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4 className='p-2'>Time remaining: {timeRemaining}</h4>
      <button
        className="rounded-lg shadow p-3 m-2 bg-gray-300 hover:bg-gray-500 text-center"
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1 className="title-typegame">Word count: {wordCount}</h1>
      </div>
      </div>
      </div>
      </>
  );
}

export default TypeGame;
