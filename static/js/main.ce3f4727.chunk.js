(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),s=c(5),i=c(1),b=(c(10),c(4)),o=c.n(b),r=c(0),d=function(t){var e=t.chooseId,c=t.tabs,n=t.tabChoose,a=c.find((function(t){return t.id===e}));return Object(r.jsxs)("div",{className:"tab",children:[Object(r.jsx)("div",{className:"tab__items",children:c.map((function(t){return Object(r.jsx)("div",{className:"tab__item",children:Object(r.jsx)("button",{type:"button",className:o()("tab__checed",{"tab__checed--select":t.id===e}),name:t.title,onClick:function(){return n(t)},children:t.title},t.id)})}))}),a&&Object(r.jsx)("p",{className:"tab__p",children:a.content})]})},l=(c(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=l.length>0?l[0]:null,h=function(){var t=Object(i.useState)(j),e=Object(s.a)(t,2),c=e[0],n=e[1];return Object(r.jsx)("div",{className:"app",children:c?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h1",{className:"app__h1",children:["Selected tab is:\xa0",c.title]}),Object(r.jsx)(d,{tabs:l,chooseId:c.id,tabChoose:function(t){c&&t.id!==c.id&&n(t)}})]}):Object(r.jsx)("p",{children:"Error"})})};a.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.ce3f4727.chunk.js.map