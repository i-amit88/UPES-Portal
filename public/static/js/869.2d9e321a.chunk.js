"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[869],{4264:function(e,n,t){var r=t(3655),a=(t(2791),t(184));n.Z=function(e){return(0,a.jsx)(r.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var r=t(9439),a=t(2791),c=t(8134),o=t(5794),i=t(9529),s=t(2827),l=t(5458),u=t(9150),d=t(9286),m=t(3729),p=t(3451),h=t(8961),g=t(3876),f=t(7962),j=t(4006),y=t(2542),Z=t(586),x=t(3296),b=t(2145),w=t(3388),E=t(6859),v=t(1894),k=t(2763),C=t(7689),S=t(1087),T=t(184),A=Z.Z.Header,M=Z.Z.Content,P=Z.Z.Footer,O=Z.Z.Sider;n.Z=function(e){var n=(0,C.TH)();(0,a.useEffect)((function(){return JSON.parse(localStorage.getItem("user")).changePassword?L("/"):"management"!==(0,k.bW)().user.role?window.location.href="/":void 0}),[k.bW]);var t=(0,a.useState)(!0),N=(0,r.Z)(t,2),U=N[0],I=N[1],L=(0,C.s0)(),z=x.Z.useToken().token.colorBgContainer,B=[{key:"/management/dashboard",icon:a.createElement(c.Z),label:(0,T.jsx)(S.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:a.createElement(o.Z),label:(0,T.jsx)(S.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:a.createElement(i.Z),label:(0,T.jsx)(S.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:a.createElement(s.Z),label:(0,T.jsx)(S.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:a.createElement(l.Z),label:(0,T.jsx)(S.rU,{to:"/management/profile",children:"Profile"})},{key:"announcement",icon:a.createElement(u.Z),label:"Announcements",children:[{key:"/management/announcement/new",icon:a.createElement(d.Z),label:(0,T.jsx)(S.rU,{to:"/management/announcement/new",children:"New"})},{key:"/management/announcement/view",icon:a.createElement(m.Z),label:(0,T.jsx)(S.rU,{to:"/management/announcement/view",children:"View"})}]},{key:"message",icon:a.createElement(p.Z),label:"Message",children:[{key:"/management/message/new",icon:a.createElement(d.Z),label:(0,T.jsx)(S.rU,{to:"/management/message/new",children:"New"})},{key:"/management/message/view",icon:a.createElement(m.Z),label:(0,T.jsx)(S.rU,{to:"/management/message/view",children:"View"})}]},{key:"post",icon:a.createElement(h.Z),label:"Post",children:[{key:"/management/post/new",icon:a.createElement(d.Z),label:(0,T.jsx)(S.rU,{to:"/management/post/new",children:"New"})},{key:"/management/post/view",icon:a.createElement(m.Z),label:(0,T.jsx)(S.rU,{to:"/management/post/view",children:"View"})}]},{key:"policy",icon:a.createElement(g.Z),label:"Policy",children:[{key:"/management/policy/new",icon:a.createElement(d.Z),label:(0,T.jsx)(S.rU,{to:"/management/policy/new",children:"New"})},{key:"/management/policy/view",icon:a.createElement(m.Z),label:(0,T.jsx)(S.rU,{to:"/management/policy/view",children:"View"})}]},{key:"Logout",icon:a.createElement(f.Z),label:(0,T.jsx)(S.rU,{onClick:function(){(0,k.uf)().then((function(e){if(e.redirect)return L("/?logout=true")}))},children:"Logout"})}];return(0,T.jsxs)(Z.Z,{children:[(0,T.jsxs)(O,{breakpoint:"lg",theme:U?"dark":"light",collapsedWidth:"0",style:{height:"100vh"},children:[(0,T.jsx)("div",{className:"demo-logo-vertical",children:(0,T.jsx)(b.Z,{src:"/upesfull.png"})}),(0,T.jsx)(w.Z,{theme:U?"dark":"light",mode:"inline",defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:B})]}),(0,T.jsxs)(Z.Z,{children:[(0,T.jsx)(A,{style:{padding:0,background:z},children:(0,T.jsx)(E.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,T.jsx)(i.Z,{})})}),(0,T.jsx)(M,{style:{margin:"24px 16px 0",background:z},children:(0,T.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,T.jsx)(P,{style:{textAlign:"center"},children:"Made By Students During Nighouts"})]}),(0,T.jsx)(v.Z,{icon:U?(0,T.jsx)(j.Z,{}):(0,T.jsx)(y.Z,{}),onClick:function(){I(!U)}})]})}},9522:function(e,n,t){t.d(n,{$Z:function(){return s},FC:function(){return l},Hd:function(){return i},Tx:function(){return o},_U:function(){return u}});var r=t(9455),a=t(2763),c=r.yw,o=function(e){return fetch("".concat(c,"/new"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,a.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},i=function(e){return fetch("".concat(c,"/update"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,a.LP)()[2])},credentials:"include",method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},s=function(e){return fetch("".concat(c,"/delete"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,a.LP)()[2])},credentials:"include",method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},l=function(e){return fetch("".concat(c,"/message/").concat(e.messageId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,a.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))},u=function(e){return fetch("".concat(c,"/all?page=").concat(e),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,a.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},9869:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(3433),a=t(9439),c=t(2791),o=t(5529),i=t(5476),s=t(183),l=t(5140),u=t(9389),d=t(5535),m=t(462),p=t(4264),h=t(9522),g=t(7689),f=t(2763),j=t(9455).ru,y=t(184),Z=function(){var e=(0,c.useState)(!1),n=(0,a.Z)(e,2),t=n[0],Z=n[1],x=(0,c.useState)({to:[]}),b=(0,a.Z)(x,2),w=b[0],E=b[1],v=(0,c.useState)([(0,f.bW)()._id]),k=(0,a.Z)(v,2),C=k[0],S=k[1],T=(0,c.useState)([]),A=(0,a.Z)(T,2),M=A[0],P=A[1],O=(0,c.useState)([]),N=(0,a.Z)(O,2),U=N[0],I=N[1],L=(0,c.useState)([]),z=(0,a.Z)(L,2),B=z[0],G=z[1],_=(0,c.useState)(""),F=(0,a.Z)(_,2),V=F[0],q=F[1],H=(0,c.useState)(!1),D=(0,a.Z)(H,2),J=(D[0],D[1]),W=(0,g.s0)(),R=function(){var e=(0,g.TH)().search;return c.useMemo((function(){return new URLSearchParams(e)}),[e])}().get("id"),K=i.Z.useNotification(),$=(0,a.Z)(K,2),Q=$[0],X=$[1],Y=function(e){var n=e.type,t=e.message,r=e.description;Q[n]({message:t,description:r})};(0,c.useEffect)((function(){document.title="Add/Edit Message | SoCIS",fetch("".concat(j,"/groups"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,f.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()})).then((function(e){if(e.error)return Y({type:"error",message:"Error Occured!",description:e.errorMessage});var n=[];e.map((function(e){n.push({value:e._id,label:"".concat(e.groupName)})})),P(n)})).catch((function(e){return Y({type:"error",message:"Error Occured!",description:""})})),(0,f.AW)().then((function(e){if(e.error)return Y({type:"error",message:"Error Occured!",description:e.errorMessage});var n=[];e.map((function(e){n.push({value:e._id,label:"".concat(e.firstName," ").concat(e.lastName," | SAP: ").concat(e.sapId," | ").concat(e.designations)})})),I(n)})).catch((function(e){return Y({type:"error",message:"Error Occured!",description:""})})),R&&(Z(!0),(0,h.FC)({messageId:R}).then((function(e){E(e),S(e.to),Z(!1)})).catch((function(e){return Z(!1),Y({type:"error",message:"Error Occured!",description:""})})))}),[E,R,I]);return(0,y.jsxs)(o.Z,{children:[X,(0,y.jsx)(p.Z,{title:R?"Update Message":"New Message"}),t?(0,y.jsx)(s.Z,{active:!0}):(0,y.jsxs)(l.Z,{name:"new-Message",labelCol:{span:2},wrapperCol:{span:16},onFinish:function(e){B.map((function(e){S([].concat((0,r.Z)(C),[e]))}));var n=[];C.forEach((function(e){n.includes(e)||n.push(e)})),e.to=n,Z(!0),R?(0,h.Hd)(e).then((function(e){return e.error?(Z(!1),Y({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):W("/management/message/view?success=edit")})).catch((function(e){return Z(!1),Y({type:"error",message:"Error Occured!",description:""})})):(delete e._id,(0,h.Tx)(e).then((function(e){return e.error?(Z(!1),Y({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):W("/management/message/view?success=new")})).catch((function(e){return Z(!1),Y({type:"error",message:"Error Occured!",description:""})})))},autoComplete:"off",children:[(0,y.jsx)(l.Z.Item,{label:"Message ID",name:"_id",initialValue:w?w._id:"",rules:[{required:!1,message:"Field is required!"}],children:(0,y.jsx)(u.Z,{type:"text",disabled:!0})}),(0,y.jsx)(l.Z.Item,{label:"Title",name:"title",initialValue:w?w.title:"",rules:[{required:!0,message:"Field is required!"}],children:(0,y.jsx)(u.Z,{type:"text",placeholder:"Title"})}),(0,y.jsxs)(l.Z.Item,{label:"Recipents",name:"to",children:[C?(0,y.jsx)(d.Z,{mode:"multiple",style:{width:"100%"},defaultValue:C||[""],placeholder:"Select recipents",onChange:function(e){S(e)},optionLabelProp:"label",options:U}):"Not Available",(0,y.jsx)("br",{})]}),(0,y.jsx)(l.Z.Item,{label:"Group Recipents",children:(0,y.jsx)(d.Z,{style:{width:"100%"},placeholder:"Select Group",onChange:function(e){var n,t=[];(n={groupId:e},fetch("".concat(j,"/group/").concat(n.groupId),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,f.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))).then((function(e){var n=(0,r.Z)(C);e.users.map((function(e){n.push(e)})),n.forEach((function(e){t.includes(e)||t.push(e)})),J(!0),G(t)}))},optionLabelProp:"label",options:M})}),(0,y.jsxs)(l.Z.Item,{label:"Create Group",style:{margin:10},children:[(0,y.jsx)(u.Z,{type:"text",value:V,onChange:function(e){return q(e.target.value)}}),(0,y.jsx)(m.ZP,{onClick:function(){var e,n=[];C.forEach((function(e){n.includes(e)||n.push(e)})),(e={groupName:V,users:n},fetch("".concat(j,"/group"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,f.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e.json()}))).then((function(e){Y({type:"success",message:"Group Created!",description:"Group is created with the name : ".concat(e.groupName)})})).catch((function(e){return Y({type:"error",message:"Error Occured",description:w.errorMessage?w.errorMessage:""})}))},children:"Create Group"})]}),(0,y.jsx)(l.Z.Item,{label:"Message",name:"message",initialValue:w?w.message:"",rules:[{required:!0,message:"Field is required!"}],children:(0,y.jsx)(u.Z.TextArea,{type:"text",placeholder:"Message"})}),(0,y.jsx)(l.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,y.jsx)(m.ZP,{type:"primary",htmlType:"submit",children:R?"Update Message":"Add Message"})}),(0,y.jsx)(m.ZP,{onClick:function(){Z(!0),(0,h.$Z)({MessageId:w._id}).then((function(e){return e.error?(Z(!1),Y({type:"error",message:"Error Occured",description:e.errorMessage?e.errorMessage:""})):W("/management/message/view?success=delete")})).catch((function(e){return Z(!1),Y({type:"error",message:"Error Occured",description:w.errorMessage?w.errorMessage:""})}))},type:"primary",style:{background:"red",textAlign:"center",alignSelf:"center",visibility:R?"visible":"hidden"},children:"Delete"})]})]})}}}]);
//# sourceMappingURL=869.2d9e321a.chunk.js.map