(this.webpackJsonppmc=this.webpackJsonppmc||[]).push([[0],{11:function(n,t,e){},12:function(n,t,e){"use strict";e.r(t);var c=e(2),r=e.n(c),u=e(5),a=e.n(u),i=e(3),o=e(1),s=r.a.createContext(),j=function(n){var t=n.children,e=Object(c.useState)({stack:Array(31).fill(0),programRunning:!1,AC:0,PC:0}),r=Object(i.a)(e,2),u=r[0],a=r[1];return Object(o.jsx)(s.Provider,{value:{memory:u,setMemory:a},children:t})},b=e(0),O=function(n){var t=n.lineNum,e=Object(c.useContext)(s),r=e.memory,u=(e.setMemory,t==r.PC&&r.programRunning?"current-line-num":"line-count-num"),a=t==r.PC&&r.programRunning?"current-line-input":"";return Object(o.jsxs)("div",{className:"line",children:[Object(o.jsxs)("div",{className:u,children:[t,"."]}),Object(o.jsx)("input",{className:a,type:"text",onBlur:function(n){return 0},disabled:r.programRunning})]})},C=function(n){var t=n.lineCount,e=Object(c.useContext)(s),r=e.memory;e.setMemory;return Object(c.useEffect)((function(){for(var n=document.querySelectorAll(".line > input"),t=0;t<n.length;t++)r.stack[t]&&(n[t].value=r.stack[t])}),[r.stack]),Object(o.jsx)("div",{className:"line-container",children:Array(t).fill(0).map((function(n,t){return Object(o.jsx)(O,{lineNum:t})}))})},l=function(){var n=Object(c.useContext)(s),t=n.memory;n.setMemory;return Object(o.jsxs)("div",{className:"register-values",children:[Object(o.jsxs)("span",{children:["AC: ",t.AC]}),Object(o.jsxs)("span",{children:["PC: ",t.PC]})]})},f=function(){var n=Object(c.useState)(21),t=Object(i.a)(n,2),e=t[0];t[1];return Object(o.jsxs)("div",{className:"editor",children:[Object(o.jsx)(l,{}),Object(o.jsx)(C,{lineCount:e})]})},m=(e(11),function(){var n=Object(c.useContext)(s),t=n.memory,e=n.setMemory,r=function n(e,c){switch(e){case"$":return Number(c);case"@":return Number(t.stack[c]);case"&":return Number(t.stack[n("@",c)])}},u={NULL:function(n,t){e((function(n){return Object(b.a)(Object(b.a)({},n),{},{PC:n.PC+1})}))},STOP:function(n,t){return 0},LOAD:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:r(n,t),PC:e.PC+1})}))},STORE:function(n,c){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{stack:e.stack.map((function(e,u){return u==r(n,c)?t.AC:e})),PC:e.PC+1})}))},JUMP:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{PC:r(n,t)})}))},JNEG:function(n,c){t.AC<0?e((function(t){return Object(b.a)(Object(b.a)({},t),{},{PC:r(n,c)})})):e((function(n){return Object(b.a)(Object(b.a)({},n),{},{PC:n.PC+1})}))},JZERO:function(n,c){0==t.AC?e((function(t){return Object(b.a)(Object(b.a)({},t),{},{PC:r(n,c)})})):e((function(n){return Object(b.a)(Object(b.a)({},n),{},{PC:n.PC+1})}))},ADD:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:Number(e.AC)+r(n,t),PC:e.PC+1})}))},SUB:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:Number(e.AC)-r(n,t),PC:e.PC+1})}))},MULT:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:e.AC*r(n,t),PC:e.PC+1})}))},DIV:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:e.AC/r(n,t),PC:e.PC+1})}))},MOD:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:e.AC%r(n,t),PC:e.PC+1})}))},OR:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:!(!e.AC&&!r(n,t)),PC:e.PC+1})}))},AND:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:!(!e.AC||!r(n,t)),PC:e.PC+1})}))},NOT:function(n,t){e((function(e){return Object(b.a)(Object(b.a)({},e),{},{AC:!r(n,t),PC:e.PC+1})}))}},a=function(n){var t=n.split(" "),e=Object(i.a)(t,3),c=e[0],r=e[1],a=e[2];return u[c](r,a)},j=function(){e((function(n){return{stack:Array(31).fill(0),programRunning:!1,AC:0,PC:0}}))};return Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsx)(f,{}),Object(o.jsx)("button",{className:"run-program",disabled:t.programRunning,onClick:function(){j(),e((function(n){return Object(b.a)(Object(b.a)({},n),{},{programRunning:!0})}));for(var n=document.querySelectorAll(".line > input"),t=0;t<n.length;t++)if(""!=n[t].value&&isNaN(n[t].value))try{a(n[t].value)}catch(c){return n[t].classList.add("input-error"),j(),0}else e((function(n){return Object(b.a)(Object(b.a)({},n),{},{PC:n.PC+1})}));e((function(n){return Object(b.a)(Object(b.a)({},n),{},{programRunning:!1})}))},children:"SIEMA"})]})});a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{children:Object(o.jsx)(m,{})})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.70949e77.chunk.js.map