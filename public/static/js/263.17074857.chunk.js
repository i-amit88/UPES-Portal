"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[263],{889:function(e,t,n){var c=n(9439),a=n(2791),r=n(8134),o=n(7944),l=n(9150),i=n(9529),s=n(3451),u=n(3876),f=n(7962),d=n(4006),p=n(2542),y=n(586),m=n(3296),x=n(2145),g=n(3388),h=n(6859),b=n(1894),Z=n(2763),v=n(7689),j=n(1087),w=n(184),O=y.Z.Header,k=y.Z.Content,E=y.Z.Footer,C=y.Z.Sider;t.Z=function(e){var t=(0,v.TH)();(0,a.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?N("/"):"faculty"!==(0,Z.bW)().user.role?window.location.href="/":void 0}),[Z.bW]);var n=(0,a.useState)(!0),S=(0,c.Z)(n,2),I=S[0],P=S[1],N=(0,v.s0)(),U=m.Z.useToken().token.colorBgContainer,M=[{key:"/faculty/dashboard",icon:a.createElement(r.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:a.createElement(o.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"announcement",icon:a.createElement(l.Z),label:"Announcements",children:[{key:"/faculty/announcement/view",icon:a.createElement(o.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/announcement/view",children:"View"})}]},{key:"/faculty/course",icon:a.createElement(i.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:a.createElement(i.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/profile",children:"Profile"})},{key:"post",icon:a.createElement(s.Z),label:"Post",children:[{key:"/faculty/post/new",icon:a.createElement(o.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/post/new",children:"New"})},{key:"/faculty/post/view",icon:a.createElement(o.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/post/view",children:"View"})}]},{key:"message",icon:a.createElement(s.Z),label:"Message",children:[{key:"/faculty/message/new",icon:a.createElement(o.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/message/new",children:"New"})},{key:"/faculty/message/view",icon:a.createElement(o.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/message/view",children:"View"})}]},{key:"policy",icon:a.createElement(u.Z),label:"Policy",children:[{key:"/faculty/policy/view",icon:a.createElement(o.Z),label:(0,w.jsx)(j.rU,{to:"/faculty/policy/view",children:"View"})}]},{key:"Logout",icon:a.createElement(f.Z),label:(0,w.jsx)(j.rU,{onClick:function(){(0,Z.uf)().then((function(e){if(e.redirect)return N("/?logout=true")}))},children:"Logout"})}];return(0,w.jsxs)(y.Z,{children:[(0,w.jsxs)(C,{breakpoint:"lg",theme:I?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,w.jsx)("div",{className:"demo-logo-vertical",children:(0,w.jsx)(x.Z,{src:"/upesfull.png"})}),(0,w.jsx)(g.Z,{theme:I?"dark":"light",mode:"inline",defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:M})]}),(0,w.jsxs)(y.Z,{children:[(0,w.jsx)(O,{style:{padding:0,background:U},children:(0,w.jsx)(h.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,w.jsx)(i.Z,{})})}),(0,w.jsx)(k,{style:{margin:"24px 16px 0",background:U},children:(0,w.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,w.jsx)(E,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,w.jsx)(b.Z,{icon:I?(0,w.jsx)(d.Z,{}):(0,w.jsx)(p.Z,{}),onClick:function(){P(!I)}})]})}},7263:function(e,t,n){n.r(t);var c=n(9439),a=n(2791),r=n(3655),o=n(6106),l=n(914),i=n(2763),s=n(889),u=n(184);t.default=function(){var e=(0,a.useState)((0,i.bW)()),t=(0,c.Z)(e,2),n=t[0];t[1];return(0,a.useEffect)((function(){document.title="Dashboard | SoCIS"})),(0,u.jsxs)(s.Z,{children:[(0,u.jsxs)(r.Z.Title,{children:["Greetings, ",(0,u.jsx)("br",{}),n.user.firstName]}),(0,u.jsx)(o.Z,{children:(0,u.jsx)(l.Z,{xs:{span:5,offset:1},lg:{span:6,offset:2}})})]})}},914:function(e,t,n){var c=n(9752);t.Z=c.Z},9426:function(e,t,n){var c=(0,n(2791).createContext)({});t.Z=c},9752:function(e,t,n){var c=n(4942),a=n(9439),r=n(2791),o=n(1694),l=n.n(o),i=n(1929),s=n(9426),u=n(8554),f=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n};var d=["xs","sm","md","lg","xl","xxl"],p=r.forwardRef((function(e,t){var n,o=r.useContext(i.E_),p=o.getPrefixCls,y=o.direction,m=r.useContext(s.Z),x=m.gutter,g=m.wrap,h=e.prefixCls,b=e.span,Z=e.order,v=e.offset,j=e.push,w=e.pull,O=e.className,k=e.children,E=e.flex,C=e.style,S=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),I=p("col",h),P=(0,u.c)(I),N=(0,a.Z)(P,2),U=N[0],M=N[1],W={};d.forEach((function(t){var n,a={},r=e[t];"number"===typeof r?a.span=r:"object"===typeof r&&(a=r||{}),delete S[t],W=Object.assign(Object.assign({},W),(n={},(0,c.Z)(n,"".concat(I,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,c.Z)(n,"".concat(I,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,c.Z)(n,"".concat(I,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,c.Z)(n,"".concat(I,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,c.Z)(n,"".concat(I,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,c.Z)(n,"".concat(I,"-").concat(t,"-flex-").concat(a.flex),a.flex||"auto"===a.flex),(0,c.Z)(n,"".concat(I,"-rtl"),"rtl"===y),n))}));var A=l()(I,(n={},(0,c.Z)(n,"".concat(I,"-").concat(b),void 0!==b),(0,c.Z)(n,"".concat(I,"-order-").concat(Z),Z),(0,c.Z)(n,"".concat(I,"-offset-").concat(v),v),(0,c.Z)(n,"".concat(I,"-push-").concat(j),j),(0,c.Z)(n,"".concat(I,"-pull-").concat(w),w),n),O,W,M),L={};if(x&&x[0]>0){var V=x[0]/2;L.paddingLeft=V,L.paddingRight=V}return E&&(L.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E),!1!==g||L.minWidth||(L.minWidth=0)),U(r.createElement("div",Object.assign({},S,{style:Object.assign(Object.assign({},L),C),className:A,ref:t}),k))}));t.Z=p},7545:function(e,t,n){var c=n(4942),a=n(9439),r=n(2791),o=n(1694),l=n.n(o),i=n(635),s=n(1929),u=n(9426),f=n(8554),d=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n};function p(e,t){var n=r.useState("string"===typeof e?e:""),c=(0,a.Z)(n,2),o=c[0],l=c[1];return r.useEffect((function(){!function(){if("string"===typeof e&&l(e),"object"===typeof e)for(var n=0;n<i.c4.length;n++){var c=i.c4[n];if(t[c]){var a=e[c];if(void 0!==a)return void l(a)}}}()}),[JSON.stringify(e),t]),o}var y=r.forwardRef((function(e,t){var n,o=e.prefixCls,y=e.justify,m=e.align,x=e.className,g=e.style,h=e.children,b=e.gutter,Z=void 0===b?0:b,v=e.wrap,j=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=r.useContext(s.E_),O=w.getPrefixCls,k=w.direction,E=r.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=(0,a.Z)(E,2),S=C[0],I=C[1],P=r.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),N=(0,a.Z)(P,2),U=N[0],M=N[1],W=p(m,U),A=p(y,U),L=r.useRef(Z),V=(0,i.ZP)();r.useEffect((function(){var e=V.subscribe((function(e){M(e);var t=L.current||0;(!Array.isArray(t)&&"object"===typeof t||Array.isArray(t)&&("object"===typeof t[0]||"object"===typeof t[1]))&&I(e)}));return function(){return V.unsubscribe(e)}}),[]);var G=O("row",o),R=(0,f.V)(G),T=(0,a.Z)(R,2),D=T[0],H=T[1],_=function(){var e=[void 0,void 0];return(Array.isArray(Z)?Z:[Z,void 0]).forEach((function(t,n){if("object"===typeof t)for(var c=0;c<i.c4.length;c++){var a=i.c4[c];if(S[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t})),e}(),X=l()(G,(n={},(0,c.Z)(n,"".concat(G,"-no-wrap"),!1===v),(0,c.Z)(n,"".concat(G,"-").concat(A),A),(0,c.Z)(n,"".concat(G,"-").concat(W),W),(0,c.Z)(n,"".concat(G,"-rtl"),"rtl"===k),n),x,H),B={},F=null!=_[0]&&_[0]>0?_[0]/-2:void 0;F&&(B.marginLeft=F,B.marginRight=F);var J=(0,a.Z)(_,2);B.rowGap=J[1];var K=(0,a.Z)(_,2),z=K[0],$=K[1],q=r.useMemo((function(){return{gutter:[z,$],wrap:v}}),[z,$,v]);return D(r.createElement(u.Z.Provider,{value:q},r.createElement("div",Object.assign({},j,{className:X,style:Object.assign(Object.assign({},B),g),ref:t}),h)))}));t.Z=y},8554:function(e,t,n){n.d(t,{V:function(){return s},c:function(){return u}});var c=n(4942),a=n(5564),r=n(9922),o=function(e){var t=e.componentCls;return(0,c.Z)({},t,{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}})},l=function(e){var t=e.componentCls;return(0,c.Z)({},t,{position:"relative",maxWidth:"100%",minHeight:1})},i=function(e,t){return function(e,t){for(var n=e.componentCls,a=e.gridColumns,r={},o=a;o>=0;o--){var l;0===o?(r["".concat(n).concat(t,"-").concat(o)]={display:"none"},r["".concat(n,"-push-").concat(o)]={insetInlineStart:"auto"},r["".concat(n,"-pull-").concat(o)]={insetInlineEnd:"auto"},r["".concat(n).concat(t,"-push-").concat(o)]={insetInlineStart:"auto"},r["".concat(n).concat(t,"-pull-").concat(o)]={insetInlineEnd:"auto"},r["".concat(n).concat(t,"-offset-").concat(o)]={marginInlineStart:0},r["".concat(n).concat(t,"-order-").concat(o)]={order:0}):(r["".concat(n).concat(t,"-").concat(o)]=[(l={},(0,c.Z)(l,"--ant-display","block"),(0,c.Z)(l,"display","block"),l),{display:"var(--ant-display)",flex:"0 0 ".concat(o/a*100,"%"),maxWidth:"".concat(o/a*100,"%")}],r["".concat(n).concat(t,"-push-").concat(o)]={insetInlineStart:"".concat(o/a*100,"%")},r["".concat(n).concat(t,"-pull-").concat(o)]={insetInlineEnd:"".concat(o/a*100,"%")},r["".concat(n).concat(t,"-offset-").concat(o)]={marginInlineStart:"".concat(o/a*100,"%")},r["".concat(n).concat(t,"-order-").concat(o)]={order:o})}return r}(e,t)},s=(0,a.Z)("Grid",(function(e){return[o(e)]})),u=(0,a.Z)("Grid",(function(e){var t=(0,r.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[l(t),i(t,""),i(t,"-xs"),Object.keys(n).map((function(e){return function(e,t,n){return(0,c.Z)({},"@media (min-width: ".concat(t,"px)"),Object.assign({},i(e,n)))}(t,n[e],e)})).reduce((function(e,t){return Object.assign(Object.assign({},e),t)}),{})]}))},6106:function(e,t,n){var c=n(7545);t.Z=c.Z}}]);
//# sourceMappingURL=263.17074857.chunk.js.map