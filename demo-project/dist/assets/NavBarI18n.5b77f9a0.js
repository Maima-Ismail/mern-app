import{M as m,o as r,b as s,w as a,p as o,y as u,c as g,F as f,a as _,E as d,x as L,t as h}from"./index.30a9a44b.js";import{V}from"./VMenu.54c59b67.js";import{V as b,a as v,b as x}from"./VList.115d9393.js";import{V as C}from"./VBtn.b063c464.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.a99c0c73.js";import"./VOverlay.998081e8.js";import"./router.dfe3e1e7.js";import"./lazy.fa0d234d.js";import"./easing.36b781ab.js";import"./VImg.9952cb03.js";import"./index.6a573a18.js";import"./VAvatar.aeee1a67.js";import"./VDivider.a03abf93.js";import"./position.8ec4a68a.js";const k={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(l,{emit:c}){const t=l,{locale:i}=m({useScope:"global"});return(n,p)=>(r(),s(C,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(u,{icon:"tabler-language",size:"24"}),o(V,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(b,{"min-width":"175px"},{default:a(()=>[(r(!0),g(f,null,_(t.languages,e=>(r(),s(v,{key:e.i18nLang,value:e.i18nLang,onClick:y=>{i.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(x,null,{default:a(()=>[d(L(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},j={__name:"NavBarI18n",setup(l){const{isAppRtl:c}=h(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],i=n=>{c.value=n==="ar"};return(n,p)=>(r(),s(k,{languages:t,onChange:i}))}};export{j as default};
