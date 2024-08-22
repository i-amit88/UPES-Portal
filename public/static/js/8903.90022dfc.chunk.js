"use strict";(self.webpackChunkantd_panel=self.webpackChunkantd_panel||[]).push([[8903],{4264:function(e,n,t){var a=t(3655),r=(t(2791),t(184));n.Z=function(e){return(0,r.jsx)(a.Z.Title,{style:{fontSize:"24px"},children:e.title})}},5529:function(e,n,t){var a=t(9439),r=t(2791),i=t(8134),l=t(5794),o=t(9529),c=t(2827),s=t(5458),d=t(3729),u=t(3451),m=t(9286),h=t(7962),g=t(586),f=t(1932),p=t(573),x=t(3388),y=t(1583),j=t(6859),b=t(2763),Z=t(7689),k=t(1087),v=t(184),S=g.Z.Header,w=g.Z.Content,E=g.Z.Footer,C=g.Z.Sider;n.Z=function(e){var n=(0,Z.TH)();(0,r.useEffect)((function(){if("management"!==(0,b.bW)().user.role)return window.location.href="/"}),[b.bW]);var t=(0,r.useState)(!0),N=(0,a.Z)(t,2),I=N[0],A=(N[1],(0,Z.s0)()),P=function(){(0,b.uf)().then((function(e){if(e.redirect)return A("/?logout=true")}))},T=[{key:"/management/dashboard",icon:r.createElement(i.Z),label:(0,v.jsx)(k.rU,{to:"/management/dashboard",children:"Dashboard"})},{key:"/management/timetable",icon:r.createElement(l.Z),label:(0,v.jsx)(k.rU,{to:"/management/timetable",children:"Timetable"})},{key:"/management/faculty",icon:r.createElement(o.Z),label:(0,v.jsx)(k.rU,{to:"/management/faculty",children:"Faculty"})},{key:"/management/course",icon:r.createElement(c.Z),label:(0,v.jsx)(k.rU,{to:"/management/course",children:"Courses"})},{key:"/management/profile",icon:r.createElement(s.Z),label:(0,v.jsx)(k.rU,{to:"/management/profile",children:"Profile"})},{key:"/management/announcement/view",icon:r.createElement(d.Z),label:(0,v.jsx)(k.rU,{to:"/management/announcement/view",children:"Announcements"})},{key:"message",icon:r.createElement(u.Z),label:(0,v.jsx)(k.rU,{to:"/management/message/view",children:"Messages"})},{key:"/management/post/new",icon:r.createElement(m.Z),label:(0,v.jsx)(k.rU,{to:"/management/post/new",children:"Post"})},{key:"/management/policy/view",icon:r.createElement(d.Z),label:(0,v.jsx)(k.rU,{to:"/management/policy/view",children:"Policy"})},{key:"/management/evaluate",icon:r.createElement(d.Z),label:(0,v.jsx)(k.rU,{to:"/management/evaluate",children:"Evaluate"})},{key:"Logout",icon:r.createElement(h.Z),label:(0,v.jsx)(k.rU,{onClick:P,children:"Logout"})}],M=[{key:"2",label:(0,v.jsx)(k.rU,{to:"/management/profile",children:"Profile"})},{key:"1",label:(0,v.jsx)("a",{href:"#",onClick:function(){return P()},children:"Logout"})}];return(0,v.jsx)(f.ZP,{theme:{token:{colorPrimary:"#006494",borderRadius:2,colorBgContainer:"#E8F1F2"}},children:(0,v.jsxs)(g.Z,{children:[(0,v.jsxs)(C,{breakpoint:"lg",theme:I?"dark":"light",collapsedWidth:"0",style:{height:"100vh",background:"#13293D"},children:[(0,v.jsx)("div",{className:"demo-logo-vertical",children:(0,v.jsx)(p.Z,{src:"/upesfull.png"})}),(0,v.jsx)(x.Z,{theme:I?"dark":"light",mode:"inline",style:{background:"#13293D",fontSize:"16px"},defaultSelectedKeys:n.pathname,defaultOpenKeys:[],items:T})]}),(0,v.jsxs)(g.Z,{children:[(0,v.jsx)(S,{style:{padding:0},children:(0,v.jsx)(y.Z,{menu:{items:M},placement:"bottom",children:(0,v.jsx)(j.C,{size:"large",style:{float:"right",margin:"10px"},icon:(0,v.jsx)(o.Z,{})})})}),(0,v.jsx)(w,{style:{margin:"24px 16px 0"},children:(0,v.jsx)("div",{style:{padding:24,minHeight:360},children:e.children})}),(0,v.jsx)(E,{style:{textAlign:"center"},children:"Debugged By Students"})]})]})})}},2670:function(e,n,t){t.d(n,{DK:function(){return s},MR:function(){return o},O7:function(){return l},Sg:function(){return c},go:function(){return d}});var a=t(9455),r=t(2763),i=a.ku,l=function(e){return fetch("".concat(i,"/result"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.blob()})).catch((function(e){return console.log(e)}))},o=function(e){return fetch("".concat(i,"/submit"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},c=function(e){return fetch("".concat(i,"/getresult"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e){return console.log(e),console.log(JSON.stringify(e)),fetch("".concat(i,"/awardsheet"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.blob()})).catch((function(e){return console.log(e)}))},d=function(e){return fetch("".concat(i,"/all")+("management"===e?"?all=true":""),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat((0,r.LP)()[2])},credentials:"include",method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e.json()}))}},8903:function(e,n,t){t.r(n);var a=t(3433),r=t(4942),i=t(9439),l=t(2791),o=t(4264),c=t(9389),s=t(4556),d=t(2641),u=t(43),m=t(5140),h=t(5535),g=t(4885),f=t(6106),p=t(914),x=t(8597),y=t(1773),j=t(368),b=t(2670),Z=t(1994),k=t(6776),v=t(5529),S=t(8129),w=t(184),E=c.Z.TextArea;n.default=function(){var e=(0,l.useState)(30),n=(0,i.Z)(e,2),t=n[0],c=n[1],C=(0,l.useState)(20),N=(0,i.Z)(C,2),I=N[0],A=N[1],P=(0,l.useState)(50),T=(0,i.Z)(P,2),M=T[0],O=T[1],U=(0,l.useState)([]),L=(0,i.Z)(U,2),R=L[0],F=L[1],V=(0,l.useState)([]),D=(0,i.Z)(V,2),B=D[0],z=D[1],K=(0,l.useState)(!0),_=(0,i.Z)(K,2),H=_[0],J=_[1],G=(0,l.useState)("Select"),W=(0,i.Z)(G,2),X=W[0],Y=(W[1],(0,l.useState)(null)),q=(0,i.Z)(Y,2),Q=q[0],$=q[1],ee=(0,l.useState)(null),ne=(0,i.Z)(ee,2),te=ne[0],ae=ne[1],re=(0,l.useState)([]),ie=(0,i.Z)(re,2),le=ie[0],oe=ie[1],ce=(0,l.useState)(null),se=(0,i.Z)(ce,2),de=se[0],ue=se[1],me=s.Z.useNotification(),he=(0,i.Z)(me,2),ge=he[0],fe=he[1],pe=(0,l.useState)([{grade:"O",min:85,max:100,defaultValue:0},{grade:"A+",min:75,max:84,defaultValue:1},{grade:"A",min:65,max:74,defaultValue:2},{grade:"B+",min:55,max:64,defaultValue:3},{grade:"B",min:45,max:54,defaultValue:4},{grade:"C",min:40,max:44,defaultValue:5},{grade:"F",min:0,max:39,defaultValue:6}]),xe=(0,i.Z)(pe,2),ye=xe[0],je=xe[1],be=(0,l.useState)(null),Ze=(0,i.Z)(be,2),ke=(Ze[0],Ze[1]),ve=function(e){var n=e.type,t=e.message;ge[n]({message:t})},Se=[];(0,l.useEffect)((function(){document.title="Evaluate | SoCIS",(0,b.go)("management").then((function(e){var n=[];e.map((function(e){n.push({name:e.evaluator.firstName+" "+e.evaluator.lastName,email:e.evaluator.email,batchName:"".concat(e.programName," ").concat(e.batchName," SEM: ").concat(e.semester),subjectName:"".concat(e.subjectName," (").concat(e.subjectCode,")"),reportingManager:"".concat(e.evaluator.reportingManager?e.evaluator.reportingManager.email:"No Reporting Manager")})})),z(n)})).catch((function(e){return ve({type:"error",message:"Error Occurred!"})})),(0,b.go)("faculty").then((function(e){if(e.error)return ve({type:"error",message:"Error Occurred!"});if(0===e.length)return ve({type:"info",message:"No Evaluations Found!"});F(e);var n=[];e.map((function(e){n.push({value:"".concat(e._id),label:"".concat(e.programName,"-").concat(e.semester,"-").concat(e.batchName," Subject:").concat(e.subjectName," (").concat(e.subjectCode,") Result Status: ").concat(e.uploaded?"OK":"Not OK")})})),oe(n),J(!1)})).catch((function(e){return ve({type:"error",message:"Error Occurred!"})}))}),[F,oe,ae,$,ue,ke]);var we=[{title:"Name",dataIndex:"name",key:"name"},{title:"Roll Number",dataIndex:"rollnumber",key:"rollnumber"},{title:"SAPID",dataIndex:"sapId",key:"sapId"},{title:"Internal Marks",dataIndex:"internal",key:"intermal"},{title:"Mid Sem Marks",dataIndex:"midsem",key:"midsem"},{title:"End Sem Marks",dataIndex:"endsem",key:"endsem"},{title:"Final Marks",dataIndex:"finalmarks",key:"finalmarks"},(0,r.Z)({title:"Grade",dataIndex:"grade"},"dataIndex","grade")],Ee=[{title:"Faculty Name",dataIndex:"name",key:"name"},{title:"Batch Name",dataIndex:"batchName",key:"batchName"},{title:"Course Name",dataIndex:"subjectName",key:"subjectName"},{title:"Faculty Email",dataIndex:"email",key:"email"},{title:"Cluster Head Email",dataIndex:"reportingManager",key:"reportingManager"},{title:"Send Email",dataIndex:"send",key:"send",render:function(e,n){return(0,w.jsx)(d.ZP,{type:"primary",onClick:function(){return Ae(n)},children:"Send"})}}],Ce=(0,l.useState)(""),Ne=(0,i.Z)(Ce,2),Ie=(Ne[0],Ne[1]),Ae=function(e){console.log("Send button clicked for record:",e);var n=e.name,t=(e.email,e.batchName),a=e.subjectName,r="\n        Dear ".concat(n,",\n\n        I hope this message finds you well.\n\n\n        This is a friendly reminder regarding the pending task of generating the award sheet for the ").concat(t," batch in ").concat(a," course.\n\n\n        Your cooperation in completing this task is crucial to ensure timely completion of the evaluation process.\n\n\n        Please generate the award sheet at your earliest convenience and ensure its submission.\n\n\n        Thank you for your attention to this matter.\n      ");S.Z.confirm({title:"Edit Email Template",content:(0,w.jsx)(E,{rows:10,defaultValue:r,onChange:function(e){return Ie(e.target.value)}}),okText:"Send",cancelText:"Cancel",style:{height:"1000px"},width:"300",height:"400"})},Pe=function(e,n,t){var r=(0,a.Z)(ye);r[e][n]=t,je(r)},Te=function(e){if(console.log(e),e.preventDefault(),null===Q)return ve({type:"warning",message:"Please Select A File First"});var n=R.find((function(e){return e._id===te}));(0,b.MR)({file:Q,value:te,subjectName:n.subjectName,subjectCode:n.subjectCode,semester:n.semester,parameters:{grade:ye,internalAssessmentPercentage:t,midsemPercentage:I,endsemPercentage:M}}).then((function(e){ve({type:"success",message:"Result Uploaded! You Would Be Refreshed!"}),setTimeout((function(){window.location.reload()}),3e3)})).catch((function(e){return ve({type:"error",message:"Error Occurred!"})}))},Me=[{key:"1",label:"Evaluate",children:(0,w.jsxs)("div",{children:[H?(0,w.jsx)(u.Z,{}):(0,w.jsx)(m.Z,{onSubmitCapture:function(){return null},children:(0,w.jsx)(m.Z.Item,{style:{width:"100%"},required:!0,label:"Select The Batch And Course:",children:(0,w.jsx)(h.Z,{defaultValue:X,options:le,onChange:function(e){console.log(e),ue(null),ae(null),R.find((function(n){return n._id===e})).uploaded?(0,b.Sg)({evaluationId:e}).then((function(e){e.map((function(e){Se.push({key:e._id,name:e.name,rollnumber:e.rollNumber,sapId:e.sapId,internal:e.grades[0].internalMarks,midsem:e.grades[0].midSemMarks,endsem:e.grades[0].endSemMarks,grade:e.grades[0].grade,finalmarks:e.grades[0].finalMarks,evaluationId:e.grades[0].evaluation})})),ue(Se),console.log(e[0].grades[0].evaluation),console.log(Se)})).catch((function(e){return ve({type:"error",message:"An Error Occurred!"})})):ae(e)},showSearch:!0})})}),de?(0,w.jsxs)("div",{children:[(0,w.jsx)(g.Z,{loading:!de,dataSource:de,columns:we}),(0,w.jsx)("div",{style:{padding:"10px",textAlign:"right"},children:(0,w.jsx)(d.ZP,{type:"primary",onClick:function(){return e=de[0].evaluationId,console.log("Downloading result for evaluationId:",e),void(0,b.DK)({evaluationId:e}).then((function(n){var t=window.URL.createObjectURL(n),a=document.createElement("a");a.style.display="none",a.href=t,a.download="".concat(e,".pdf"),document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(t)})).catch((function(e){console.error("Error while downloading result:",e),ve({type:"error",message:"Error while downloading result"})}));var e},children:"Download Result"})})]}):"",te?(0,w.jsxs)(m.Z,{onSubmit:Te,children:[(0,w.jsxs)(Z.Z.Dragger,{name:"file",multiple:!1,beforeUpload:function(e){return function(e){if("xlsx"!==e.name.split(".")[1])return setTimeout((function(){window.location.reload()}),2e3),ve({type:"warning",message:"Only .XLSX File Are Allowed"}),!1;var n=new FileReader;return n.readAsDataURL(e),n.onload=function(){$(n.result)},!1}(e)},showUploadList:!1,children:[(0,w.jsx)("p",{className:"ant-upload-drag-icon",children:(0,w.jsx)(k.Z,{})}),(0,w.jsx)("p",{className:"ant-upload-text",children:"Click or drag Excel file to this area to upload"})]}),(0,w.jsxs)(m.Z.Item,{label:"Grading System",children:[(0,w.jsx)("div",{children:"Assessment Ratio:"}),(0,w.jsxs)(f.Z,{gutter:16,children:[(0,w.jsx)(p.Z,{span:8,children:(0,w.jsx)(m.Z.Item,{label:"Internal Assessment (%):",children:(0,w.jsx)(x.Z,{min:0,max:100,defaultValue:t,onChange:function(e){e+I+M<=100?c(e):ve({type:"warning",message:"Total percentage exceeds 100"})}})})}),(0,w.jsx)(p.Z,{span:8,children:(0,w.jsx)(m.Z.Item,{label:"Midsem (%):",children:(0,w.jsx)(x.Z,{min:0,max:100,defaultValue:I,onChange:function(e){t+e+M<=100?A(e):ve({type:"warning",message:"Total percentage exceeds 100"})}})})}),(0,w.jsx)(p.Z,{span:8,children:(0,w.jsx)(m.Z.Item,{label:"Endsem (%):",children:(0,w.jsx)(x.Z,{min:0,max:100,defaultValue:M,onChange:function(e){t+I+e<=100?O(e):ve({type:"warning",message:"Total percentage exceeds 100"})}})})})]}),(0,w.jsx)("div",{children:"Grading Points:"}),ye.map((function(e,n){return(0,w.jsxs)(f.Z,{style:{display:"flex"},children:[(0,w.jsx)(p.Z,{span:8,style:{width:"100%"},children:(0,w.jsxs)("span",{children:[e.grade,":"]})}),(0,w.jsxs)(p.Z,{span:8,style:{paddingLeft:"10px",paddingRight:"5px"},children:[(0,w.jsx)("span",{children:"Min Limit:"}),(0,w.jsx)(x.Z,{min:0,max:100,defaultValue:e.min,onChange:function(e){return Pe(n,"min",e)}})]}),(0,w.jsxs)(p.Z,{span:8,children:[(0,w.jsx)("span",{children:"Max Limit:"}),(0,w.jsx)(x.Z,{min:0,max:100,defaultValue:e.max,onChange:function(e){return Pe(n,"max",e)}})]})]},n)}))]}),(0,w.jsx)(m.Z.Item,{children:(0,w.jsx)(d.ZP,{htmlType:"submit",type:"primary",onClick:Te,children:"Submit"})})]}):""]})},{key:"2",label:"See Pending Evaluations",children:(0,w.jsxs)("div",{style:{maxHeight:"400px"},children:[(0,w.jsx)("h4",{children:"Faculty who have not generated award sheet"})," ",(0,w.jsx)(g.Z,{dataSource:B,columns:Ee,pagination:!1,scroll:{y:300}}),(0,w.jsx)("div",{style:{padding:"10px",textAlign:"right"},children:(0,w.jsx)(d.ZP,{type:"primary",style:{},children:"Send All"})})]})}];return(0,w.jsxs)(v.Z,{children:[fe,(0,w.jsx)(o.Z,{title:"Evaluation"}),(0,w.jsx)(y.Z,{}),(0,w.jsx)(j.Z,{defaultActiveKey:"2",items:Me})]})}}}]);
//# sourceMappingURL=8903.90022dfc.chunk.js.map