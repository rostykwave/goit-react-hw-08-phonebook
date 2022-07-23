"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[937],{4937:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,o,i,a,s,c,l,u,d,p,x,h,f=t(8493),m=t(5705),b=t(168),j=t(5838),Z=(0,j.Z)(m.gN)(r||(r=(0,b.Z)(["\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  :focus-visible {\n    outline: 2px solid #2196f3;\n  }\n"]))),g=(0,j.Z)(m.l0)(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  padding: 30px 15px;\n  border: 1px solid black;\n"]))),v=j.Z.label(i||(i=(0,b.Z)(["\n  position: relative;\n  :not(:last-child) {\n    margin-bottom: 28px;\n  }\n"]))),C=j.Z.span(a||(a=(0,b.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateY(calc(-100% + -4px));\n"]))),k=j.Z.p(s||(s=(0,b.Z)(["\n  color: red;\n  font-size: 14px;\n"]))),y=j.Z.button(c||(c=(0,b.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n\n  margin-top: 20px;\n  display: block;\n\n  max-width: 100px;\n  padding: 7px 4px;\n\n  font-size: 13px;\n\n  border-radius: 4px;\n\n  :hover {\n    background-color: #c8e4fc;\n  }\n"]))),w=t(3284),_=t(9434),z=t(547),F=t(4443),I=t(184),A=function(n){var e=n.name;return(0,I.jsx)(m.Bc,{name:e,render:function(n){return(0,I.jsx)(k,{children:n})}})},B=w.Ry().shape({name:w.Z_().required(),number:w.Z_().min(6).max(13).required()}),N={name:"",number:""},P=function(){var n=(0,_.I0)();return(0,I.jsx)(m.J9,{initialValues:N,validationSchema:B,onSubmit:function(e,t){var r=t.resetForm;n(z.addContact(e)),r()},children:(0,I.jsxs)(g,{autoComplete:"off",children:[(0,I.jsxs)(v,{children:[(0,I.jsx)(C,{children:"Name"}),(0,I.jsx)(Z,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,I.jsx)(A,{name:"name"})]}),(0,I.jsxs)(v,{children:[(0,I.jsx)(C,{children:"Phone number"}),(0,I.jsx)(Z,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,I.jsx)(A,{name:"number"})]}),(0,I.jsx)(y,{type:"submit",children:"Add contact"})]})})},q=j.Z.button(l||(l=(0,b.Z)(["\n  font: inherit;\n  cursor: pointer;\n\n  margin-left: 20px;\n  margin-top: 20px;\n  max-width: 100px;\n  padding: 5px 4px;\n\n  border: none;\n  outline: none;\n  font-size: 12px;\n  border-radius: 4px;\n\n  :hover {\n    background-color: #c8e4fc;\n  }\n"]))),J=j.Z.ul(u||(u=(0,b.Z)(["\n  margin-top: 10px;\n"]))),L=j.Z.li(d||(d=(0,b.Z)(["\n  font-size: 16px;\n"]))),S=function(n){return n.contacts.filter},Y=function(n){var e=function(n){return n.contacts.items}(n),t=S(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))},D=function(){var n=(0,_.v9)(Y),e=(0,_.I0)();return(0,I.jsx)(J,{children:n.map((function(n){var t=n.id,r=n.name,o=n.number;return(0,I.jsxs)(L,{children:[(0,I.jsxs)("span",{children:[r,": ",o]}),(0,I.jsx)(q,{type:"button",onClick:function(){return function(n){return e(z.deleteContact(n))}(t)},children:"Delete"})]},t)}))})},E=j.Z.label(p||(p=(0,b.Z)(["\n  position: relative;\n"]))),M=j.Z.span(x||(x=(0,b.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateY(calc(-100% + -4px));\n"]))),R=j.Z.input(h||(h=(0,b.Z)(["\n  margin-top: 30px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  :focus-visible {\n    outline: 2px solid #2196f3;\n  }\n"]))),V=function(){var n=(0,_.v9)(S),e=(0,_.I0)();return(0,I.jsxs)(E,{children:[(0,I.jsx)(M,{children:"Find contacts by name"}),(0,I.jsx)(R,{type:"text",value:n,onChange:function(n){return e(F.changeFilter(n.target.value))}})]})},W=t(2791),G=function(){var n=(0,_.I0)();return(0,W.useEffect)((function(){n(z.fetchContacts())}),[n]),(0,I.jsxs)(f.W,{children:[(0,I.jsx)("h1",{children:"PhoneBook"}),(0,I.jsx)(P,{}),(0,I.jsx)("h1",{children:"Contacts"}),(0,I.jsx)(V,{}),(0,I.jsx)(D,{})]})}}}]);
//# sourceMappingURL=937.67af6e78.chunk.js.map