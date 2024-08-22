"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[1179],{4195:function(e,t,n){var c=n(9439),r=n(2791),i=n(6106),a=n(914),o=n(8844),l=n(6473),s=n(3655),u=n(2641),d=n(8129),f=n(184);t.Z=function(e){var t=(0,r.useState)(!1),n=(0,c.Z)(t,2),h=n[0],p=n[1];return(0,f.jsx)(i.Z,{children:(0,f.jsx)(a.Z,{flex:3,style:{height:"70vh"},children:(0,f.jsx)(o.Z.Ribbon,{text:String(e.data.createdAt.split("T")[0]),children:(0,f.jsxs)(l.Z,{style:{height:"70vh"},hoverable:!0,children:[(0,f.jsx)(s.Z.Title,{style:{fontSize:"30px",textAlign:"center"},children:e.data.title}),null!=e.data.attachmentFile?(0,f.jsx)(u.ZP,{onClick:function(){return p(!0)},children:"Open Attachment File"}):""," ",(0,f.jsx)("br",{}),(0,f.jsxs)(s.Z.Title,{style:{fontSize:"18px",textAlign:"center",visibility:e.data.excerpt?"visible":"hidden"},children:["Subject: ",e.data.excerpt]}),(0,f.jsx)(s.Z.Text,{style:{fontSize:"16px",padding:"20px"},children:e.data.content}),(0,f.jsxs)(s.Z.Title,{style:{fontSize:"20px",bottom:0,right:0,position:"absolute",padding:"20px"},children:[e.data.author.firstName," ",e.data.author.lastName," ",(0,f.jsx)("br",{})," (",e.data.author.designations,")"]}),(0,f.jsx)(d.Z,{width:1200,title:"Attachment",open:h,onOk:function(){return p(!1)},onCancel:function(){return p(!1)},children:(0,f.jsx)("iframe",{width:1e3,height:600,src:e.data.attachmentFile})})]})})})})}},4264:function(e,t,n){var c=n(3655),r=(n(2791),n(184));t.Z=function(e){return(0,r.jsx)(c.Z.Title,{style:{fontSize:"24px"},children:e.title})}},889:function(e,t,n){var c=n(9439),r=n(2791),i=n(8134),a=n(5794),o=n(3729),l=n(2827),s=n(5458),u=n(9286),d=n(7962),f=n(9529),h=n(586),p=n(1932),x=n(573),y=n(3388),j=n(1583),m=n(6859),g=n(2763),Z=n(7689),v=n(1087),b=n(382),k=n(184),E=h.Z.Header,S=h.Z.Content,w=h.Z.Footer,z=h.Z.Sider;t.Z=function(e){var t=(0,Z.TH)();(0,r.useEffect)((function(){if("faculty"!==(0,g.bW)().user.role)return window.location.href="/"}),[g.bW]);var n=(0,r.useState)(!0),C=(0,c.Z)(n,2),T=C[0],A=(C[1],(0,Z.s0)()),P=(0,b.Fp)().instance,U=function(){(0,g.uf)().then((function(e){e.redirect&&P.logoutRedirect().then((function(e){if(e)return A("/?logout=true");alert("Error Occurred!")})).catch((function(e){alert("error occured")}))}))},B=[{key:"2",label:(0,k.jsx)(v.rU,{to:"/faculty/profile",children:"Profile"})},{key:"1",label:(0,k.jsx)("a",{href:"#",onClick:function(){return U()},children:"Logout"})}],L=[{key:"/faculty/dashboard",icon:r.createElement(i.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:r.createElement(a.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"/faculty/announcement/view",icon:r.createElement(o.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/announcement/view",children:"Announcement"})},{key:"/faculty/course",icon:r.createElement(l.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:r.createElement(s.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/profile",children:"Profile"})},{key:"/faculty/post/new",icon:r.createElement(u.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/post/new",children:"Post"})},{key:"/faculty/message/view",icon:r.createElement(o.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/message/view",children:"Message"})},{key:"/faculty/policy/view",icon:r.createElement(o.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/policy/view",children:"Policy"})},{key:"/faculty/outlook/events",icon:r.createElement(o.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/outlook/events",children:"Meetings/Events"})},{key:"/faculty/evaluate",icon:r.createElement(o.Z),label:(0,k.jsx)(v.rU,{to:"/faculty/evaluate",children:"Evaluate"})},{key:"Logout",icon:r.createElement(d.Z),label:(0,k.jsx)(v.rU,{onClick:U,children:"Logout"})}];return(0,k.jsx)(p.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,k.jsxs)(h.Z,{children:[(0,k.jsxs)(z,{breakpoint:"lg",theme:T?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,k.jsx)("div",{className:"demo-logo-vertical",children:(0,k.jsx)(x.Z,{src:"/upesfull.png"})}),(0,k.jsx)(y.Z,{theme:T?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:t.pathname,defaultOpenKeys:[],items:L})]}),(0,k.jsxs)(h.Z,{children:[(0,k.jsx)(E,{style:{padding:0},children:(0,k.jsx)(j.Z,{menu:{items:B},placement:"bottom",children:(0,k.jsx)(m.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,k.jsx)(f.Z,{})})})}),(0,k.jsx)(S,{style:{margin:"24px 16px 0"},children:(0,k.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,k.jsx)(w,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},9522:function(e,t,n){var c=n(9455);n(2763),c.yw},243:function(e,t,n){n.d(t,{Jq:function(){return u},dq:function(){return o},fR:function(){return l},fb:function(){return a},xl:function(){return s}});var c=n(9455),r=n(2763),i=c.v_,a=function(e){return fetch("".concat(i,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},o=function(e){return fetch("".concat(i,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(i,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(i,"/post/").concat(e.postId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e,t){return fetch("".concat(i,"/all?page=").concat(e,"&type=").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},6290:function(e,t,n){n.r(t);var c=n(9439),r=n(2791),i=n(4264),a=n(183),o=(n(9522),n(7689)),l=n(4195),s=n(889),u=n(243),d=n(184);t.default=function(e){var t=(0,r.useState)([]),n=(0,c.Z)(t,2),f=n[0],h=n[1],p=(0,r.useState)(!0),x=(0,c.Z)(p,2),y=x[0],j=x[1],m=(0,o.UO)().id;return(0,r.useEffect)((function(){document.title="View Message | SoCIS",(0,u.xl)({postId:m}).then((function(e){h(e),j(!1)})).catch((function(e){console.log(e)}))}),[h]),(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(i.Z,{title:"Message"}),y?(0,d.jsx)(a.Z,{active:!0}):(0,d.jsx)(l.Z,{data:f})]})}},7557:function(e,t,n){n.d(t,{Z:function(){return l}});var c=n(7462),r=n(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},a=n(4291),o=function(e,t){return r.createElement(a.Z,(0,c.Z)({},e,{ref:t,icon:i}))};var l=r.forwardRef(o)},187:function(e,t,n){n.d(t,{Z:function(){return l}});var c=n(7462),r=n(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},a=n(4291),o=function(e,t){return r.createElement(a.Z,(0,c.Z)({},e,{ref:t,icon:i}))};var l=r.forwardRef(o)},3844:function(e,t,n){n.d(t,{Z:function(){return l}});var c=n(7462),r=n(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},a=n(4291),o=function(e,t){return r.createElement(a.Z,(0,c.Z)({},e,{ref:t,icon:i}))};var l=r.forwardRef(o)}}]);
//# sourceMappingURL=1179.646f0be2.chunk.js.map