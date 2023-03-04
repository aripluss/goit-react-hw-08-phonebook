"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[75],{7294:function(n,e,o){o.d(e,{L1:function(){return p},aY:function(){return x},eK:function(){return b},h7:function(){return f},l_:function(){return h},tN:function(){return u}});var r,i,t,a,s,l,c=o(168),d=o(5705),m=o(6444),u=m.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  min-width: 30%;\n"]))),p=m.ZP.label(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),h=m.ZP.input(t||(t=(0,c.Z)(["\n  min-height: 35px;\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  transition: border-bottom 0.3s ease-in-out;\n  font-size: inherit;\n\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid var(--accent-color);\n  }\n\n  &::placeholder {\n    font-size: 16px;\n  }\n"]))),x=(0,m.ZP)(d.l0)(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  min-width: 30%;\n"]))),f=(0,m.ZP)(d.gN)(s||(s=(0,c.Z)(["\n  min-height: 35px;\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  transition: border-bottom 0.3s ease-in-out;\n  font-size: inherit;\n\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid var(--accent-color);\n  }\n\n  &::placeholder {\n    font-size: 16px;\n  }\n"]))),b=(0,m.ZP)(d.Bc)(l||(l=(0,c.Z)(["\n  color: var(--red-color);\n"])))},4544:function(n,e,o){o.d(e,{W:function(){return u}});var r=o(1413),i=o(5705),t=o(6727),a=o(9434),s=o(4746),l=o(7337),c=o(8445),d=o(7294),m=o(184),u=function(n){var e=n.onSubmit,o=void 0===e?function(){}:e,u=n.isSignInForm,p=void 0!==u&&u,h=(0,a.v9)(s.mW),x=(0,t.Ry)({name:(0,t.Z_)().min(2,"Must be at least 2 characters long"),email:(0,t.Z_)().required("Required").email("Must be a valid email").min(2,"Must be at least 2 characters long"),password:(0,t.Z_)().required("Required").min(6,"Must be at least 6 characters long").max(20,"Must be 20 characters maximum")});return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{style:{marginBottom:"40px"},children:p?"Sign in":"Sign up"}),(0,m.jsx)(i.J9,{initialValues:{name:"",email:"",password:""},validationSchema:x,onSubmit:function(n,e){var i=n.name,t=n.email,a=n.password;console.log("values",n);var s=(0,r.Z)((0,r.Z)({},!p&&{name:i}),{},{email:t,password:a});console.log("formData",s),o(s),e.resetForm()},children:(0,m.jsxs)(d.aY,{children:[p?null:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.L1,{htmlFor:"name",children:"Name:"}),(0,m.jsx)(d.h7,{id:"name",type:"name",name:"name",placeholder:"Iryna"}),(0,m.jsx)(d.eK,{name:"name",component:"div"})]}),(0,m.jsx)(d.L1,{htmlFor:"email",children:"Email:"}),(0,m.jsx)(d.h7,{id:"email",type:"email",name:"email",placeholder:"example@gmail.com"}),(0,m.jsx)(d.eK,{name:"email",component:"div"}),(0,m.jsx)(d.L1,{htmlFor:"password",children:"Password:"}),(0,m.jsx)(d.h7,{id:"password",type:"password",name:"password",placeholder:"***************"}),(0,m.jsx)(d.eK,{name:"password",component:"div"}),(0,m.jsxs)(c.OQ,{type:"submit",disabled:"pending"===h,children:["pending"===h&&(0,m.jsx)(l.a,{isButtonLoader:!0}),p?"Sign in":"Sign up"]})]})})]})}},5075:function(n,e,o){o.r(e),o.d(e,{default:function(){return u}});var r=o(2791),i=o(7689),t=o(9434),a=o(5218),s=o(4746),l=o(5667),c=o(4544),d=o(1149),m=o(184);function u(){var n=(0,t.v9)(s.Qb),e=(0,t.v9)(s.Hn),o=(0,i.s0)(),u=(0,t.I0)();(0,r.useEffect)((function(){n&&o("/contacts")}),[n,o]),(0,r.useEffect)((function(){e&&a.Am.error("Incorrect login information.")}),[e]);return(0,m.jsxs)(d.N,{children:[(0,m.jsx)(c.W,{onSubmit:function(n){var e=n.email,o=n.password;u((0,l.Qb)({email:e,password:o}))},isSignInForm:!0}),(0,m.jsx)(a.x7,{})]})}}}]);
//# sourceMappingURL=75.47fc1804.chunk.js.map