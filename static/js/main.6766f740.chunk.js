(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),i=(a(12),a(3)),s=a(4),o=a(6),m=a(5);var u=function(e){var t=e.val,a=e.clk,n=e.player,r=e.winner,c=e.reset;return l.a.createElement("div",null,l.a.createElement("div",{className:"bg-light-blue pa3"},l.a.createElement("h1",{className:"red"},"Tic Tac Toe"),l.a.createElement("button",{onClick:c},"Reset"),l.a.createElement("h2",{className:"white",id:"player"},n),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("button",{className:"w4 h4",id:"0",onClick:a},l.a.createElement("h1",null,t[0])),l.a.createElement("button",{className:"w4 h4",id:"1",onClick:a},l.a.createElement("h1",null,t[1])),l.a.createElement("button",{className:"w4 h4",id:"2",onClick:a},l.a.createElement("h1",null,t[2]))),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("button",{className:"w4 h4",id:"3",onClick:a},l.a.createElement("h1",null,t[3])),l.a.createElement("button",{className:"w4 h4",id:"4",onClick:a},l.a.createElement("h1",null,t[4])),l.a.createElement("button",{className:"w4 h4",id:"5",onClick:a},l.a.createElement("h1",null,t[5]))),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("button",{className:"w4 h4",id:"6",onClick:a},l.a.createElement("h1",null,t[6])),l.a.createElement("button",{className:"w4 h4",id:"7",onClick:a},l.a.createElement("h1",null,t[7])),l.a.createElement("button",{className:"w4 h4",id:"8",onClick:a},l.a.createElement("h1",null,t[8]))),l.a.createElement("h3",{id:"msg"},r)),l.a.createElement("div",null,l.a.createElement("footer",{className:"white bottom-0"},"This game is made by SHREY WAHI")))},h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).distinct=function(e,t,a){return a.indexOf(e)===t},e.onClick=function(t){var a=e.state,n=a.player,l=a.gameplay,r=a.arr,c=a.winner,i=t.currentTarget.id;if(!r.includes(i)&&!c){var s=l.slice();s[i]=n;var o=r.filter(e.distinct).slice();o.push(i),e.setState({gameplay:s,arr:o}),"X"===n?e.setState({player:"O"},(function(){e.chk_winner()})):e.setState({player:"X"},(function(){e.chk_winner()}))}},e.reset_game=function(t){e.setState({player:"X",gameplay:[],winner:"",arr:[]})},e.chk_winner=function(){var t=e.state,a=t.gameplay,n=t.arr,l=a.slice();"X"===l[0]&&"X"===l[1]&&"X"===l[2]||"X"===l[3]&&"X"===l[4]&&"X"===l[5]||"X"===l[6]&&"X"===l[7]&&"X"===l[8]||"X"===l[0]&&"X"===l[3]&&"X"===l[6]||"X"===l[2]&&"X"===l[5]&&"X"===l[8]||"X"===l[0]&&"X"===l[4]&&"X"===l[8]||"X"===l[2]&&"X"===l[4]&&"X"===l[6]||"X"===l[1]&&"X"===l[4]&&"X"===l[7]?(e.setState({winner:"WINNER IS PLAYER X"}),document.querySelector("#player").innerHTML=""):"O"===l[0]&&"O"===l[1]&&"O"===l[2]||"O"===l[3]&&"O"===l[4]&&"O"===l[5]||"O"===l[6]&&"O"===l[7]&&"O"===l[8]||"O"===l[0]&&"O"===l[3]&&"O"===l[6]||"O"===l[2]&&"O"===l[5]&&"O"===l[8]||"O"===l[0]&&"O"===l[4]&&"O"===l[8]||"O"===l[2]&&"O"===l[4]&&"O"===l[6]||"O"===l[1]&&"O"===l[4]&&"O"===l[7]?(e.setState({winner:"WINNER IS PLAYER O"}),document.querySelector("#player").innerHTML=""):9===n.length&&(e.setState({winner:"DRAW"}),document.querySelector("#player").innerHTML="")},e.state={player:"X",gameplay:[],winner:"",arr:[]},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.player,a=e.gameplay,n=e.text,r=e.winner;return l.a.createElement("div",{className:"tc"},l.a.createElement(u,{player:"PLAYER "+t,val:a,clk:this.onClick,reset:this.reset_game,disp_text:n,winner:r}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6766f740.chunk.js.map