"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[12],{2002:function(e,n,t){t(2791);var a=t(6106),c=t(914),l=t(8844),i=t(7647),o=t(462),r=t(3655),s=t(1087),u=t(2763),d=t(184);n.Z=function(e){return(0,d.jsx)(a.Z,{children:e.data.map((function(e){return(0,d.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},style:{margin:"20px"},children:(0,d.jsx)(s.rU,{to:"".concat(e._id),children:(0,d.jsx)(l.Z.Ribbon,{text:String(e.createdAt.split("T")[0]),children:(0,d.jsxs)(i.Z,{bordered:!0,actions:[(0,d.jsx)(s.rU,{style:{visibility:"management"===(0,u.bW)().user.role?"visible":"hidden"},to:"/management/announcement/new?id=".concat(e._id),children:(0,d.jsx)(o.ZP,{children:"Update"})})],children:[(0,d.jsx)(r.Z.Title,{style:{fontSize:"18px"},children:e.title}),(0,d.jsx)(r.Z.Text,{children:e.description}),(0,d.jsxs)(r.Z.Title,{style:{fontSize:"12px",textAlign:"right"},children:[e.from.firstName," ",(0,d.jsx)("br",{}),"(",e.from.designations,")"]})]})})})},e._id)}))})}},6122:function(e,n,t){t(2791);var a=t(6106),c=t(914),l=t(183),i=t(184);n.Z=function(e){return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},1),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},2),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},3),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},4),(0,i.jsx)(c.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,i.jsx)(l.Z,{active:!0})},5)]})}},4264:function(e,n,t){var a=t(3655),c=(t(2791),t(184));n.Z=function(e){return(0,c.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},889:function(e,n,t){var a=t(9439),c=t(2791),l=t(8134),i=t(5794),o=t(9150),r=t(3729),s=t(2827),u=t(5458),d=t(8961),m=t(9286),f=t(3451),h=t(3876),p=t(7962),g=t(9529),x=t(4006),y=t(2542),j=t(586),Z=t(3296),v=t(2145),b=t(3388),w=t(6859),k=t(1894),E=t(2763),N=t(7689),C=t(1087),S=t(184),U=j.Z.Header,P=j.Z.Content,O=j.Z.Footer,T=j.Z.Sider;n.Z=function(e){var n=(0,N.TH)();(0,c.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?B("/"):"faculty"!==(0,E.bW)().user.role?window.location.href="/":void 0}),[E.bW]);var t=(0,c.useState)(!0),A=(0,a.Z)(t,2),z=A[0],L=A[1],B=(0,N.s0)(),I=Z.Z.useToken().token.colorBgContainer,V=[{key:"/faculty/dashboard",icon:c.createElement(l.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:c.createElement(i.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"announcement",icon:c.createElement(o.Z),label:"Announcements",children:[{key:"/faculty/announcement/view",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/announcement/view",children:"View"})}]},{key:"/faculty/course",icon:c.createElement(s.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:c.createElement(u.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/profile",children:"Profile"})},{key:"post",icon:c.createElement(d.Z),label:"Post",children:[{key:"/faculty/post/new",icon:c.createElement(m.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/post/new",children:"New"})},{key:"/faculty/post/view",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/post/view",children:"View"})}]},{key:"message",icon:c.createElement(f.Z),label:"Message",children:[{key:"/faculty/message/new",icon:c.createElement(m.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/message/new",children:"New"})},{key:"/faculty/message/view",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/message/view",children:"View"})}]},{key:"policy",icon:c.createElement(h.Z),label:"Policy",children:[{key:"/faculty/policy/view",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/faculty/policy/view",children:"View"})}]},{key:"Logout",icon:c.createElement(p.Z),label:(0,S.jsx)(C.rU,{onClick:function(){(0,E.uf)().then((function(e){if(e.redirect)return B("/?logout=true")}))},children:"Logout"})}];return(0,S.jsxs)(j.Z,{children:[(0,S.jsxs)(T,{breakpoint:"lg",theme:z?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,S.jsx)("div",{className:"demo-logo-vertical",children:(0,S.jsx)(v.Z,{src:"/upesfull.png"})}),(0,S.jsx)(b.Z,{theme:z?"dark":"light",mode:"inline",defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:V})]}),(0,S.jsxs)(j.Z,{children:[(0,S.jsx)(U,{style:{padding:0,background:I},children:(0,S.jsx)(w.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,S.jsx)(g.Z,{})})}),(0,S.jsx)(P,{style:{margin:"24px 16px 0",background:I},children:(0,S.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,S.jsx)(O,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,S.jsx)(k.Z,{icon:z?(0,S.jsx)(x.Z,{}):(0,S.jsx)(y.Z,{}),onClick:function(){L(!z)}})]})}},5529:function(e,n,t){var a=t(9439),c=t(2791),l=t(8134),i=t(5794),o=t(9529),r=t(2827),s=t(5458),u=t(9150),d=t(9286),m=t(3729),f=t(3451),h=t(8961),p=t(3876),g=t(7962),x=t(4006),y=t(2542),j=t(586),Z=t(3296),v=t(2145),b=t(3388),w=t(6859),k=t(1894),E=t(2763),N=t(7689),C=t(1087),S=t(184),U=j.Z.Header,P=j.Z.Content,O=j.Z.Footer,T=j.Z.Sider;n.Z=function(e){var n=(0,N.TH)();(0,c.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?B("/"):"management"!==(0,E.bW)().user.role?window.location.href="/":void 0}),[E.bW]);var t=(0,c.useState)(!0),A=(0,a.Z)(t,2),z=A[0],L=A[1],B=(0,N.s0)(),I=Z.Z.useToken().token.colorBgContainer,V=[{key:"/management/dashboard",icon:c.createElement(l.Z),label:(0,S.jsx)(C.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:c.createElement(i.Z),label:(0,S.jsx)(C.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:c.createElement(o.Z),label:(0,S.jsx)(C.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:c.createElement(r.Z),label:(0,S.jsx)(C.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:c.createElement(s.Z),label:(0,S.jsx)(C.rU,{to:"/management/profile",children:"Profile"})},{key:"announcement",icon:c.createElement(u.Z),label:"Announcements",children:[{key:"/management/announcement/new",icon:c.createElement(d.Z),label:(0,S.jsx)(C.rU,{to:"/management/announcement/new",children:"New"})},{key:"/management/announcement/view",icon:c.createElement(m.Z),label:(0,S.jsx)(C.rU,{to:"/management/announcement/view",children:"View"})}]},{key:"message",icon:c.createElement(f.Z),label:"Message",children:[{key:"/management/message/new",icon:c.createElement(d.Z),label:(0,S.jsx)(C.rU,{to:"/management/message/new",children:"New"})},{key:"/management/message/view",icon:c.createElement(m.Z),label:(0,S.jsx)(C.rU,{to:"/management/message/view",children:"View"})}]},{key:"post",icon:c.createElement(h.Z),label:"Post",children:[{key:"/management/post/new",icon:c.createElement(d.Z),label:(0,S.jsx)(C.rU,{to:"/management/post/new",children:"New"})},{key:"/management/post/view",icon:c.createElement(m.Z),label:(0,S.jsx)(C.rU,{to:"/management/post/view",children:"View"})}]},{key:"policy",icon:c.createElement(p.Z),label:"Policy",children:[{key:"/management/policy/new",icon:c.createElement(d.Z),label:(0,S.jsx)(C.rU,{to:"/management/policy/new",children:"New"})},{key:"/management/policy/view",icon:c.createElement(m.Z),label:(0,S.jsx)(C.rU,{to:"/management/policy/view",children:"View"})}]},{key:"Logout",icon:c.createElement(g.Z),label:(0,S.jsx)(C.rU,{onClick:function(){(0,E.uf)().then((function(e){if(e.redirect)return B("/?logout=true")}))},children:"Logout"})}];return(0,S.jsxs)(j.Z,{children:[(0,S.jsxs)(T,{breakpoint:"lg",theme:z?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,S.jsx)("div",{className:"demo-logo-vertical",children:(0,S.jsx)(v.Z,{src:"/upesfull.png"})}),(0,S.jsx)(b.Z,{theme:z?"dark":"light",mode:"inline",defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:V})]}),(0,S.jsxs)(j.Z,{children:[(0,S.jsx)(U,{style:{padding:0,background:I},children:(0,S.jsx)(w.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,S.jsx)(o.Z,{})})}),(0,S.jsx)(P,{style:{margin:"24px 16px 0",background:I},children:(0,S.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,S.jsx)(O,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,S.jsx)(k.Z,{icon:z?(0,S.jsx)(x.Z,{}):(0,S.jsx)(y.Z,{}),onClick:function(){L(!z)}})]})}},7427:function(e,n,t){t.d(n,{Pg:function(){return o},_5:function(){return r},k4:function(){return i},k5:function(){return s},qm:function(){return u}});var a=t(9455),c=t(2763),l=a.p2,i=function(e){return fetch("".concat(l,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},o=function(e){return fetch("".concat(l,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},r=function(e){return fetch("".concat(l,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(l,"/announcement/").concat(e.announcementId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e){return fetch("".concat(l,"/all?page=").concat(e),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},1012:function(e,n,t){t.r(n);var a=t(9439),c=t(2791),l=(t(5529),t(4264)),i=t(5476),o=t(1773),r=t(4099),s=t(7427),u=t(2002),d=t(6122),m=t(889),f=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],h=n[1],p=(0,c.useState)(!0),g=(0,a.Z)(p,2),x=g[0],y=g[1],j=(0,c.useState)({}),Z=(0,a.Z)(j,2),v=Z[0],b=Z[1],w=i.Z.useNotification(),k=(0,a.Z)(w,2),E=(k[0],k[1]);(0,c.useEffect)((function(){document.title="Announcements | SoCIS",(0,s.qm)(1).then((function(e){b(e),h(e.docs),y(!1)})).catch((function(e){console.log(e)}))}),[h,b]);return(0,f.jsxs)(m.Z,{children:[E,(0,f.jsx)(l.Z,{title:"Announcements"}),(0,f.jsx)(o.Z,{}),x?(0,f.jsx)(d.Z,{}):(0,f.jsx)(u.Z,{data:t}),(0,f.jsx)("br",{}),(0,f.jsx)(r.Z,{current:v.page,pageSize:1,onChange:function(e){return function(e){y(!0),(0,s.qm)(e).then((function(e){b(e),h(e.docs),y(!1)})).catch((function(e){console.log(e)}))}(e)},total:v.totalPages,style:{alignSelf:"center"}})]})}},1773:function(e,n,t){t.d(n,{Z:function(){return Z}});var a=t(4942),c=t(9439),l=t(2791),i=t(1694),o=t.n(i),r=t(5501);function s(e){return["small","middle","large"].includes(e)}function u(e){return!!e&&("number"===typeof e&&!Number.isNaN(e))}var d=t(1929),m=t(11),f=l.createContext({latestIndex:0}),h=f.Provider,p=function(e){var n=e.className,t=e.index,a=e.children,c=e.split,i=e.style,o=l.useContext(f).latestIndex;return null===a||void 0===a?null:l.createElement(l.Fragment,null,l.createElement("div",{className:n,style:i},a),t<o&&c&&l.createElement("span",{className:"".concat(n,"-split")},c))},g=t(1294),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},y=l.forwardRef((function(e,n){var t,i,m,f=l.useContext(d.E_),y=f.getPrefixCls,j=f.space,Z=f.direction,v=e.size,b=void 0===v?(null===j||void 0===j?void 0:j.size)||"small":v,w=e.align,k=e.className,E=e.rootClassName,N=e.children,C=e.direction,S=void 0===C?"horizontal":C,U=e.prefixCls,P=e.split,O=e.style,T=e.wrap,A=void 0!==T&&T,z=e.classNames,L=e.styles,B=x(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),I=Array.isArray(b)?b:[b,b],V=(0,c.Z)(I,2),W=V[0],_=V[1],H=s(_),D=s(W),J=u(_),M=u(W),F=(0,r.Z)(N,{keepEmpty:!0}),G=void 0===w&&"horizontal"===S?"center":w,K=y("space",U),q=(0,g.Z)(K),R=(0,c.Z)(q,2),Q=R[0],X=R[1],Y=o()(K,null===j||void 0===j?void 0:j.className,X,"".concat(K,"-").concat(S),(t={},(0,a.Z)(t,"".concat(K,"-rtl"),"rtl"===Z),(0,a.Z)(t,"".concat(K,"-align-").concat(G),G),(0,a.Z)(t,"".concat(K,"-gap-row-").concat(_),H),(0,a.Z)(t,"".concat(K,"-gap-col-").concat(W),D),t),k,E),$=o()("".concat(K,"-item"),null!==(i=null===z||void 0===z?void 0:z.item)&&void 0!==i?i:null===(m=null===j||void 0===j?void 0:j.classNames)||void 0===m?void 0:m.item),ee=0,ne=F.map((function(e,n){var t,a;null!==e&&void 0!==e&&(ee=n);var c=e&&e.key||"".concat($,"-").concat(n);return l.createElement(p,{className:$,key:c,index:n,split:P,style:null!==(t=null===L||void 0===L?void 0:L.item)&&void 0!==t?t:null===(a=null===j||void 0===j?void 0:j.styles)||void 0===a?void 0:a.item},e)})),te=l.useMemo((function(){return{latestIndex:ee}}),[ee]);if(0===F.length)return null;var ae={};return A&&(ae.flexWrap="wrap"),!D&&M&&(ae.columnGap=W),!H&&J&&(ae.rowGap=_),Q(l.createElement("div",Object.assign({ref:n,className:Y,style:Object.assign(Object.assign(Object.assign({},ae),null===j||void 0===j?void 0:j.style),O)},B),l.createElement(h,{value:te},ne)))}));var j=y;j.Compact=m.ZP;var Z=j}}]);
//# sourceMappingURL=12.9648809d.chunk.js.map