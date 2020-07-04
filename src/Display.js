import React from 'react';

function Display({val, clk, player, winner}) {
	return (
      <div>
	      <div className='bg-light-blue pa3'>
	    	<h1 className='red'>Tic Tac Toe</h1>
	    	<h3 className='white' id='player'>PLAYER {player}</h3>
	    	<div className='flex justify-center'>
	    		<button className='w4 h4' id='0' onClick={clk}>{val[0]}</button>
	    		<button className='w4 h4' id='1' onClick={clk}>{val[1]}</button>
	    		<button className='w4 h4' id='2' onClick={clk}>{val[2]}</button>
	    	</div>
	    	<div className='flex justify-center'>
	    		<button className='w4 h4' id='3' onClick={clk}>{val[3]}</button>
	    		<button className='w4 h4' id='4' onClick={clk}>{val[4]}</button>
	    		<button className='w4 h4' id='5' onClick={clk}>{val[5]}</button>
	    	</div>
	    	<div className='flex justify-center'>
	    		<button className='w4 h4' id='6' onClick={clk}>{val[6]}</button>
	    		<button className='w4 h4' id='7' onClick={clk}>{val[7]}</button>
	    		<button className='w4 h4' id='8' onClick={clk}>{val[8]}</button>
	    	</div>
	    	<h3 id='msg'>{winner}</h3>
	      </div>
	      <div>
	      	<footer className='white bottom-0'>This game is made by SHREY WAHI</footer>
	      </div>
      </div>
    );
}

export default Display;