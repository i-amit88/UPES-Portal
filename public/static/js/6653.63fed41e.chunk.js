"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[6653],{6122:function(e,t,n){n(2791);var c=n(6106),o=n(914),i=n(183),r=n(184);t.Z=function(e){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},1),(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},2),(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},3),(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},4),(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},5),(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},6),(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},7),(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},8),(0,r.jsx)(o.Z,{xs:{span:5,offset:2},lg:{span:5,offset:2},children:(0,r.jsx)(i.Z,{active:!0})},9)]})}},4264:function(e,t,n){var c=n(3655),o=(n(2791),n(184));t.Z=function(e){return(0,o.jsx)(c.Z.Title,{style:{fontSize:"24px"},children:e.title})}},7312:function(e,t,n){n(2791);var c=n(6106),o=n(914),i=n(8844),r=n(6473),s=n(2641),a=n(3655),l=n(1087),u=n(2763),f=n(184);t.Z=function(e){return(0,f.jsx)(c.Z,{children:e.data.map((function(e){return(0,f.jsx)(o.Z,{xs:{span:5,offset:1},lg:{span:5,offset:1},style:{margin:"20px"},children:(0,f.jsx)(l.rU,{to:"".concat(e._id),children:(0,f.jsx)(i.Z.Ribbon,{text:"Updated: ".concat(String(e.updatedAt.split("T")[0])),children:(0,f.jsxs)(r.Z,{bordered:!0,actions:[(0,f.jsx)(l.rU,{to:"".concat(e._id),children:(0,f.jsx)(s.ZP,{children:"View"})}),(0,f.jsx)(l.rU,{style:{visibility:"management"===(0,u.bW)().user.role?"visible":"hidden"},to:"/management/post/new?id=".concat(e._id),children:(0,f.jsx)(s.ZP,{children:"Update"})})],children:[(0,f.jsx)(a.Z.Title,{style:{fontSize:"18px"},children:e.title}),(0,f.jsx)(a.Z.Text,{children:e.excerpt})]})})})},e._id)}))})}},889:function(e,t,n){var c=n(9439),o=n(2791),i=n(8134),r=n(5794),s=n(3729),a=n(2827),l=n(5458),u=n(9286),f=n(7962),d=n(9529),h=n(586),p=n(1932),x=n(573),j=n(3388),y=n(1583),Z=n(6859),g=n(2763),m=n(7689),b=n(1087),v=n(382),k=n(184),E=h.Z.Header,P=h.Z.Content,U=h.Z.Footer,S=h.Z.Sider;t.Z=function(e){var t=(0,m.TH)();(0,o.useEffect)((function(){if("faculty"!==(0,g.bW)().user.role)return window.location.href="/"}),[g.bW]);var n=(0,o.useState)(!0),T=(0,c.Z)(n,2),w=T[0],C=(T[1],(0,m.s0)()),A=(0,v.Fp)().instance,z=function(){(0,g.uf)().then((function(e){e.redirect&&A.logoutRedirect().then((function(e){if(e)return C("/?logout=true");alert("Error Occurred!")})).catch((function(e){alert("error occured")}))}))},L=[{key:"2",label:(0,k.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"1",label:(0,k.jsx)("a",{href:"#",onClick:function(){return z()},children:"Logout"})}],B=[{key:"/faculty/dashboard",icon:o.createElement(i.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:o.createElement(r.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"/faculty/announcement/view",icon:o.createElement(s.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/announcement/view",children:"Announcement"})},{key:"/faculty/course",icon:o.createElement(a.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:o.createElement(l.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"/faculty/post/new",icon:o.createElement(u.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/post/new",children:"Post"})},{key:"/faculty/message/view",icon:o.createElement(s.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/message/view",children:"Message"})},{key:"/faculty/policy/view",icon:o.createElement(s.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/policy/view",children:"Policy"})},{key:"/faculty/outlook/events",icon:o.createElement(s.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/outlook/events",children:"Meetings/Events"})},{key:"/faculty/evaluate",icon:o.createElement(s.Z),label:(0,k.jsx)(b.rU,{to:"/faculty/evaluate",children:"Evaluate"})},{key:"Logout",icon:o.createElement(f.Z),label:(0,k.jsx)(b.rU,{onClick:z,children:"Logout"})}];return(0,k.jsx)(p.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,k.jsxs)(h.Z,{children:[(0,k.jsxs)(S,{breakpoint:"lg",theme:w?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,k.jsx)("div",{className:"demo-logo-vertical",children:(0,k.jsx)(x.Z,{src:"/upesfull.png"})}),(0,k.jsx)(j.Z,{theme:w?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:B})]}),(0,k.jsxs)(h.Z,{children:[(0,k.jsx)(E,{style:{padding:0},children:(0,k.jsx)(y.Z,{menu:{items:L},placement:"bottom",children:(0,k.jsx)(Z.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,k.jsx)(d.Z,{})})})}),(0,k.jsx)(P,{style:{margin:"24px 16px 0"},children:(0,k.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,k.jsx)(U,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},7953:function(e,t,n){var c=n(9455);n(2763),c.l4},243:function(e,t,n){n.d(t,{Jq:function(){return u},dq:function(){return s},fR:function(){return a},fb:function(){return r},xl:function(){return l}});var c=n(9455),o=n(2763),i=c.v_,r=function(e){return fetch("".concat(i,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(i,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},a=function(e){return fetch("".concat(i,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(i,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,t){return fetch("".concat(i,"/all?page=").concat(e,"&type=").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,o.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},6653:function(e,t,n){n.r(t);var c=n(9439),o=n(2791),i=n(4264),r=n(4556),s=n(1773),a=(n(7953),n(7312)),l=n(6122),u=n(889),f=n(243),d=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],h=t[1],p=(0,o.useState)(!0),x=(0,c.Z)(p,2),j=x[0],y=x[1],Z=r.Z.useNotification(),g=(0,c.Z)(Z,2),m=g[0],b=g[1],v=function(e){var t=e.type,n=e.message;m[t]({message:n})};return(0,o.useEffect)((function(){document.title="Policies | SoCIS",(0,f.Jq)(1,"Policy").then((function(e){return e.error?v({type:"error",message:"Error Occured"}):0==e.docs.length?v({type:"info",message:"No Policies Found!"}):(h(e.docs),void y(!1))}))}),[y,h]),(0,d.jsxs)(u.Z,{children:[b,(0,d.jsx)(i.Z,{title:"Policies"}),(0,d.jsx)(s.Z,{}),j?(0,d.jsx)(l.Z,{}):(0,d.jsx)(a.Z,{data:n}),(0,d.jsx)("br",{})]})}}}]);
//# sourceMappingURL=6653.63fed41e.chunk.js.map