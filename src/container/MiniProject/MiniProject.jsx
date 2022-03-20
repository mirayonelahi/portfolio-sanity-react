import React from 'react';
import TypeGame from '../../container/MiniProject/FastType/TypeGame'
import TicTacToe from './TicTacToe/TicTacToe'

function MiniProject() {


   return (
      <div>
         <div className='bg-yellow-100  rounded-lg shadow-lg mx-52 my-2  text-2xl font-extrabold text-center'>Mini Live Projects</div>
         <TypeGame />
         <TicTacToe />
      </div>
   );
}

export default MiniProject;
