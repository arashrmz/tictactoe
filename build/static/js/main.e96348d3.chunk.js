(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{51:function(e,n,t){},52:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(41),i=t.n(c),o=(t(51),t(7)),s=t(16),d=t(27),u=(t(52),t(84)),l=t(3),j=function(e){var n=e.index,t=e.children,r=e.handleClick;return Object(l.jsx)(u.a,{className:"place",onClick:function(){return r(n)},children:t})},h=t(86),b=t(87),p=t(88),O=t(89),m=t(83),x=["","","","","","","","",""],f=function(e,n){switch(n.type){case"changeTurn":return Object(d.a)(Object(d.a)({},e),{},{turn:!e.turn});case"setWinner":return Object(d.a)(Object(d.a)({},e),{},{winner:n.payload});case"reset":return{winner:void 0,turn:!0};default:return e}},v={winner:void 0,turn:!0},w=function(){var e=Object(r.useState)(x),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useReducer)(f,v),i=Object(s.a)(c,2),d=i[0],u=i[1],w=function(e){if(""===t[e]&&void 0===d.winner){var n=Object(o.a)(t);d.turn?n[e]="X":n[e]="O",a(Object(o.a)(n)),y(n),u({type:"changeTurn"})}},y=function(e){for(var n=Object(o.a)(e),t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(s.a)(t[r],3),c=a[0],i=a[1],l=a[2];n[c]&&n[c]===n[i]&&n[c]===n[l]&&(!0===d.turn?u({type:"setWinner",payload:!0}):u({type:"setWinner",payload:!1}))}for(var j=!0,h=0;h<n.length;h++)if(""===n[h]){j=!1;break}j&&u({type:"setWinner",payload:"Draw"})};return Object(l.jsxs)(b.a,{className:"App",maxWidth:"100vw",sx:{width:"100vw",background:"white",minHeight:"100vh",paddingTop:"2rem",color:"black",fontSize:"1rem",fontFamily:"Permanent Marker"},children:[Object(l.jsx)(p.a,{variant:"h4",component:"h4",sx:{fontFamily:"Permanent Marker",display:"block",margin:"0 auto",textAlign:"center",paddingBottom:"2rem"},children:"TIC TAC TOE"}),Object(l.jsxs)(O.a,{className:"box",sx:{width:"100%",maxWidth:"600px",margin:"0.5rem auto",fontSize:"5rem"},children:[Object(l.jsx)(h.a,{container:!0,spacing:1,children:t.map((function(e,n){return Object(l.jsx)(h.a,{item:!0,xs:4,children:Object(l.jsx)(j,{index:n,handleClick:w,children:e})},n)}))}),Object(l.jsxs)(O.a,{sx:{py:"1rem"},children:[Object(l.jsx)(p.a,{variant:"h5",component:"h5",children:void 0===d.winner&&!0===d.turn?"X Turn":void 0===d.winner&&!1===d.turn?"O Turn":!0===d.winner?"X Wins":!1===d.winner?"O Wins":"Draw"}),Object(l.jsx)(m.a,{variant:"contained",color:"secondary",onClick:function(){return a([].concat(x)),void u({type:"reset"})},children:"Reset"})]})]})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.e96348d3.chunk.js.map