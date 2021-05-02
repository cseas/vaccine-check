(this["webpackJsonpvaccine-check"]=this["webpackJsonpvaccine-check"]||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(74),a=n.n(i),s=(n(91),n(4)),l=n(131),j=n(128),o=n(132),d=n(32),b=n(135),h=n(136),u=n(59),x=n.n(u),O=n(75),m=n(76),p=n.n(m);function f(){return(f=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return n=g(),e.next=5,p.a.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=".concat(t,"&date=").concat(n)).then((function(e){return e.data}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){var e=new Date,t=e.getDate();t=t<10?"0"+t:t;var n=e.getMonth();return[t,n+=1,e.getFullYear()].join("-")}var v=n(137),y=n(130),S=n(3);function w(e){var t=e.pincode,n=Object(b.a)(["locations",t],(function(){return function(e){return f.apply(this,arguments)}(t)}),{refetchInterval:18e5}),c=n.data,r=n.isLoading,i=n.isError,a=n.error;if(!t)return Object(S.jsx)(S.Fragment,{});if(r)return Object(S.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"2rem 0"},children:Object(S.jsx)(h.a,{isIndeterminate:!0,color:"green.300"})});if(i)return console.log(a),Object(S.jsxs)(S.Fragment,{children:["Error occurred: ",a.message]});var s=function(e){var t,n=[],c=Object(d.a)(e);try{for(c.s();!(t=c.n()).done;){var r,i=t.value,a=Object(d.a)(i.sessions);try{for(a.s();!(r=a.n()).done;){var s=r.value;18===s.min_age_limit&&s.available_capacity>0&&n.push({location:i.name,date:s.date,slots:s.available_capacity})}}catch(l){a.e(l)}finally{a.f()}}}catch(l){c.e(l)}finally{c.f()}return n}(c.centers);return 0===s.length?Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(j.a,{fontSize:"lg",color:"red.700",padding:"2rem 0 0",children:["No centres available right now for your selected pincode ",t,". This page will automatically refresh periodically to check whether a centre is available."]})}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(v.a,{status:"success",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",marginTop:"2rem",padding:"1rem 0",children:[Object(S.jsx)(v.b,{boxSize:"40px",mr:0}),Object(S.jsxs)(v.c,{mt:4,mb:1,fontSize:"lg",children:["Slots available for pincode ",t,"!"]})]}),Object(S.jsxs)(y.a,{variant:"simple",margin:"2rem 0 0",children:[Object(S.jsx)(y.b,{children:"Go to CoWin website to schedule an appointment"}),Object(S.jsx)(y.f,{children:Object(S.jsxs)(y.g,{children:[Object(S.jsx)(y.e,{children:"Centre"}),Object(S.jsx)(y.e,{children:"Date"}),Object(S.jsx)(y.e,{isNumeric:!0,children:"Slots Left"})]})}),Object(S.jsx)(y.c,{children:s.map((function(e){return Object(S.jsxs)(y.g,{children:[Object(S.jsx)(y.d,{children:e.location}),Object(S.jsx)(y.d,{children:e.date}),Object(S.jsx)(y.d,{isNumeric:!0,children:e.slots})]})}))})]})]})}function k(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(null),a=Object(s.a)(i,2),d=a[0],b=a[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(l.a,{maxW:"container.sm",children:[Object(S.jsx)(j.a,{fontSize:"3xl",padding:"1rem 0",textAlign:"center",children:"India vaccine centre availability checker"}),Object(S.jsx)(j.a,{fontSize:"md",padding:"1rem 0",children:"First Pincode"}),Object(S.jsxs)(o.c,{onChange:function(e,t){var n;(n=t)>=11e4&&r(n)},precision:0,step:1,min:11e4,max:999999,children:[Object(S.jsx)(o.d,{}),Object(S.jsxs)(o.e,{children:[Object(S.jsx)(o.b,{}),Object(S.jsx)(o.a,{})]})]}),Object(S.jsx)(j.a,{fontSize:"md",padding:"1rem 0",children:"Second Pincode"}),Object(S.jsxs)(o.c,{onChange:function(e,t){var n;(n=t)>=1e5&&b(n)},precision:0,step:1,min:11e4,max:999999,children:[Object(S.jsx)(o.d,{}),Object(S.jsxs)(o.e,{children:[Object(S.jsx)(o.b,{}),Object(S.jsx)(o.a,{})]})]}),Object(S.jsx)(w,{pincode:n}),Object(S.jsx)(w,{pincode:d}),Object(S.jsxs)(j.a,{fontSize:"md",padding:"2rem 0",children:[Object(S.jsx)("strong",{children:"Note:"})," This utility only checks if a vaccination centre is available with minimum age limit 18."]})]}),Object(S.jsxs)(j.a,{fontSize:"sm",textAlign:"center",marginTop:"21rem",padding:"1rem 0",background:"gray.100",children:["Made by"," ",Object(S.jsx)("u",{children:Object(S.jsx)("a",{href:"https://www.linkedin.com/in/thatniceman",target:"_blank",rel:"noopener",children:"Abhijeet Singh"})})]})]})}var z=n(133),F=n(77),C=n(134),I=new z.a;a.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(F.a,{client:I,children:Object(S.jsx)(C.a,{children:Object(S.jsx)(k,{})})})}),document.getElementById("root"))},91:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.dd126e97.chunk.js.map