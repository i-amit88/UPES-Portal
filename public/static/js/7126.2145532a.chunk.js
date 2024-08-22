"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[7126],{4264:function(e,n,t){var a=t(3655),r=(t(2791),t(184));n.Z=function(e){return(0,r.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},889:function(e,n,t){var a=t(9439),r=t(2791),l=t(8134),i=t(5794),o=t(3729),c=t(2827),s=t(5458),u=t(9286),d=t(7962),m=t(9529),f=t(586),h=t(1932),p=t(573),g=t(3388),x=t(1583),y=t(6859),j=t(2763),Z=t(7689),b=t(1087),k=t(382),v=t(184),S=f.Z.Header,w=f.Z.Content,C=f.Z.Footer,E=f.Z.Sider;n.Z=function(e){var n=(0,Z.TH)();(0,r.useEffect)((function(){if("faculty"!==(0,j.bW)().user.role)return window.location.href="/"}),[j.bW]);var t=(0,r.useState)(!0),I=(0,a.Z)(t,2),A=I[0],P=(I[1],(0,Z.s0)()),O=(0,k.Fp)().instance,T=function(){(0,j.uf)().then((function(e){e.redirect&&O.logoutRedirect().then((function(e){if(e)return P("/?logout=true");alert("Error Occurred!")})).catch((function(e){alert("error occured")}))}))},L=[{key:"2",label:(0,v.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"1",label:(0,v.jsx)("a",{href:"#",onClick:function(){return T()},children:"Logout"})}],U=[{key:"/faculty/dashboard",icon:r.createElement(l.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/dashboard",children:"Dashboard"})},{key:"/faculty/timetable",icon:r.createElement(i.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/timetable",children:"Timetable"})},{key:"/faculty/announcement/view",icon:r.createElement(o.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/announcement/view",children:"Announcement"})},{key:"/faculty/course",icon:r.createElement(c.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/course",children:"Courses"})},{key:"/faculty/profile",icon:r.createElement(s.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/profile",children:"Profile"})},{key:"/faculty/post/new",icon:r.createElement(u.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/post/new",children:"Post"})},{key:"/faculty/message/view",icon:r.createElement(o.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/message/view",children:"Message"})},{key:"/faculty/policy/view",icon:r.createElement(o.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/policy/view",children:"Policy"})},{key:"/faculty/outlook/events",icon:r.createElement(o.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/outlook/events",children:"Meetings/Events"})},{key:"/faculty/evaluate",icon:r.createElement(o.Z),label:(0,v.jsx)(b.rU,{to:"/faculty/evaluate",children:"Evaluate"})},{key:"Logout",icon:r.createElement(d.Z),label:(0,v.jsx)(b.rU,{onClick:T,children:"Logout"})}];return(0,v.jsx)(h.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,v.jsxs)(f.Z,{children:[(0,v.jsxs)(E,{breakpoint:"lg",theme:A?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,v.jsx)("div",{className:"demo-logo-vertical",children:(0,v.jsx)(p.Z,{src:"/upesfull.png"})}),(0,v.jsx)(g.Z,{theme:A?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:U})]}),(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(S,{style:{padding:0},children:(0,v.jsx)(x.Z,{menu:{items:L},placement:"bottom",children:(0,v.jsx)(y.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,v.jsx)(m.Z,{})})})}),(0,v.jsx)(w,{style:{margin:"24px 16px 0"},children:(0,v.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,v.jsx)(C,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},2670:function(e,n,t){t.d(n,{DK:function(){return s},MR:function(){return o},O7:function(){return i},Sg:function(){return c},go:function(){return u}});var a=t(9455),r=t(2763),l=a.ku,i=function(e){return fetch("".concat(l,"/result"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.blob()})).catch((function(e){return console.log(e)}))},o=function(e){return fetch("".concat(l,"/submit"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},c=function(e){return fetch("".concat(l,"/getresult"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e){return console.log(e),console.log(JSON.stringify(e)),fetch("".concat(l,"/awardsheet"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.blob()})).catch((function(e){return console.log(e)}))},u=function(e){return fetch("".concat(l,"/all")+("management"===e?"?all=true":""),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},7126:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(4942),r=t(3433),l=t(9439),i=t(2791),o=t(4264),c=t(4556),s=t(1773),u=t(43),d=t(5140),m=t(5535),f=t(4885),h=t(2641),p=t(9389),g=t(6106),x=t(914),y=t(8597),j=t(889),Z=t(2670),b=t(184),k=function(){var e=(0,i.useState)(30),n=(0,l.Z)(e,2),t=n[0],k=n[1],v=(0,i.useState)(20),S=(0,l.Z)(v,2),w=S[0],C=S[1],E=(0,i.useState)(50),I=(0,l.Z)(E,2),A=I[0],P=I[1],O=(0,i.useState)([]),T=(0,l.Z)(O,2),L=T[0],U=T[1],M=(0,i.useState)(!0),N=(0,l.Z)(M,2),R=N[0],D=N[1],V=(0,i.useState)("Select"),F=(0,l.Z)(V,2),B=F[0],z=(F[1],(0,i.useState)(null)),_=(0,l.Z)(z,2),J=_[0],G=_[1],K=(0,i.useState)(null),W=(0,l.Z)(K,2),X=W[0],H=W[1],q=(0,i.useState)([]),Y=(0,l.Z)(q,2),Q=Y[0],$=Y[1],ee=(0,i.useState)(null),ne=(0,l.Z)(ee,2),te=ne[0],ae=ne[1],re=c.Z.useNotification(),le=(0,l.Z)(re,2),ie=le[0],oe=le[1],ce=(0,i.useState)([{grade:"O",min:85,max:100,defaultValue:0},{grade:"A+",min:75,max:84,defaultValue:1},{grade:"A",min:65,max:74,defaultValue:2},{grade:"B+",min:55,max:64,defaultValue:3},{grade:"B",min:45,max:54,defaultValue:4},{grade:"C",min:40,max:44,defaultValue:5},{grade:"F",min:0,max:39,defaultValue:6}]),se=(0,l.Z)(ce,2),ue=se[0],de=se[1],me=function(e,n,t){var a=(0,r.Z)(ue);a[e][n]=t,de(a)},fe=function(e){var n=e.type,t=e.message;ie[n]({message:t})};(0,i.useEffect)((function(){document.title="Evaluate | SoCIS",(0,Z.go)("faculty").then((function(e){if(e.error)return fe({type:"error",message:"Error Occurred!"});if(0===e.length)return fe({type:"info",message:"No Evaluations Found!"});U(e);var n=[];e.map((function(e){n.push({value:"".concat(e._id),label:"".concat(e.programName,"-").concat(e.semester,"-").concat(e.batchName," Subject:").concat(e.subjectName," (").concat(e.subjectCode,")")})})),$(n),D(!1)})).catch((function(e){return fe({type:"error",message:"Error Occurred!"})}))}),[]);var he=[],pe=[{title:"Name",dataIndex:"name",key:"name"},{title:"Roll Number",dataIndex:"rollnumber",key:"rollnumber"},{title:"SAPID",dataIndex:"sapId",key:"sapId"},{title:"Internal Marks",dataIndex:"internal",key:"intermal"},{title:"Mid Sem Marks",dataIndex:"midsem",key:"midsem"},{title:"End Sem Marks",dataIndex:"endsem",key:"endsem"},{title:"Final Marks",dataIndex:"finalmarks",key:"finalmarks"},(0,a.Z)({title:"Grade",dataIndex:"grade"},"dataIndex","grade")],ge=function(e){if(e.preventDefault(),null===J)return fe({type:"warning",message:"Please Select A File First"});var n=L.find((function(e){return e._id===X}));(0,Z.MR)({file:J,value:X,subjectName:n.subjectName,subjectCode:n.subjectCode,semester:n.semester,parameters:{grade:ue,internalAssessmentPercentage:t,midsemPercentage:w,endsemPercentage:A}}).then((function(e){fe({type:"success",message:"Result Uploaded! You Would Be Refreshed!"}),setTimeout((function(){window.location.reload()}),3e3)})).catch((function(e){return fe({type:"error",message:"Error Occurred!"})}))},xe=function(e){var n=e.target.files[0];if("xlsx"!==n.name.split(".")[1])return setTimeout((function(){window.location.reload()}),2e3),fe({type:"warning",message:"Only .XLSX File Are Allowed"});var t=new FileReader;t.readAsDataURL(n),t.onload=function(){G(t.result)}};return(0,b.jsxs)(j.Z,{children:[oe,(0,b.jsx)(o.Z,{title:"Evaluation"}),(0,b.jsx)(s.Z,{}),R?(0,b.jsx)(u.Z,{}):(0,b.jsx)(d.Z,{onSubmit:ge,children:(0,b.jsx)(d.Z.Item,{style:{width:"100%"},required:!0,label:"Select The Batch And Course:",children:(0,b.jsx)(m.Z,{defaultValue:B,options:Q,onChange:function(e){ae(null),H(null),L.find((function(n){return n._id===e})).uploaded?(0,Z.Sg)({evaluationId:e}).then((function(e){e.map((function(e){he.push({key:e._id,name:e.name,rollnumber:e.rollNumber,sapId:e.sapId,internal:e.grades[0].internalMarks,midsem:e.grades[0].midSemMarks,endsem:e.grades[0].endSemMarks,grade:e.grades[0].grade,finalmarks:e.grades[0].finalMarks})})),ae(he)})).catch((function(e){return console.log(e),fe({type:"error",message:"An Error Occurred!"})})):H(e)}})})}),te?(0,b.jsxs)("div",{children:[(0,b.jsx)(f.Z,{loading:!te,dataSource:te,columns:pe}),(0,b.jsx)("div",{style:{padding:"10px",textAlign:"right"},children:(0,b.jsx)(h.ZP,{type:"primary",onClick:function(){return e=te[0].evaluationId,console.log("Downloading result for evaluationId:",e),void(0,Z.DK)({evaluationId:e}).then((function(n){var t=window.URL.createObjectURL(n),a=document.createElement("a");a.style.display="none",a.href=t,a.download="".concat(e,".pdf"),document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(t)})).catch((function(e){console.error("Error while downloading result:",e),fe({type:"error",message:"Error while downloading result"})}));var e},children:"Download Result"})})]}):"",X?(0,b.jsxs)(d.Z,{onSubmit:ge,children:[(0,b.jsx)(d.Z.Item,{label:"Drag and Drop .XLSX File",children:(0,b.jsx)(p.Z,{style:{height:"200px"},type:"file",onChangeCapture:xe,onChange:xe,placeholder:"Drag and drop files or click"})}),(0,b.jsxs)(d.Z.Item,{label:"Grading System",children:[(0,b.jsx)("div",{children:"Assessment Ratio:"}),(0,b.jsxs)(g.Z,{gutter:16,children:[(0,b.jsx)(x.Z,{span:8,children:(0,b.jsx)(d.Z.Item,{label:"Internal Assessment (%):",children:(0,b.jsx)(y.Z,{min:0,max:100,defaultValue:t,onChange:function(e){e+w+A<=100?k(e):fe({type:"warning",message:"Total percentage exceeds 100"})}})})}),(0,b.jsx)(x.Z,{span:8,children:(0,b.jsx)(d.Z.Item,{label:"Midsem (%):",children:(0,b.jsx)(y.Z,{min:0,max:100,defaultValue:w,onChange:function(e){t+e+A<=100?C(e):fe({type:"warning",message:"Total percentage exceeds 100"})}})})}),(0,b.jsx)(x.Z,{span:8,children:(0,b.jsx)(d.Z.Item,{label:"Endsem (%):",children:(0,b.jsx)(y.Z,{min:0,max:100,defaultValue:A,onChange:function(e){t+w+e<=100?P(e):fe({type:"warning",message:"Total percentage exceeds 100"})}})})})]}),(0,b.jsx)("div",{children:"Grading Points:"}),ue.map((function(e,n){return(0,b.jsxs)(g.Z,{style:{display:"flex"},children:[(0,b.jsx)(x.Z,{span:8,style:{width:"100%"},children:(0,b.jsxs)("span",{children:[e.grade,":"]})}),(0,b.jsxs)(x.Z,{span:8,style:{paddingLeft:"10px",paddingRight:"5px"},children:[(0,b.jsx)("span",{children:"Min Limit:"}),(0,b.jsx)(y.Z,{min:0,max:100,defaultValue:e.min,onChange:function(e){return me(n,"min",e)}})]}),(0,b.jsxs)(x.Z,{span:8,children:[(0,b.jsx)("span",{children:"Max Limit:"}),(0,b.jsx)(y.Z,{min:0,max:100,defaultValue:e.max,onChange:function(e){return me(n,"max",e)}})]})]},n)}))]}),(0,b.jsx)(d.Z.Item,{children:(0,b.jsx)(h.ZP,{htmlType:"submit",type:"primary",onClick:ge,children:"Submit"})})]}):""]})}},914:function(e,n,t){var a=t(9752);n.Z=a.Z},6106:function(e,n,t){var a=t(7545);n.Z=a.Z}}]);
//# sourceMappingURL=7126.2145532a.chunk.js.map