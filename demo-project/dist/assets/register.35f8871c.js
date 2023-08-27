import{k as n,o as B,b as L,w as t,p as e,m as r,q as a,V as M,v as U,b9 as q,D as p,E as y,b8 as E,j as F,r as O,b7 as J}from"./index.30a9a44b.js";import{a as P,b as $,c as G,d as z}from"./auth-v2-register-illustration-light.bed06000.js";import{u as v,m as H,a as K}from"./useGenerateImageVariant.cbcd5018.js";import{u as Q}from"./useAppAbility.fbf192f6.js";import{_ as W}from"./AuthProvider.2bcde84d.js";import{r as _,f as X,e as Y}from"./validators.741d8b3f.js";import{b as x}from"./route-block.2f1a6263.js";import{V as k}from"./VImg.9952cb03.js";import{a as i,V as w}from"./VRow.2532b873.js";import{V as Z,c as I}from"./VCard.7c5bdd1f.js";import{V as g}from"./VTextField.b21e8a14.js";import{V as ee}from"./VCheckbox.08a14a2e.js";import{V as te}from"./VInput.24975e5a.js";import{V as ae}from"./VBtn.b063c464.js";import{V as R}from"./VDivider.a03abf93.js";import{V as se}from"./VForm.afc9a864.js";import"./index-e24386e7.51d7a79b.js";import"./tslib.es6.765a6b88.js";import"./useProjectStore.58319f1b.js";import"./index.0d4b9ec4.js";import"./router.dfe3e1e7.js";import"./VAvatar.aeee1a67.js";import"./position.8ec4a68a.js";/* empty css                   */import"./VField.e328867b.js";import"./index.6a573a18.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.da854d3c.js";import"./VCheckboxBtn.4e339412.js";import"./VSelectionControl.b8a27f61.js";const oe={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},re={class:"d-flex align-center justify-center w-100 h-100"},le=r("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here \u{1F680} ",-1),ie=r("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),ne={class:"d-flex align-center mt-2 mb-4"},ue=r("span",{class:"me-1"},"I agree to",-1),me=r("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),de=r("span",null,"Already have an account?",-1),ce=r("span",{class:"mx-4"},"or",-1),pe={__name:"register",setup(fe){const h=n(),u=n("johnDoe"),m=n("john@example.com"),d=n("john@MATERIO#123"),f=n(!0),b=E(),S=F(),D=Q(),C=n({email:void 0,password:void 0}),j=()=>{J.post("/auth/register",{username:u.value,email:m.value,password:d.value}).then(l=>{const{accessToken:s,userData:V,userAbilities:o}=l.data;return localStorage.setItem("userAbilities",JSON.stringify(o)),D.update(o),localStorage.setItem("userData",JSON.stringify(V)),localStorage.setItem("accessToken",JSON.stringify(s)),S.replace(b.query.to?String(b.query.to):"/"),null}).catch(l=>{const{errors:s}=l.response.data;C.value=s,console.error(l.response.data)})},A=v(z,G,$,P,!0),N=v(K,H),c=n(!1),T=()=>{var l;(l=h.value)==null||l.validate().then(({valid:s})=>{s&&j()})};return(l,s)=>{const V=O("RouterLink");return B(),L(w,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(i,{lg:"8",class:"d-none d-lg-flex"},{default:t(()=>[r("div",oe,[r("div",re,[e(k,{"max-width":"441",src:a(A),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(k,{class:"auth-footer-mask",src:a(N)},null,8,["src"])])]),_:1}),e(i,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:t(()=>[e(Z,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(I,null,{default:t(()=>[e(a(M),{nodes:a(U).app.logo,class:"mb-6"},null,8,["nodes"]),le,ie]),_:1}),e(I,null,{default:t(()=>[e(a(se),{ref_key:"refVForm",ref:h,onSubmit:q(T,["prevent"])},{default:t(()=>[e(w,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(u),"onUpdate:modelValue":s[0]||(s[0]=o=>p(u)?u.value=o:null),rules:[a(_),a(X)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(m),"onUpdate:modelValue":s[1]||(s[1]=o=>p(m)?m.value=o:null),rules:[a(_),a(Y)],label:"Email",type:"email"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(d),"onUpdate:modelValue":s[2]||(s[2]=o=>p(d)?d.value=o:null),rules:[a(_)],label:"Password",type:a(c)?"text":"password","append-inner-icon":a(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=o=>c.value=!a(c))},null,8,["modelValue","rules","type","append-inner-icon"]),r("div",ne,[e(ee,{id:"privacy-policy",modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=o=>p(f)?f.value=o:null),inline:""},null,8,["modelValue"]),e(te,{for:"privacy-policy",class:"pb-1",style:{opacity:"1"}},{default:t(()=>[ue,me]),_:1})]),e(ae,{block:"",type:"submit"},{default:t(()=>[y(" Sign up ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:t(()=>[de,e(V,{class:"text-primary ms-2",to:{name:"login"}},{default:t(()=>[y(" Sign in instead ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(R),ce,e(R)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(W)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof x=="function"&&x(pe);export{pe as default};