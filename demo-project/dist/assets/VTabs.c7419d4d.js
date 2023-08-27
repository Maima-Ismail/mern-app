import{a0 as I,as as P,a1 as $,a2 as F,an as H,B as w,k as x,a6 as z,aF as N,p as m,O as M,ae as U,aw as X,a5 as l,a4 as Y,ap as q}from"./index.30a9a44b.js";import{b as W,V as J}from"./VBtn.b063c464.js";import{j as K,a as L,u as Q}from"./router.dfe3e1e7.js";import{a as Z,s as ee}from"./easing.36b781ab.js";import{V as te}from"./VSlideGroup.ab06073a.js";const R=Symbol.for("vuetify:v-tabs"),ae=I({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:P,appendIcon:P,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...$(),...K(),...W({selectedClass:"v-tab--selected"}),...F()},setup(e,t){let{slots:d,attrs:u}=t;const{textColorClasses:g,textColorStyles:v}=H(e,"sliderColor"),a=w(()=>e.direction==="horizontal"),c=x(!1),o=x(),C=x();function E(h){let{value:V}=h;if(c.value=V,V){var k,B;const y=(k=o.value)==null||(B=k.$el.parentElement)==null?void 0:B.querySelector(".v-tab--selected .v-tab__slider"),S=C.value;if(!y||!S)return;const D=getComputedStyle(y).color,s=y.getBoundingClientRect(),n=S.getBoundingClientRect(),f=a.value?"x":"y",b=a.value?"X":"Y",T=a.value?"right":"bottom",r=a.value?"width":"height",G=s[f],O=n[f],i=G>O?s[T]-n[T]:s[f]-n[f],_=Math.sign(i)>0?a.value?"right":"bottom":Math.sign(i)<0?a.value?"left":"top":"center",j=(Math.abs(i)+(Math.sign(i)<0?s[r]:n[r]))/Math.max(s[r],n[r]),A=s[r]/n[r],p=1.5;Z(S,{backgroundColor:[D,""],transform:[`translate${b}(${i}px) scale${b}(${A})`,`translate${b}(${i/p}px) scale${b}(${(j-1)/p+1})`,""],transformOrigin:Array(3).fill(_)},{duration:225,easing:ee})}}return z(()=>{const[h]=N(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return m(J,M({_as:"VTab",symbol:R,ref:o,class:["v-tab"],tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},h,u,{"onGroup:selected":E}),{default:()=>[d.default?d.default():e.title,!e.hideSlider&&m("div",{ref:C,class:["v-tab__slider",g.value],style:v.value},null)]})}),{}}});function oe(e){return e?e.map(t=>typeof t=="string"?{title:t,value:t}:t):[]}const ce=I({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...L(),...$()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:d}=t;const u=U(e,"modelValue"),g=w(()=>oe(e.items)),{densityClasses:v}=Q(e),{backgroundColorClasses:a,backgroundColorStyles:c}=X(l(e,"bgColor"));return Y({VTab:{color:l(e,"color"),direction:l(e,"direction"),stacked:l(e,"stacked"),fixed:l(e,"fixedTabs"),sliderColor:l(e,"sliderColor"),hideSlider:l(e,"hideSlider")}}),z(()=>m(te,{modelValue:u.value,"onUpdate:modelValue":o=>u.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},v.value,a.value],style:[{"--v-tabs-height":q(e.height)},c.value],role:"tablist",symbol:R,mandatory:e.mandatory,direction:e.direction},{default:()=>[d.default?d.default():g.value.map(o=>m(ae,M(o,{key:o.title}),null))]})),{}}});export{ce as V,ae as a};
