(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=n(1),l=n(8),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)},placeholder:"Busca tu gif..."}))},m=function(e){e.id;var t=e.title,n=e.url;return r.a.createElement("div",{className:"card animate__animated animate__bounce animate__fadeIn"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t))},s=n(4),f=n.n(s),d=n(7),p=function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=ZpNf37KooSFzI4oKvHUEsH4JI3pzKGs6"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r},E=function(e){var t=e.category,n=g(t),a=n.data,c=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__bounce animate__fadeIn"},t),c&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"card-grid animate__animated animate__bounce animate__fadeIn"},a.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},v=function(){var e=Object(a.useState)(["Ecuador"]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement("hr",null),r.a.createElement(o,{setCategories:c}),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(E,{key:e,category:e})}))))},_=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});i.a.render(r.a.createElement(v,null),document.getElementById("root")),_()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ac8058e5.chunk.js.map