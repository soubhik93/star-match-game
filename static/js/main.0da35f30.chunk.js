(this["webpackJsonpstar-match-game"]=this["webpackJsonpstar-match-game"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(9),a(1)),u=(a(10),a(11),function(e){return r.a.createElement("div",{className:"game-done"},r.a.createElement("div",{style:{color:"won"===e.gameStatus?"green":"red"},className:"message"},"won"===e.gameStatus?"Well done":"Game Over"),r.a.createElement("button",{onClick:e.onClick},"Play Again"))}),i={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var a=[[]],n=[],r=0;r<e.length;r++)for(var c=0,o=a.length;c<o;c++){var s=a[c].concat(e[r]),u=i.sum(s);u<=t&&(a.push(s),n.push(u))}return n[i.random(0,n.length-1)]}},l=i,m=function(e){return r.a.createElement(r.a.Fragment,null,l.range(1,e.stars).map((function(e){return r.a.createElement("div",{key:e,className:"star"})})))},d={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},f=function(e){return r.a.createElement("button",{className:"number",style:{backgroundColor:d[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},g=function(e){var t=function(){var e=Object(n.useState)(l.random(1,9)),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(l.range(1,9)),o=Object(s.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)([]),d=Object(s.a)(m,2),f=d[0],g=d[1],v=Object(n.useState)(10),b=Object(s.a)(v,2),h=b[0],E=b[1];Object(n.useEffect)((function(){if(h>0&&u.length>0){var e=setTimeout((function(){E(h-1)}),1e3);return function(){return clearTimeout(e)}}}));return{stars:a,availableNums:u,candidateNums:f,secondsLeft:h,setGameState:function(e){if(l.sum(e)!==a)g(e);else{var t=u.filter((function(t){return!e.includes(t)}));r(l.randomSumIn(t,9)),i(t),g([])}}}}(),a=t.stars,c=t.availableNums,o=t.candidateNums,i=t.secondsLeft,d=t.setGameState,g=l.sum(o)>a,v=0===c.length?"won":0===i?"lost":"active",b=function(e,t){if("active"===v&&"used"!==t){var a="available"===t?o.concat(e):o.filter((function(t){return t!==e}));d(a)}};return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"help"},"Pick 1 or more numbers that sum to the number of stars"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left"},"active"!==v?r.a.createElement(u,{onClick:e.startNewGame,gameStatus:v}):r.a.createElement(m,{stars:a})),r.a.createElement("div",{className:"right"},l.range(1,9).map((function(e){return r.a.createElement(f,{key:e,number:e,status:(t=e,c.includes(t)?o.includes(t)?g?"wrong":"candidate":"available":"used"),onClick:b});var t})))),r.a.createElement("div",{className:"timer"},"Time Remaining: ",i))},v=function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(g,{key:a,startNewGame:function(){return c(a+1)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.0da35f30.chunk.js.map