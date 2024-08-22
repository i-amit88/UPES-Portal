"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[1917],{5529:function(e,t,n){var a=n(9439),c=n(2791),r=n(8134),o=n(5794),i=n(9529),l=n(2827),s=n(5458),u=n(3729),f=n(3451),d=n(9286),m=n(7962),p=n(586),g=n(1932),x=n(573),y=n(3388),h=n(1583),b=n(6859),v=n(2763),Z=n(7689),j=n(1087),w=n(184),C=p.Z.Header,O=p.Z.Content,E=p.Z.Footer,k=p.Z.Sider;t.Z=function(e){var t=(0,Z.TH)();(0,c.useEffect)((function(){if("management"!==(0,v.bW)().user.role)return window.location.href="/"}),[v.bW]);var n=(0,c.useState)(!0),S=(0,a.Z)(n,2),P=S[0],I=(S[1],(0,Z.s0)()),U=function(){(0,v.uf)().then((function(e){if(e.redirect)return I("/?logout=true")}))},A=[{key:"/management/dashboard",icon:c.createElement(r.Z),label:(0,w.jsx)(j.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:c.createElement(o.Z),label:(0,w.jsx)(j.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:c.createElement(i.Z),label:(0,w.jsx)(j.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:c.createElement(l.Z),label:(0,w.jsx)(j.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:c.createElement(s.Z),label:(0,w.jsx)(j.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:c.createElement(u.Z),label:(0,w.jsx)(j.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:c.createElement(f.Z),label:(0,w.jsx)(j.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:c.createElement(d.Z),label:(0,w.jsx)(j.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:c.createElement(u.Z),label:(0,w.jsx)(j.rU,{to:"/management/policy/view",children:"Policy"})},{key:"/management/evaluate",icon:c.createElement(u.Z),label:(0,w.jsx)(j.rU,{to:"/management/evaluate",children:"Evaluate"})},{key:"Logout",icon:c.createElement(m.Z),label:(0,w.jsx)(j.rU,{onClick:U,children:"Logout"})}],M=[{key:"2",label:(0,w.jsx)(j.rU,{to:"/management/profile",children:"Profile"})},{key:"1",label:(0,w.jsx)("a",{href:"#",onClick:function(){return U()},children:"Logout"})}];return(0,w.jsx)(g.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,w.jsxs)(p.Z,{children:[(0,w.jsxs)(k,{breakpoint:"lg",theme:P?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,w.jsx)("div",{className:"demo-logo-vertical",children:(0,w.jsx)(x.Z,{src:"/upesfull.png"})}),(0,w.jsx)(y.Z,{theme:P?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:A})]}),(0,w.jsxs)(p.Z,{children:[(0,w.jsx)(C,{style:{padding:0},children:(0,w.jsx)(h.Z,{menu:{items:M},placement:"bottom",children:(0,w.jsx)(b.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,w.jsx)(i.Z,{})})})}),(0,w.jsx)(O,{style:{margin:"24px 16px 0"},children:(0,w.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,w.jsx)(E,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},1917:function(e,t,n){n.r(t);var a=n(9439),c=n(2791),r=n(3655),o=n(6106),i=n(914),l=n(5529),s=n(2763),u=n(184);t.default=function(){var e=(0,c.useState)((0,s.bW)()),t=(0,a.Z)(e,1)[0];return(0,c.useEffect)((function(){document.title="Dashboard | SoCIS"})),(0,u.jsxs)(l.Z,{children:[(0,u.jsxs)(r.Z.Title,{children:["Greetings, ",(0,u.jsx)("br",{}),t.user.firstName]}),(0,u.jsx)(o.Z,{children:(0,u.jsx)(i.Z,{xs:{span:5,offset:1},lg:{span:6,offset:2}})})]})}},3451:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7462),c=n(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},o=n(4291),i=function(e,t){return c.createElement(o.Z,(0,a.Z)({},e,{ref:t,icon:r}))};var l=c.forwardRef(i)},914:function(e,t,n){var a=n(9752);t.Z=a.Z},9426:function(e,t,n){var a=(0,n(2791).createContext)({});t.Z=a},9752:function(e,t,n){var a=n(4942),c=n(9439),r=n(2791),o=n(1694),i=n.n(o),l=n(1929),s=n(9426),u=n(8554),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};var d=["xs","sm","md","lg","xl","xxl"],m=r.forwardRef((function(e,t){var n,o=r.useContext(l.E_),m=o.getPrefixCls,p=o.direction,g=r.useContext(s.Z),x=g.gutter,y=g.wrap,h=e.prefixCls,b=e.span,v=e.order,Z=e.offset,j=e.push,w=e.pull,C=e.className,O=e.children,E=e.flex,k=e.style,S=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=m("col",h),I=(0,u.c)(P),U=(0,c.Z)(I,2),A=U[0],M=U[1],W={};d.forEach((function(t){var n,c={},r=e[t];"number"===typeof r?c.span=r:"object"===typeof r&&(c=r||{}),delete S[t],W=Object.assign(Object.assign({},W),(n={},(0,a.Z)(n,"".concat(P,"-").concat(t,"-").concat(c.span),void 0!==c.span),(0,a.Z)(n,"".concat(P,"-").concat(t,"-order-").concat(c.order),c.order||0===c.order),(0,a.Z)(n,"".concat(P,"-").concat(t,"-offset-").concat(c.offset),c.offset||0===c.offset),(0,a.Z)(n,"".concat(P,"-").concat(t,"-push-").concat(c.push),c.push||0===c.push),(0,a.Z)(n,"".concat(P,"-").concat(t,"-pull-").concat(c.pull),c.pull||0===c.pull),(0,a.Z)(n,"".concat(P,"-").concat(t,"-flex-").concat(c.flex),c.flex||"auto"===c.flex),(0,a.Z)(n,"".concat(P,"-rtl"),"rtl"===p),n))}));var N=i()(P,(n={},(0,a.Z)(n,"".concat(P,"-").concat(b),void 0!==b),(0,a.Z)(n,"".concat(P,"-order-").concat(v),v),(0,a.Z)(n,"".concat(P,"-offset-").concat(Z),Z),(0,a.Z)(n,"".concat(P,"-push-").concat(j),j),(0,a.Z)(n,"".concat(P,"-pull-").concat(w),w),n),C,W,M),L={};if(x&&x[0]>0){var z=x[0]/2;L.paddingLeft=z,L.paddingRight=z}return E&&(L.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E),!1!==y||L.minWidth||(L.minWidth=0)),A(r.createElement("div",Object.assign({},S,{style:Object.assign(Object.assign({},L),k),className:N,ref:t}),O))}));t.Z=m},7545:function(e,t,n){var a=n(4942),c=n(9439),r=n(2791),o=n(1694),i=n.n(o),l=n(635),s=n(1929),u=n(9426),f=n(8554),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};function m(e,t){var n=r.useState("string"===typeof e?e:""),a=(0,c.Z)(n,2),o=a[0],i=a[1];return r.useEffect((function(){!function(){if("string"===typeof e&&i(e),"object"===typeof e)for(var n=0;n<l.c4.length;n++){var a=l.c4[n];if(t[a]){var c=e[a];if(void 0!==c)return void i(c)}}}()}),[JSON.stringify(e),t]),o}var p=r.forwardRef((function(e,t){var n,o=e.prefixCls,p=e.justify,g=e.align,x=e.className,y=e.style,h=e.children,b=e.gutter,v=void 0===b?0:b,Z=e.wrap,j=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=r.useContext(s.E_),C=w.getPrefixCls,O=w.direction,E=r.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),k=(0,c.Z)(E,2),S=k[0],P=k[1],I=r.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),U=(0,c.Z)(I,2),A=U[0],M=U[1],W=m(g,A),N=m(p,A),L=r.useRef(v),z=(0,l.ZP)();r.useEffect((function(){var e=z.subscribe((function(e){M(e);var t=L.current||0;(!Array.isArray(t)&&"object"===typeof t||Array.isArray(t)&&("object"===typeof t[0]||"object"===typeof t[1]))&&P(e)}));return function(){return z.unsubscribe(e)}}),[]);var R=C("row",o),D=(0,f.V)(R),F=(0,c.Z)(D,2),G=F[0],H=F[1],T=function(){var e=[void 0,void 0];return(Array.isArray(v)?v:[v,void 0]).forEach((function(t,n){if("object"===typeof t)for(var a=0;a<l.c4.length;a++){var c=l.c4[a];if(S[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t})),e}(),_=i()(R,(n={},(0,a.Z)(n,"".concat(R,"-no-wrap"),!1===Z),(0,a.Z)(n,"".concat(R,"-").concat(N),N),(0,a.Z)(n,"".concat(R,"-").concat(W),W),(0,a.Z)(n,"".concat(R,"-rtl"),"rtl"===O),n),x,H),B={},V=null!=T[0]&&T[0]>0?T[0]/-2:void 0;V&&(B.marginLeft=V,B.marginRight=V);var X=(0,c.Z)(T,2);B.rowGap=X[1];var K=(0,c.Z)(T,2),J=K[0],$=K[1],q=r.useMemo((function(){return{gutter:[J,$],wrap:Z}}),[J,$,Z]);return G(r.createElement(u.Z.Provider,{value:q},r.createElement("div",Object.assign({},j,{className:_,style:Object.assign(Object.assign({},B),y),ref:t}),h)))}));t.Z=p},8554:function(e,t,n){n.d(t,{V:function(){return s},c:function(){return u}});var a=n(4942),c=n(5564),r=n(9922),o=function(e){var t=e.componentCls;return(0,a.Z)({},t,{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}})},i=function(e){var t=e.componentCls;return(0,a.Z)({},t,{position:"relative",maxWidth:"100%",minHeight:1})},l=function(e,t){return function(e,t){for(var n=e.componentCls,c=e.gridColumns,r={},o=c;o>=0;o--){var i;0===o?(r["".concat(n).concat(t,"-").concat(o)]={display:"none"},r["".concat(n,"-push-").concat(o)]={insetInlineStart:"auto"},r["".concat(n,"-pull-").concat(o)]={insetInlineEnd:"auto"},r["".concat(n).concat(t,"-push-").concat(o)]={insetInlineStart:"auto"},r["".concat(n).concat(t,"-pull-").concat(o)]={insetInlineEnd:"auto"},r["".concat(n).concat(t,"-offset-").concat(o)]={marginInlineStart:0},r["".concat(n).concat(t,"-order-").concat(o)]={order:0}):(r["".concat(n).concat(t,"-").concat(o)]=[(i={},(0,a.Z)(i,"--ant-display","block"),(0,a.Z)(i,"display","block"),i),{display:"var(--ant-display)",flex:"0 0 ".concat(o/c*100,"%"),maxWidth:"".concat(o/c*100,"%")}],r["".concat(n).concat(t,"-push-").concat(o)]={insetInlineStart:"".concat(o/c*100,"%")},r["".concat(n).concat(t,"-pull-").concat(o)]={insetInlineEnd:"".concat(o/c*100,"%")},r["".concat(n).concat(t,"-offset-").concat(o)]={marginInlineStart:"".concat(o/c*100,"%")},r["".concat(n).concat(t,"-order-").concat(o)]={order:o})}return r}(e,t)},s=(0,c.Z)("Grid",(function(e){return[o(e)]})),u=(0,c.Z)("Grid",(function(e){var t=(0,r.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[i(t),l(t,""),l(t,"-xs"),Object.keys(n).map((function(e){return function(e,t,n){return(0,a.Z)({},"@media (min-width: ".concat(t,"px)"),Object.assign({},l(e,n)))}(t,n[e],e)})).reduce((function(e,t){return Object.assign(Object.assign({},e),t)}),{})]}))},6106:function(e,t,n){var a=n(7545);t.Z=a.Z}}]);
//# sourceMappingURL=1917.04f35e6c.chunk.js.map