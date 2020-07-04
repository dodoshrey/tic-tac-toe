import React from 'react';

function Display({val, clk, player, winner, reset, TwoP, Bot}) {
	return (
      <div>
	      <div className='bg-light-blue pa3'>
	    	<h1 className='red'>Tic Tac Toe</h1>
    		<button style={{margin: "5px", background: "black", color: "white"}} onClick={Bot}>1-Player</button>
    		<button style={{margin: "5px", background: "black", color: "white"}} onClick={TwoP}>2-Player</button>
    		<button style={{margin: "5px", background: "black", color: "white"}} onClick={reset}>Reset</button>
	    	<h2 className='white' id='player'>{player}</h2>
	    	<div className='flex justify-center'>
	    		<button className='w4 h4' id='0' onClick={clk}><h1>{val[0]}</h1></button>
	    		<button className='w4 h4' id='1' onClick={clk}><h1>{val[1]}</h1></button>
	    		<button className='w4 h4' id='2' onClick={clk}><h1>{val[2]}</h1></button>
	    	</div>
	    	<div className='flex justify-center'>
	    		<button className='w4 h4' id='3' onClick={clk}><h1>{val[3]}</h1></button>
	    		<button className='w4 h4' id='4' onClick={clk}><h1>{val[4]}</h1></button>
	    		<button className='w4 h4' id='5' onClick={clk}><h1>{val[5]}</h1></button>
	    	</div>
	    	<div className='flex justify-center'>
	    		<button className='w4 h4' id='6' onClick={clk}><h1>{val[6]}</h1></button>
	    		<button className='w4 h4' id='7' onClick={clk}><h1>{val[7]}</h1></button>
	    		<button className='w4 h4' id='8' onClick={clk}><h1>{val[8]}</h1></button>
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