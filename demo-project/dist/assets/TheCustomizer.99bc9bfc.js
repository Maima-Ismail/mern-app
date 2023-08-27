import{o as n,c as d,b as _,z as E,m as s,x as A,n as Z,F as c,k as Q,t as X,A as ee,i as le,B as te,C as y,N as M,q as t,p as a,w as o,y as D,P as ae,D as r,a as V,S as se,E as g,G as oe,s as I,H as ie,I as ne,J as re,K as ue,R as de,v as P}from"./index.30a9a44b.js";import{V as W}from"./VDivider.a03abf93.js";import{V as me}from"./index.6a573a18.js";import{V as F}from"./VBtn.b063c464.js";import{V as x,a as w}from"./VRadioGroup.ee2c4a89.js";import{V as h}from"./VInput.24975e5a.js";import{V as C}from"./VSwitch.c6df8cfd.js";import{V as ce,a as H}from"./VRow.2532b873.js";import{V as pe}from"./VSelect.69af7930.js";import{V as fe}from"./VNavigationDrawer.3aad7144.js";const ve={class:"customizer-section"},Ve={class:"text-caption"},ge={__name:"CustomizerSection",props:{title:{type:String,required:!0},divider:{type:Boolean,required:!1,default:!0}},setup(L){const m=L;return(f,T)=>(n(),d(c,null,[m.divider?(n(),_(W,{key:0})):E("",!0),s("div",ve,[s("p",Ve,A(m.title),1),Z(f.$slots,"default")])],64))}};const he={class:"customizer-heading d-flex align-center justify-space-between"},_e=s("div",null,[s("h6",{class:"text-h6"}," THEME CUSTOMIZER "),s("span",{class:"text-body-1"},"Customize & Preview in Real Time")],-1),be=s("h6",{class:"text-base font-weight-regular"}," Skins ",-1),ye=s("h6",{class:"mt-3 text-base font-weight-regular"}," Theme ",-1),xe={class:"d-flex align-center"},we=s("h6",{class:"mt-3 text-base font-weight-regular"}," Primary Color ",-1),Ce={class:"d-flex gap-x-4 mt-2"},Te=["onClick"],ze=s("h6",{class:"text-base font-weight-regular"}," Content width ",-1),ke={class:"mt-3 text-base font-weight-regular"},Se=s("h6",{class:"mt-3 text-base font-weight-regular"}," Footer Type ",-1),Ne={class:"d-flex align-center justify-space-between"},Ue=s("h6",{class:"text-base font-weight-regular"}," Menu Type ",-1),je={key:0,class:"d-flex align-center justify-space-between"},Oe={class:"d-flex align-center justify-space-between"},Re={class:"mt-6"},We={__name:"TheCustomizer",setup(L){const m=Q(!1),{theme:f,skin:T,appRouteTransition:S,navbarType:N,footerType:U,isVerticalNavCollapsed:j,isVerticalNavSemiDark:O,appContentWidth:R,appContentLayoutNav:p,isAppRtl:B,isNavbarBlurEnabled:$,isLessThanOverlayNavBreakpoint:q}=X(),b=ee(),z=JSON.parse(JSON.stringify(b.current.value.colors)),G=["primary","secondary","success","info","warning","error"],J=u=>{const l=b.name.value;b.themes.value[l].colors.primary=u,localStorage.setItem(`${P.app.title}-${l}ThemePrimaryColor`,u),localStorage.setItem(`${P.app.title}-initial-loader-color`,u)},k=(u,l)=>l?u:"#7367F0",{width:K}=le(),Y=te(()=>{const u=Object.entries(M);return p.value===y.Horizontal?u.filter(([l,v])=>v!==M.Hidden):u});return(u,l)=>{const v=ge;return t(q)(t(K))?E("",!0):(n(),d(c,{key:0},[a(F,{icon:"",size:"small",class:"app-customizer-toggler rounded-s-lg rounded-0",style:{"z-index":"1001"},onClick:l[0]||(l[0]=e=>m.value=!0)},{default:o(()=>[a(D,{icon:"tabler-settings"})]),_:1}),a(fe,{modelValue:t(m),"onUpdate:modelValue":l[13]||(l[13]=e=>r(m)?m.value=e:null),temporary:"",location:"end",width:"400",scrim:!1,class:"app-customizer"},{default:o(()=>[s("div",he,[_e,a(F,{icon:"",variant:"text",color:"secondary",size:"x-small",onClick:l[1]||(l[1]=e=>m.value=!1)},{default:o(()=>[a(D,{icon:"tabler-x",size:"20"})]),_:1})]),a(W),a(t(ae),{tag:"ul",options:{wheelPropagation:!1}},{default:o(()=>[a(v,{title:"THEMING",divider:!1},{default:o(()=>[be,a(x,{modelValue:t(T),"onUpdate:modelValue":l[2]||(l[2]=e=>r(T)?T.value=e:null),inline:""},{default:o(()=>[(n(!0),d(c,null,V(Object.entries(t(se)),([e,i])=>(n(),_(w,{key:e,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),ye,s("div",xe,[a(h,{for:"pricing-plan-toggle",class:"me-3"},{default:o(()=>[g(" Light ")]),_:1}),s("div",null,[a(C,{id:"pricing-plan-toggle",modelValue:t(f),"onUpdate:modelValue":l[3]||(l[3]=e=>r(f)?f.value=e:null),label:"Dark","true-value":"dark","false-value":"light"},null,8,["modelValue"])])]),we,s("div",Ce,[(n(),d(c,null,V(G,(e,i)=>s("div",{key:e,style:oe([{width:"2.5rem",height:"2.5rem","border-radius":"0.5rem",transition:"all 0.25s ease"},{backgroundColor:k(t(z)[e],i)}]),class:I(["cursor-pointer d-flex align-center justify-center",{"elevation-4":t(b).current.value.colors.primary===k(t(z)[e],i)}]),onClick:Be=>J(k(t(z)[e],i))},[a(me,null,{default:o(()=>[ie(a(D,{icon:"tabler-check",color:"white"},null,512),[[ne,t(b).current.value.colors.primary===k(t(z)[e],i)]])]),_:2},1024)],14,Te)),64))])]),_:1}),a(v,{title:"LAYOUT"},{default:o(()=>[ze,a(x,{modelValue:t(R),"onUpdate:modelValue":l[4]||(l[4]=e=>r(R)?R.value=e:null),inline:""},{default:o(()=>[(n(!0),d(c,null,V(Object.entries(t(re)),([e,i])=>(n(),_(w,{key:e,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),s("h6",ke,A(t(p)===t(y).Vertical?"Navbar":"Header")+" Type ",1),a(x,{modelValue:t(N),"onUpdate:modelValue":l[5]||(l[5]=e=>r(N)?N.value=e:null),inline:""},{default:o(()=>[(n(!0),d(c,null,V(t(Y),([e,i])=>(n(),_(w,{key:e,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Se,a(x,{modelValue:t(U),"onUpdate:modelValue":l[6]||(l[6]=e=>r(U)?U.value=e:null),inline:""},{default:o(()=>[(n(!0),d(c,null,V(Object.entries(t(ue)),([e,i])=>(n(),_(w,{key:e,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),s("div",Ne,[a(h,{for:"customizer-navbar-blur",class:"text-high-emphasis"},{default:o(()=>[g(" Navbar Blur ")]),_:1}),s("div",null,[a(C,{id:"customizer-navbar-blur",modelValue:t($),"onUpdate:modelValue":l[7]||(l[7]=e=>r($)?$.value=e:null),class:"ms-2"},null,8,["modelValue"])])])]),_:1}),a(v,{title:"MENU"},{default:o(()=>[Ue,a(x,{modelValue:t(p),"onUpdate:modelValue":l[8]||(l[8]=e=>r(p)?p.value=e:null),inline:""},{default:o(()=>[(n(!0),d(c,null,V(Object.entries(t(y)),([e,i])=>(n(),_(w,{key:e,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),t(p)===t(y).Vertical?(n(),d("div",je,[a(h,{for:"customizer-menu-collapsed",class:"text-high-emphasis"},{default:o(()=>[g(" Collapsed Menu ")]),_:1}),s("div",null,[a(C,{id:"customizer-menu-collapsed",modelValue:t(j),"onUpdate:modelValue":l[9]||(l[9]=e=>r(j)?j.value=e:null),class:"ms-2"},null,8,["modelValue"])])])):E("",!0),s("div",{class:I(["align-center justify-space-between",t(f)==="light"&&t(p)===t(y).Vertical?"d-flex":"d-none"])},[a(h,{for:"customizer-menu-semi-dark",class:"text-high-emphasis"},{default:o(()=>[g(" Semi Dark Menu ")]),_:1}),s("div",null,[a(C,{id:"customizer-menu-semi-dark",modelValue:t(O),"onUpdate:modelValue":l[10]||(l[10]=e=>r(O)?O.value=e:null),class:"ms-2"},null,8,["modelValue"])])],2)]),_:1}),a(v,{title:"MISC"},{default:o(()=>[s("div",Oe,[a(h,{for:"customizer-rtl",class:"text-high-emphasis"},{default:o(()=>[g(" RTL ")]),_:1}),s("div",null,[a(C,{id:"customizer-rtl",modelValue:t(B),"onUpdate:modelValue":l[11]||(l[11]=e=>r(B)?B.value=e:null),class:"ms-2"},null,8,["modelValue"])])]),s("div",Re,[a(ce,null,{default:o(()=>[a(H,{cols:"5",class:"d-flex align-center"},{default:o(()=>[a(h,{for:"route-transition",class:"text-high-emphasis"},{default:o(()=>[g(" Router Transition ")]),_:1})]),_:1}),a(H,{cols:"7"},{default:o(()=>[a(pe,{id:"route-transition",modelValue:t(S),"onUpdate:modelValue":l[12]||(l[12]=e=>r(S)?S.value=e:null),items:Object.entries(t(de)).map(([e,i])=>({key:e,value:i})),"item-title":"key","item-value":"value","single-line":""},null,8,["modelValue","items"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}};export{We as _};
