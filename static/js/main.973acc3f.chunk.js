(this["webpackJsonpcovid-faq"]=this["webpackJsonpcovid-faq"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=a(34),i=a(11),u=a(15),d=a.n(u),l=a(29),j=a(25),p=(a(78),a(30)),b=a.n(p),h=a(4),O=a(145),f=a(144),x=a(147),v=a(146),g=a(143),m=a(12),k=(a(97),a(5));function q(e){return Object(k.jsx)("button",Object(m.a)({className:"button"},e))}var w=Object(h.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(x.a),y=Object(h.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(v.a),C=Object(h.a)((function(e){return{root:{padding:e.spacing(2)}}}))(g.a),S=function(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")};var E=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(j.a)(c,2),i=o[0],u=o[1],p=Object(n.useState)(""),h=Object(j.a)(p,2),x=h[0],v=h[1],g=Object(n.useState)(""),m=Object(j.a)(g,2),E=m[0],N=m[1];Object(n.useEffect)((function(){!function(){B.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){A()}),[E]);var A=function(){if(E){var e=a.filter((function(e){return S(e.pergunta).includes(S(E))}));u(e)}else u(a)};function B(){return(B=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://trabalho-faq.herokuapp.com/faq");case 2:t=e.sent,r(t.data),u(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("p",{className:"title",children:"COVID-19 FAQ"}),Object(k.jsxs)("div",{className:"filter",children:[Object(k.jsx)(O.a,{value:E,onChange:function(e){return N(e.target.value)},label:"Pesquisar",variant:"outlined"}),Object(k.jsx)(s.b,{to:"/admin",children:Object(k.jsx)(q,{children:"Admin"})})]}),Object(k.jsx)("div",{className:"faq",children:i.map((function(e){return Object(k.jsxs)(w,{square:!0,expanded:x===e.id,onChange:(t=e.id,function(e,a){v(!!a&&t)}),children:[Object(k.jsx)(y,{"aria-controls":"panel1d-content",id:"panel1d-header",children:Object(k.jsx)(f.a,{children:e.pergunta})}),Object(k.jsx)(C,{children:Object(k.jsx)(f.a,{children:e.resposta})})]});var t}))})]})},N=a(31);a(105);o.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(s.a,{children:Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{path:"/covid-faq",exact:!0,component:E}),Object(k.jsx)(i.a,{path:"/admin",component:function(){var e,t,a,r,c=Object(n.useState)([]),o=Object(j.a)(c,2),i=o[0],u=o[1],p=Object(n.useState)({}),h=Object(j.a)(p,2),O=h[0],f=h[1];function x(){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={add:{pergunta:"",resposta:""}},e.prev=1,e.next=4,b.a.get("https://trabalho-faq.herokuapp.com/faq");case 4:a=e.sent,u(a.data),a.data.forEach((function(e){t[e.id]={pergunta:e.pergunta,resposta:e.resposta}})),f(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function g(){return(g=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("https://trabalho-faq.herokuapp.com/faq/".concat(t));case 3:return e.next=5,x();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function w(){return(w=Object(l.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("https://trabalho-faq.herokuapp.com/faq/atualizar",{id:t.id,pergunta:null===(a=O[t.id])||void 0===a?void 0:a.pergunta.trim(),resposta:null===(n=O[t.id])||void 0===n?void 0:n.resposta.trim()});case 3:return e.next=5,x();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function y(e){f(Object(m.a)(Object(m.a)({},O),{},Object(N.a)({},e.target.name,Object(m.a)(Object(m.a)({},O[e.target.name]),{},{pergunta:e.target.value}))))}function C(e){f(Object(m.a)(Object(m.a)({},O),{},Object(N.a)({},e.target.name,Object(m.a)(Object(m.a)({},O[e.target.name]),{},{resposta:e.target.value}))))}function S(){return(S=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("https://trabalho-faq.herokuapp.com/faq",{pergunta:O.add.pergunta.trim(),resposta:O.add.resposta.trim()});case 3:return f({add:{pergunta:"",respost:""}}),e.next=6,x();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){x()}),[]),Object(k.jsxs)("div",{className:"faqs",children:[Object(k.jsx)(s.b,{to:"/covid-faq",children:Object(k.jsx)(q,{children:"Voltar"})}),Object(k.jsxs)("table",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Perguntas"}),Object(k.jsx)("th",{children:"Respostas"}),Object(k.jsx)("th",{children:"A\xe7\xf5es"})]}),i.map((function(e){var t,a,n,r;return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:Object(k.jsx)("textarea",{cols:"50",rows:"5",type:"text",name:e.id,value:null===(t=O[e.id])||void 0===t?void 0:t.pergunta,onChange:y})}),Object(k.jsx)("td",{children:Object(k.jsx)("textarea",{cols:"50",rows:"5",name:e.id,value:null===(a=O[e.id])||void 0===a?void 0:a.resposta,onChange:C})}),Object(k.jsxs)("td",{children:[Object(k.jsx)(q,{disabled:e.pergunta===(null===(n=O[e.id])||void 0===n?void 0:n.pergunta)&&e.resposta===(null===(r=O[e.id])||void 0===r?void 0:r.resposta),onClick:function(){return function(e){return w.apply(this,arguments)}(e)},children:"Editar"}),Object(k.jsx)(q,{onClick:function(){return function(e){return g.apply(this,arguments)}(e.id)},children:"Excluir"})]})]},e.id)})),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:Object(k.jsx)("textarea",{cols:"50",rows:"5",name:"add",value:null===O||void 0===O||null===(e=O.add)||void 0===e?void 0:e.pergunta,onChange:function(e){f(Object(m.a)(Object(m.a)({},O),{},Object(N.a)({},e.target.name,Object(m.a)(Object(m.a)({},O[e.target.name]),{},{pergunta:e.target.value}))))}})}),Object(k.jsx)("td",{children:Object(k.jsx)("textarea",{cols:"50",rows:"5",name:"add",value:null===O||void 0===O||null===(t=O.add)||void 0===t?void 0:t.resposta,onChange:function(e){f(Object(m.a)(Object(m.a)({},O),{},Object(N.a)({},e.target.name,Object(m.a)(Object(m.a)({},O[e.target.name]),{},{resposta:e.target.value}))))}})}),Object(k.jsx)("td",{children:Object(k.jsx)(q,{disabled:!(null===O||void 0===O||null===(a=O.add)||void 0===a?void 0:a.pergunta)||!(null===O||void 0===O||null===(r=O.add)||void 0===r?void 0:r.resposta),onClick:function(){return S.apply(this,arguments)},children:"Adicionar"})})]})]})]})},exact:!0})]})})}),document.getElementById("root"))},78:function(e,t,a){},97:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.973acc3f.chunk.js.map