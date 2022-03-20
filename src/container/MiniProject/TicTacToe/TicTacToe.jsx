import React from 'react';
import Game from './components/Game';

function TicTacToe() {
  return (
    <>
      <div class="w-full border-t border-gray-600"></div>
      <div className='body-typegame m-4 flex flex-row'>
        <div className='flex flex-col bg-yellow-50 w-1/3 text-center rounded-lg shadow-md ml-7'>
          <h1 className='p-4'>Topics</h1>
          <div className='flex flex-col gap-2 text-xs'>
            <li>Array Manipulation</li>
            <li>UseState</li>
            <li>Time Travel</li>
          </div>
        </div>
        <div className='flex flex-col w-full justify-center items-center'>
          <h1 className="title-typegame">Tic Tac Toe</h1>
          <Game />
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
