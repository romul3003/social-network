(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{295:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1V7k6",dialogItems:"Dialogs_dialogItems__3bklg",dialog:"Dialogs_dialog__3o4aJ",link:"Dialogs_link__2riXz",active:"Dialogs_active__2fQ1L",messages:"Dialogs_messages__21eWP",message:"Dialogs_message__1WkT-"}},300:function(e,a,t){"use strict";t.r(a);var n=t(129),s=t(0),i=t.n(s),l=t(295),o=t.n(l),r=t(15),c=function(e){var a=e.name,t=e.id,n="/dialogs/".concat(t);return i.a.createElement("div",{className:o.a.dialog},i.a.createElement(r.b,{to:n,className:o.a.link,activeClassName:o.a.active},a))},m=function(e){var a=e.message;return i.a.createElement("div",{className:o.a.message},a)},u=t(28),g=t(86),d=t(130),b=t(40),_=t(61),f=Object(_.a)(10),v=function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(g.a,{component:b.b,name:"newMessageBody",placeholder:"Enter your message",validate:[_.b,f]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))},E=v=Object(d.a)({form:"dialogAddMessageForm"})(v),p=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(c,{id:e.id,name:e.name,key:e.id})})),n=a.messages.map((function(e){return i.a.createElement(m,{message:e.message,key:e.id})}));return e.isAuth?i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogItems},t),i.a.createElement("div",{className:o.a.messages},i.a.createElement("div",null,n),i.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))):i.a.createElement(u.a,{to:"/login"})},h=t(17),k=t(34),j=t(35),O=t(37),y=t(36),D=t(38),N=function(e){return{isAuth:e.auth.isAuth}},w=t(9);a.default=Object(w.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:n.b}),(function(e){var a=function(a){function t(){return Object(k.a)(this,t),Object(O.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(D.a)(t,a),Object(j.a)(t,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),t}(i.a.Component);return Object(h.b)(N)(a)}))(p)}}]);
//# sourceMappingURL=4.47a42db1.chunk.js.map