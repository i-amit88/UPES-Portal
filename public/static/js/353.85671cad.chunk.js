"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[353],{4264:function(e,n,t){var a=t(3655),r=(t(2791),t(184));n.Z=function(e){return(0,r.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var a=t(9439),r=t(2791),i=t(8134),l=t(5794),c=t(9529),o=t(2827),s=t(5458),m=t(9150),d=t(9286),u=t(3729),g=t(3451),h=t(8961),f=t(3876),x=t(7962),y=t(4006),p=t(2542),Z=t(586),j=t(3296),k=t(2145),b=t(3388),w=t(6859),E=t(1894),v=t(2763),S=t(7689),U=t(1087),N=t(184),I=Z.Z.Header,C=Z.Z.Content,M=Z.Z.Footer,P=Z.Z.Sider;n.Z=function(e){var n=(0,S.TH)();(0,r.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?F("/"):"management"!==(0,v.bW)().user.role?window.location.href="/":void 0}),[v.bW]);var t=(0,r.useState)(!0),O=(0,a.Z)(t,2),T=O[0],A=O[1],F=(0,S.s0)(),R=j.Z.useToken().token.colorBgContainer,D=[{key:"/management/dashboard",icon:r.createElement(i.Z),label:(0,N.jsx)(U.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:r.createElement(l.Z),label:(0,N.jsx)(U.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:r.createElement(c.Z),label:(0,N.jsx)(U.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:r.createElement(o.Z),label:(0,N.jsx)(U.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:r.createElement(s.Z),label:(0,N.jsx)(U.rU,{to:"/management/profile",children:"Profile"})},{key:"announcement",icon:r.createElement(m.Z),label:"Announcements",children:[{key:"/management/announcement/new",icon:r.createElement(d.Z),label:(0,N.jsx)(U.rU,{to:"/management/announcement/new",children:"New"})},{key:"/management/announcement/view",icon:r.createElement(u.Z),label:(0,N.jsx)(U.rU,{to:"/management/announcement/view",children:"View"})}]},{key:"message",icon:r.createElement(g.Z),label:"Message",children:[{key:"/management/message/new",icon:r.createElement(d.Z),label:(0,N.jsx)(U.rU,{to:"/management/message/new",children:"New"})},{key:"/management/message/view",icon:r.createElement(u.Z),label:(0,N.jsx)(U.rU,{to:"/management/message/view",children:"View"})}]},{key:"post",icon:r.createElement(h.Z),label:"Post",children:[{key:"/management/post/new",icon:r.createElement(d.Z),label:(0,N.jsx)(U.rU,{to:"/management/post/new",children:"New"})},{key:"/management/post/view",icon:r.createElement(u.Z),label:(0,N.jsx)(U.rU,{to:"/management/post/view",children:"View"})}]},{key:"policy",icon:r.createElement(f.Z),label:"Policy",children:[{key:"/management/policy/new",icon:r.createElement(d.Z),label:(0,N.jsx)(U.rU,{to:"/management/policy/new",children:"New"})},{key:"/management/policy/view",icon:r.createElement(u.Z),label:(0,N.jsx)(U.rU,{to:"/management/policy/view",children:"View"})}]},{key:"Logout",icon:r.createElement(x.Z),label:(0,N.jsx)(U.rU,{onClick:function(){(0,v.uf)().then((function(e){if(e.redirect)return F("/?logout=true")}))},children:"Logout"})}];return(0,N.jsxs)(Z.Z,{children:[(0,N.jsxs)(P,{breakpoint:"lg",theme:T?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,N.jsx)("div",{className:"demo-logo-vertical",children:(0,N.jsx)(k.Z,{src:"/upesfull.png"})}),(0,N.jsx)(b.Z,{theme:T?"dark":"light",mode:"inline",defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:D})]}),(0,N.jsxs)(Z.Z,{children:[(0,N.jsx)(I,{style:{padding:0,background:R},children:(0,N.jsx)(w.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,N.jsx)(c.Z,{})})}),(0,N.jsx)(C,{style:{margin:"24px 16px 0",background:R},children:(0,N.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,N.jsx)(M,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,N.jsx)(E.Z,{icon:T?(0,N.jsx)(y.Z,{}):(0,N.jsx)(p.Z,{}),onClick:function(){A(!T)}})]})}},4353:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(9439),r=t(2791),i=t(5529),l=t(4264),c=t(5476),o=t(1773),s=t(4099),m=t(1087),d=t(7689),u=t(8417),g=t(184),h=function(e){return(0,g.jsx)(u.Z,{loading:e.loading,columns:e.columns,dataSource:e.data,pagination:!1})},f=t(2763),x=function(){var e=(0,r.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],x=(0,r.useState)(!0),y=(0,a.Z)(x,2),p=y[0],Z=y[1],j=(0,r.useState)({}),k=(0,a.Z)(j,2),b=k[0],w=k[1],E=c.Z.useNotification(),v=(0,a.Z)(E,2),S=v[0],U=v[1],N=function(e){var n=e.type,t=e.message;S[n]({message:t})},I=function(){var e=(0,d.TH)().search;return r.useMemo((function(){return new URLSearchParams(e)}),[e])}();(0,r.useEffect)((function(){document.title="Faculty | SoCIS",(0,f.Rf)({page:1}).then((function(e){if(e.error)return N({type:"error",message:"Error Occurred!"});w(e),u(e.docs),Z(!1)})).catch((function(e){return N({type:"error",message:"Error Occurred!"})}))}),[u,w,I]);var C=[{title:"SAP ID",dataIndex:"sapId",key:"sapId"},{title:"First Name",dataIndex:"firstName",key:"firstName"},{title:"Email",dataIndex:"email",key:"email"},{title:"Reporting Manager Name",dataIndex:["reportingManager","firstName"],key:"reportingManger.firstName"},{title:"Reporting Manager SAPID",dataIndex:["reportingManager","sapId"],key:"reportingManger.firstName"},{title:"Actions",dataIndex:"_id",key:"_id",render:function(e){return(0,g.jsxs)("div",{children:[(0,g.jsx)(m.rU,{to:"".concat(e),children:"Profile"})," | ",(0,g.jsx)(m.rU,{to:"/management/timetable?userId=".concat(e),children:"Timetable"},e)]})}}];return(0,g.jsxs)(i.Z,{children:[U,(0,g.jsx)(l.Z,{title:"Faculty"}),(0,g.jsx)(o.Z,{}),(0,g.jsx)(h,{loading:p,columns:C,data:t}),(0,g.jsx)("br",{}),(0,g.jsx)(s.Z,{current:b.page,pageSize:1,onChange:function(e){return function(e){Z(!0),(0,f.Rf)({page:e}).then((function(e){if(e.error)return N({type:"error",message:"Error Occurred!"});w(e),u(e.docs),Z(!1)})).catch((function(e){return N({type:"error",message:"Error Occurred!"})}))}(e)},total:b.totalPages,style:{alignSelf:"center"}})]})}}}]);
//# sourceMappingURL=353.85671cad.chunk.js.map