(this.webpackJsonppmc=this.webpackJsonppmc||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),u=n(5),a=n.n(u),i=n(3),o=n(0),j=n(1),s=r.a.createContext(),b=function(t){var e=t.children,n=Object(c.useState)({stack:Array(31).fill(0),AC:0,PC:0}),r=Object(i.a)(n,2),u=r[0],a=r[1];return Object(j.jsx)(s.Provider,{value:{memory:u,setMemory:a},children:e})},O=function(t){var e=t.lineNum,n=Object(c.useContext)(s),r=n.memory,u=n.setMemory,a=function t(e,n){switch(e){case"$":return Number(n);case"@":return Number(r.stack[n]);case"&":return Number(r.stack[t("@",n)])}},b={NULL:function(t,e){u((function(t){return Object(o.a)(Object(o.a)({},t),{},{PC:t.PC+1})}))},STOP:function(t,e){return 0},LOAD:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:a(t,e),PC:n.PC+1})}))},STORE:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{stack:n.stack.map((function(n,c){return c==a(t,e)?r.AC:n})),PC:n.PC+1})}))},JUMP:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{PC:a(t,e)})}))},JNEG:function(t,e){r.AC<0?u((function(n){return Object(o.a)(Object(o.a)({},n),{},{PC:a(t,e)})})):u((function(t){return Object(o.a)(Object(o.a)({},t),{},{PC:t.PC+1})}))},JZERO:function(t,e){0==r.AC?u((function(n){return Object(o.a)(Object(o.a)({},n),{},{PC:a(t,e)})})):u((function(t){return Object(o.a)(Object(o.a)({},t),{},{PC:t.PC+1})}))},ADD:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:Number(n.AC)+a(t,e),PC:n.PC+1})}))},SUB:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:Number(n.AC)-a(t,e),PC:n.PC+1})}))},MULT:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:n.AC*a(t,e),PC:n.PC+1})}))},DIV:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:n.AC/a(t,e),PC:n.PC+1})}))},MOD:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:n.AC%a(t,e),PC:n.PC+1})}))},OR:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:!(!n.AC&&!a(t,e)),PC:n.PC+1})}))},AND:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:!(!n.AC||!a(t,e)),PC:n.PC+1})}))},NOT:function(t,e){u((function(n){return Object(o.a)(Object(o.a)({},n),{},{AC:!a(t,e),PC:n.PC+1})}))}};return console.log(r),Object(j.jsxs)("div",{className:"line",children:[Object(j.jsxs)("div",{className:"line-count-num",children:[e,"."]}),Object(j.jsx)("input",{type:"text",onBlur:function(t){try{!function(t){var e=t.split(" "),n=Object(i.a)(e,3),c=n[0],r=n[1],u=n[2];b[c](r,u)}(t.target.value.toUpperCase())}catch(e){console.error(e)}}})]})},C=function(t){var e=t.lineCount,n=Object(c.useContext)(s),r=n.memory;n.setMemory;return Object(c.useEffect)((function(){for(var t=document.querySelectorAll(".line > input"),e=0;e<t.length;e++)r.stack[e]&&(t[e].value=r.stack[e])}),[r.stack]),Object(j.jsx)("div",{className:"line-container",children:Array(e).fill(0).map((function(t,e){return Object(j.jsx)(O,{lineNum:e})}))})},f=function(){var t=Object(c.useContext)(s),e=t.memory;t.setMemory;return Object(j.jsxs)("div",{className:"register-values",children:[Object(j.jsxs)("span",{children:["AC: ",e.AC]}),Object(j.jsxs)("span",{children:["PC: ",e.PC]})]})},l=function(){var t=Object(c.useState)(21),e=Object(i.a)(t,2),n=e[0];e[1];return Object(j.jsxs)("div",{className:"editor",children:[Object(j.jsx)(f,{}),Object(j.jsx)(C,{lineCount:n})]})},P=(n(11),function(){return Object(j.jsx)("div",{className:"main-container",children:Object(j.jsx)(b,{children:Object(j.jsx)(l,{})})})});a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1f6774b1.chunk.js.map