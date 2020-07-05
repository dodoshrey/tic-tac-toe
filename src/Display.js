import React from 'react';

function Display({val, clk, player, winner, reset, TwoP, Bot, BotHard}) {
	return (
      <div>
	      <div className='bg-pink pa3'>
	    	<h1 style={{color: "darkblue", fontSize: "3.6em"}}>Tic Tac Toe</h1>
    		<button style={{margin: "2px", background: "white"}} onClick={Bot}>Play With Bot</button>
    		<button style={{margin: "2px", background: "white"}} onClick={TwoP}>Play With Partner</button>
    		<button style={{margin: "2px", background: "white"}} onClick={reset}>Reset Game</button>
	    	<h2 style={{color: "darkblue", fontSize: "2em"}} id='player'>{player}</h2>
	    	<div className='flex justify-center'>
	    		<button style={{background: "yellow"}} className='w4 h4' id='0' onClick={clk}><h1>{val[0][0]}</h1></button>
	    		<button style={{background: "yellow"}} className='w4 h4' id='1' onClick={clk}><h1>{val[0][1]}</h1></button>
	    		<button style={{background: "yellow"}} className='w4 h4' id='2' onClick={clk}><h1>{val[0][2]}</h1></button>
	    	</div>
	    	<div className='flex justify-center'>
	    		<button style={{background: "yellow"}} className='w4 h4' id='3' onClick={clk}><h1>{val[1][0]}</h1></button>
	    		<button style={{background: "yellow"}} className='w4 h4' id='4' onClick={clk}><h1>{val[1][1]}</h1></button>
	    		<button style={{background: "yellow"}} className='w4 h4' id='5' onClick={clk}><h1>{val[1][2]}</h1></button>
	    	</div>
	    	<div className='flex justify-center'>
	    		<button style={{background: "yellow"}} className='w4 h4' id='6' onClick={clk}><h1>{val[2][0]}</h1></button>
	    		<button style={{background: "yellow"}} className='w4 h4' id='7' onClick={clk}><h1>{val[2][1]}</h1></button>
	    		<button style={{background: "yellow"}} className='w4 h4' id='8' onClick={clk}><h1>{val[2][2]}</h1></button>
	    	</div>
	    	<h3 style={{color: "darkblue", fontSize: "2em"}} id='msg'>{winner}</h3>
	      </div>
	      <div>
	      	<footer className='white bottom-0'>This game is made by SHREY WAHI</footer>
	      </div>
      </div>
    );
}

export default Display;