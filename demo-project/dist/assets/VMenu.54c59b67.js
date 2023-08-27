import{f as b}from"./forwardRefs.c003b6b8.js";import{a0 as E,p as h,O as y,T as w,ak as O,ax as A,ae as M,a9 as B,B as D,k as T,ab as q,aa as F,Z as k,a6 as L}from"./index.30a9a44b.js";import{u as R}from"./scopeId.a99c0c73.js";import{m as j,V as x,f as I,a as U}from"./VOverlay.998081e8.js";import{a as v,d as X,s as V,b as Y,n as H}from"./easing.36b781ab.js";import{V as N}from"./router.dfe3e1e7.js";const W=E({name:"VDialogTransition",props:{target:Object},setup(s,u){let{slots:t}=u;const a={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(e,f){var i;await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),e.style.visibility="";const{x:l,y:o,sx:c,sy:m,speed:r}=C(s.target,e),d=v(e,[{transform:`translate(${l}px, ${o}px) scale(${c}, ${m})`,opacity:0},{transform:""}],{duration:225*r,easing:X});(i=P(e))==null||i.forEach(n=>{v(n,[{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*r,easing:V})}),d.finished.then(()=>f())},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(e,f){var i;await new Promise(n=>requestAnimationFrame(n));const{x:l,y:o,sx:c,sy:m,speed:r}=C(s.target,e);v(e,[{transform:""},{transform:`translate(${l}px, ${o}px) scale(${c}, ${m})`,opacity:0}],{duration:125*r,easing:Y}).finished.then(()=>f()),(i=P(e))==null||i.forEach(n=>{v(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:V})})},onAfterLeave(e){e.style.removeProperty("pointer-events")}};return()=>s.target?h(w,y({name:"dialog-transition"},a,{css:!1}),t):h(w,{name:"dialog-transition"},t)}});function P(s){var u;const t=(u=s.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:u.children;return t&&[...t]}function C(s,u){const t=s.getBoundingClientRect(),a=H(u),[e,f]=getComputedStyle(u).transformOrigin.split(" ").map(S=>parseFloat(S)),[i,l]=getComputedStyle(u).getPropertyValue("--v-overlay-anchor-origin").split(" ");let o=t.left+t.width/2;i==="left"||l==="left"?o-=t.width/2:(i==="right"||l==="right")&&(o+=t.width/2);let c=t.top+t.height/2;i==="top"||l==="top"?c-=t.height/2:(i==="bottom"||l==="bottom")&&(c+=t.height/2);const m=t.width/a.width,r=t.height/a.height,d=Math.max(1,m,r),n=m/d,g=r/d,p=a.width*a.height/(window.innerWidth*window.innerHeight),$=p>.12?Math.min(1.5,(p-.12)*10+1):1;return{x:o-(e+a.left),y:c-(f+a.top),sx:n,sy:g,speed:$}}const _=O()({name:"VMenu",props:{id:String,...A(j({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:W}}),["absolute"])},emits:{"update:modelValue":s=>!0},setup(s,u){let{slots:t}=u;const a=M(s,"modelValue"),{scopeId:e}=R(),f=B(),i=D(()=>s.id||`v-menu-${f}`),l=T(),o=q(x,null);let c=0;F(x,{register(){++c},unregister(){--c},closeParents(){setTimeout(()=>{c||(a.value=!1,o==null||o.closeParents())},40)}}),k(a,r=>{r?o==null||o.register():o==null||o.unregister()});function m(){o==null||o.closeParents()}return L(()=>{const[r]=I(s);return h(U,y({ref:l,class:["v-menu"]},r,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,absolute:!0,activatorProps:y({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-owns":i.value},s.activatorProps),"onClick:outside":m},e),{activator:t.activator,default:function(){for(var d,n=arguments.length,g=new Array(n),p=0;p<n;p++)g[p]=arguments[p];return h(N,{root:!0},{default:()=>[(d=t.default)==null?void 0:d.call(t,...g)]})}})}),b({id:i},l)}});export{_ as V,W as a};
