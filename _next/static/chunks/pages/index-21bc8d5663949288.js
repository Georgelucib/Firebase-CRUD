(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3363)}])},3363:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return E}});var d=c(5893);function e(a){var b,c=null!==(b=a.cor)&& void 0!==b?b:"";return(0,d.jsx)("button",{onClick:a.onClick,className:"\n            bg-gradient-to-r from-".concat(c,"-400 to-").concat(c,"-700\n            text-white px-4 py-2 rounded-md \n            ").concat(a.className,"\n        "),children:a.children})}function f(a){var b;return(0,d.jsxs)("div",{className:"flex flex-col ".concat(a.className),children:[(0,d.jsx)("label",{className:"mb-2",children:a.texto}),(0,d.jsx)("input",{type:null!==(b=a.tipo)&& void 0!==b?b:"text",value:a.valor,readOnly:a.somenteLeitura,onChange:function(b){var c;return null===(c=a.valorMudou)|| void 0===c?void 0:c.call(a,b.target.value)},className:"\n                    border border-purple-500 rounded-lg\n                    focus:outline-none bg-gray-50 px-4 py-2\n                    ".concat(a.somenteLeitura?"":"focus:bg-white"," \n                ")})]})}var g=c(7294),h=c(1438),i=c(5315),j=c(222),k=c(8409),l=c(2951),m=new WeakMap,n=new WeakMap,o=new WeakMap,p=function(){function a(b,c){var d=arguments.length>2&& void 0!==arguments[2]?arguments[2]:null;(0,h.Z)(this,a),(0,j.Z)(this,m,{writable:!0,value:void 0}),(0,j.Z)(this,n,{writable:!0,value:void 0}),(0,j.Z)(this,o,{writable:!0,value:void 0}),(0,k.Z)(this,n,b),(0,k.Z)(this,o,c),(0,k.Z)(this,m,d)}return a.vazio=function(){return new a("",0)},(0,l.Z)(a,[{key:"id",get:function(){return(0,i.Z)(this,m)}},{key:"nome",get:function(){return(0,i.Z)(this,n)}},{key:"idade",get:function(){return(0,i.Z)(this,o)}}]),a}();function q(a){var b,c,h,i,j,k=null===(b=a.cliente)|| void 0===b?void 0:b.id,l=(0,g.useState)(null!==(i=null===(c=a.cliente)|| void 0===c?void 0:c.nome)&& void 0!==i?i:""),m=l[0],n=l[1],o=(0,g.useState)(null!==(j=null===(h=a.cliente)|| void 0===h?void 0:h.idade)&& void 0!==j?j:0),q=o[0],r=o[1];return(0,d.jsxs)("div",{children:[!!k&&(0,d.jsx)(f,{texto:"C\xf3digo",valor:k,className:"mb-5"}),(0,d.jsx)(f,{texto:"Nome",valor:m,valorMudou:n,className:"mb-5"}),(0,d.jsx)(f,{texto:"Idade",tipo:"number",valor:q,valorMudou:r}),(0,d.jsxs)("div",{className:"flex justify-end mt-7",children:[(0,d.jsx)(e,{className:"mr-2",cor:"blue",onClick:function(){var b;return null===(b=a.clienteMudou)|| void 0===b?void 0:b.call(a,new p(m,+q,k))},children:k?"Alterar":"Salvar"}),(0,d.jsx)(e,{onClick:a.cancelado,cor:"gray",children:"Cancelar"})]})]})}function r(a){return(0,d.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,d.jsx)("h1",{className:"px-5 py-2 text-2xl",children:a.children}),(0,d.jsx)("hr",{className:"border-2 border-purple-500"})]})}function s(a){return(0,d.jsxs)("div",{className:"\n            flex flex-col w-2/3\n            bg-white text-gray-800 rounded-md\n\n        ",children:[(0,d.jsx)(r,{children:a.titulo}),(0,d.jsx)("div",{className:"p-6",children:a.children})]})}var t=(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),u=(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})});function v(a){var b,c=a.clienteSelecionado||a.clienteExcluido;return(0,d.jsxs)("table",{className:"w-full rounded-xl overflow-hidden",children:[(0,d.jsx)("thead",{className:"\n                text-gray-100\n                bg-gradient-to-r from-purple-500 to-purple-800\n            ",children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{className:"hidden md:flex text-left p-4",children:"C\xf3digo"}),(0,d.jsx)("th",{className:"text-left p-4",children:"Nome"}),(0,d.jsx)("th",{className:"text-left p-4",children:"Idade"}),!!c&&(0,d.jsx)("th",{className:"p-4",children:"A\xe7\xf5es"})]})}),(0,d.jsx)("tbody",{children:null===(b=a.clientes)|| void 0===b?void 0:b.map(function(b,e){var f;return(0,d.jsxs)("tr",{className:"".concat(e%2==0?"bg-purple-200":"bg-purple"),children:[(0,d.jsx)("td",{className:"hidden md:flex text-left p-4",children:b.id}),(0,d.jsx)("td",{className:"text-left p-4",children:b.nome}),(0,d.jsx)("td",{className:"text-left p-4",children:b.idade}),!!c&&(f=b,(0,d.jsxs)("td",{className:"flex justify-center",children:[!!a.clienteSelecionado&&(0,d.jsx)("button",{onClick:function(){var b;return null===(b=a.clienteSelecionado)|| void 0===b?void 0:b.call(a,f)},className:"\n                flex justify-center items-center\n                text-green-600 rounded-full p-2 m-1\n                hover:bg-purple-50\n                ",children:t}),!!a.clienteExcluido&&(0,d.jsx)("button",{onClick:function(){var b;return null===(b=a.clienteExcluido)|| void 0===b?void 0:b.call(a,f)},className:"\n                flex justify-center items-center\n                text-red-600 rounded-full p-2 m-1\n                hover:bg-purple-50\n                ",children:u})]}))]},b.id)})})]})}var w=c(7568),x=c(4051),y=c.n(x),z=c(5143);c(6257);var A=c(3454);z.Z.apps.length||z.Z.initializeApp({apikey:A.env.NEXT_PUBLIC_API_KEY,authDomain:A.env.NEXT_PUBLIC_auth_domain,projectId:A.env.NEXT_PUBLIC_PROJECT_ID});var B=z.Z,C=new WeakMap,D=function(){function a(){(0,h.Z)(this,a),(0,j.Z)(this,C,{writable:!0,value:{toFirestore:function(a){return{nome:a.nome,idade:a.idade}},fromFirestore:function(a,b){var c=a.data(b);return new p(c.nome,c.idade,a.id)}}})}var b=a.prototype;return b.salvar=function(a){var b=this;return(0,w.Z)(y().mark(function c(){var d,e;return y().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(null==a?void 0:a.id)){c.next=6;break}return c.next=3,b.colecao().doc(a.id).set(a);case 3:return c.abrupt("return",a);case 6:return c.next=8,b.colecao().add(a);case 8:return d=c.sent,c.next=11,d.get();case 11:return e=c.sent,c.abrupt("return",e.data());case 13:case"end":return c.stop()}},c)}))()},b.excluir=function(a){var b=this;return(0,w.Z)(y().mark(function c(){return y().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",b.colecao().doc(a.id).delete());case 1:case"end":return c.stop()}},c)}))()},b.obterTodos=function(){var a=this;return(0,w.Z)(y().mark(function b(){var c,d;return y().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,a.colecao().get();case 2:return c=b.sent,b.abrupt("return",null!==(d=c.docs.map(function(a){return a.data()}))&& void 0!==d?d:[]);case 5:case"end":return b.stop()}},b)}))()},b.colecao=function(){return B.firestore().collection("clientes").withConverter((0,i.Z)(this,C))},a}();function E(){var a=function(){var a,b,c,d,e,f=function(){n.obterTodos().then(function(a){u(a),l()})},h=function(a){r(a),m()},i=function(){r(p.vazio()),m()},j=(b=(a=(0,g.useState)("tabela"))[0],c=a[1],d=function(){return c("tabela")},e=function(){return c("form")},{formularioVisivel:"form"===b,tabelaVisivel:"tabela"===b,exibirFormulario:e,exibirTabela:d}),k=j.tabelaVisivel,l=(j.formularioVisivel,j.exibirTabela),m=j.exibirFormulario,n=new D,o=(0,g.useState)(p.vazio()),q=o[0],r=o[1],s=(0,g.useState)([]),t=s[0],u=s[1];function v(){return(v=(0,w.Z)(y().mark(function a(b){return y().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.excluir(b);case 2:f();case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}function x(){return(x=(0,w.Z)(y().mark(function a(b){return y().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.salvar(b);case 2:f();case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}return(0,g.useEffect)(f,[]),{tabelaVisivel:k,exibirTabela:l,cliente:q,clientes:t,novoCliente:i,salvarCliente:function(a){return x.apply(this,arguments)},excluirCliente:function(a){return v.apply(this,arguments)},selecionarCliente:h,obterTodos:f}}(),b=a.cliente,c=a.clientes,f=a.tabelaVisivel,h=a.exibirTabela,i=a.salvarCliente,j=a.novoCliente,k=a.selecionarCliente,l=a.excluirCliente;return(0,d.jsx)("div",{className:"\n    flex justify-center items-center h-screen\n    bg-gradient-to-r from-blue-500 to-purple-500\n    text-white\n    ",children:(0,d.jsx)(s,{titulo:"Cadastro Simples",children:f?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)(e,{onClick:j,className:"mb-4",children:"Novo Cliente"})}),(0,d.jsx)(v,{clientes:c,clienteExcluido:l,clienteSelecionado:k})]}):(0,d.jsx)(q,{cancelado:h,cliente:b,clienteMudou:i})})})}}},function(a){a.O(0,[300,724,834,869,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])