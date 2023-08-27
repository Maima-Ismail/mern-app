import{a7 as q,aU as T,k as F,B as x,ab as we,Z as B,aq as J,ar as z,a_ as Ae,a8 as Ee,a$ as le,aV as I,aW as Le,b0 as Te,b1 as _e,ap as _,b2 as se,ad as Se,aa as Fe,aB as Oe,aZ as Be,a2 as Re,ak as De,ae as He,a3 as Me,aJ as Ne,aw as Ve,a5 as Ie,a6 as We,p as H,O as $,b3 as X,b4 as $e,H as je,I as qe,at as ze,F as Ue,aF as Ye,T as Ze}from"./index.30a9a44b.js";import{r as ce,s as G,v as Q,w as ue,x as fe,h as Je,l as Ke,q as Xe,y as Ge}from"./router.dfe3e1e7.js";import{m as Qe,u as et}from"./lazy.fa0d234d.js";import{B as ee,g as ve,n as tt,a as nt,s as ot}from"./easing.36b781ab.js";import{m as at,M as lt}from"./VImg.9952cb03.js";function ke(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function rt(e){for(;e;){if(re(e))return e;e=e.parentElement}return document.scrollingElement}function Y(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(re(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function re(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function it(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const st=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function ct(e,t){const n={},o=a=>()=>{if(!T)return Promise.resolve(!0);const s=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(l=>{var c;const i=parseInt((c=e[a])!=null?c:0,10);n[a]=window.setTimeout(()=>{t==null||t(s),l(s)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const ut=Symbol.for("vuetify:v-menu"),ft=q({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...st()},"VOverlay/useActivator");function vt(e,t){let{isActive:n,isTop:o}=t;const a=F();let s=!1,l=!1,i=!0;const c=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:w}=ct(e,r=>{r===(e.openOnHover&&s||c.value&&l)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==r&&(i=!0),n.value=r)}),h={click:r=>{r.stopPropagation(),a.value=r.currentTarget||r.target,n.value=!n.value},mouseenter:r=>{s=!0,a.value=r.currentTarget||r.target,u()},mouseleave:r=>{s=!1,w()},focus:r=>{Le&&!r.target.matches(":focus-visible")||(l=!0,r.stopPropagation(),a.value=r.currentTarget||r.target,u())},blur:r=>{l=!1,r.stopPropagation(),w()}},v=x(()=>{const r={};return f.value&&(r.click=h.click),e.openOnHover&&(r.mouseenter=h.mouseenter,r.mouseleave=h.mouseleave),c.value&&(r.focus=h.focus,r.blur=h.blur),r}),m=x(()=>{const r={};if(e.openOnHover&&(r.mouseenter=()=>{s=!0,u()},r.mouseleave=()=>{s=!1,w()}),e.closeOnContentClick){const A=we(ut,null);r.click=()=>{n.value=!1,A==null||A.closeParents()}}return r}),C=x(()=>{const r={};return e.openOnHover&&(r.mouseenter=()=>{i&&(s=!0,i=!1,u())},r.mouseleave=()=>{s=!1,w()}),r});B(o,r=>{r&&(e.openOnHover&&!s&&(!c.value||!l)||c.value&&!l&&(!e.openOnHover||!s))&&(n.value=!1)});const k=F();J(()=>{!k.value||z(()=>{const r=k.value;a.value=Ae(r)?r.$el:r})});const E=Ee("useActivator");let b;return B(()=>!!e.activator,r=>{r&&T?(b=le(),b.run(()=>{dt(e,E,{activatorEl:a,activatorEvents:v})})):b&&b.stop()},{flush:"post",immediate:!0}),{activatorEl:a,activatorRef:k,activatorEvents:v,contentEvents:m,scrimEvents:C}}function dt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;B(()=>e.activator,(c,f)=>{if(f&&c!==f){const u=i(f);u&&l(u)}c&&z(()=>s())},{immediate:!0}),B(()=>e.activatorProps,()=>{s()}),I(()=>{l()});function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(a.value).forEach(u=>{let[w,h]=u;c.addEventListener(w,h)}),Object.keys(f).forEach(u=>{f[u]==null?c.removeAttribute(u):c.setAttribute(u,f[u])}))}function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(a.value).forEach(u=>{let[w,h]=u;c.removeEventListener(w,h)}),Object.keys(f).forEach(u=>{c.removeAttribute(u)}))}function i(){var c;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(f)if(f==="parent"){var w,h;let v=t==null||(w=t.proxy)==null||(h=w.$el)==null?void 0:h.parentNode;for(;v.hasAttribute("data-no-activator");)v=v.parentNode;u=v}else typeof f=="string"?u=document.querySelector(f):"$el"in f?u=f.$el:u=f;return o.value=((c=u)==null?void 0:c.nodeType)===Node.ELEMENT_NODE?u:null,o.value}}function te(e,t){return{x:e.x+t.x,y:e.y+t.y}}function mt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function de(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,s=n==="top"?0:n==="bottom"?t.height:n;return te({x:a,y:s},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,s=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return te({x:a,y:s},t)}return te({x:t.width/2,y:t.height/2},t)}const pe={static:ht,connected:wt},yt=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in pe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay/locationStrategies");function gt(e,t){const n=F({}),o=F();let a;J(async()=>{var l;(l=a)==null||l.stop(),o.value=void 0,T&&t.isActive.value&&e.locationStrategy&&(a=le(),await z(),a.run(()=>{if(typeof e.locationStrategy=="function"){var i;o.value=(i=e.locationStrategy(t,e,n))==null?void 0:i.updateLocation}else{var c;o.value=(c=pe[e.locationStrategy](t,e,n))==null?void 0:c.updateLocation}}))}),T&&window.addEventListener("resize",s,{passive:!0}),I(()=>{var l;T&&window.removeEventListener("resize",s),o.value=void 0,(l=a)==null||l.stop()});function s(l){var i;(i=o.value)==null||i.call(o,l)}return{contentStyles:n,updateLocation:o}}function ht(){}function bt(e){const t=tt(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function wt(e,t,n){const o=it(e.activatorEl.value);o&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:s}=Te(()=>{const v=ce(t.location,e.isRtl.value),m=t.origin==="overlap"?v:t.origin==="auto"?G(v):ce(t.origin,e.isRtl.value);return v.side===m.side&&v.align===Q(m).align?{preferredAnchor:ue(v),preferredOrigin:ue(m)}:{preferredAnchor:v,preferredOrigin:m}}),[l,i,c,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>x(()=>{const m=parseFloat(t[v]);return isNaN(m)?1/0:m})),u=x(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const v=t.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let w=!1;if(T){const v=new ResizeObserver(()=>{w&&h()});B([e.activatorEl,e.contentEl],(m,C)=>{let[k,E]=m,[b,r]=C;b&&v.unobserve(b),k&&v.observe(k),r&&v.unobserve(r),E&&v.observe(E)},{immediate:!0}),I(()=>{v.disconnect()})}function h(){if(w=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>w=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const v=e.activatorEl.value.getBoundingClientRect(),m=bt(e.contentEl.value),C=Y(e.contentEl.value),k=12;C.length||(C.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=C.reduce((O,S)=>{const y=S.getBoundingClientRect(),g=new ee({x:S===document.documentElement?0:y.x,y:S===document.documentElement?0:y.y,width:S.clientWidth,height:S.clientHeight});return O?new ee({x:Math.max(O.left,g.left),y:Math.max(O.top,g.top),width:Math.min(O.right,g.right)-Math.max(O.left,g.left),height:Math.min(O.bottom,g.bottom)-Math.max(O.top,g.top)}):g},void 0);E.x+=k,E.y+=k,E.width-=k*2,E.height-=k*2;let b={anchor:a.value,origin:s.value};function r(O){const S=new ee(m),y=de(O.anchor,v),g=de(O.origin,S);let{x:L,y:P}=mt(y,g);switch(O.anchor.side){case"top":P-=u.value[0];break;case"bottom":P+=u.value[0];break;case"left":L-=u.value[0];break;case"right":L+=u.value[0];break}switch(O.anchor.align){case"top":P-=u.value[1];break;case"bottom":P+=u.value[1];break;case"left":L-=u.value[1];break;case"right":L+=u.value[1];break}return S.x+=L,S.y+=P,S.width=Math.min(S.width,c.value),S.height=Math.min(S.height,f.value),{overflows:ve(S,E),x:L,y:P}}let A=0,M=0;const V={x:0,y:0},N={x:!1,y:!1};let R=-1;for(;;){if(R++>10){_e("Infinite loop detected in connectedLocationStrategy");break}const{x:O,y:S,overflows:y}=r(b);A+=O,M+=S,m.x+=O,m.y+=S;{const g=fe(b.anchor),L=y.x.before||y.x.after,P=y.y.before||y.y.after;let D=!1;if(["x","y"].forEach(d=>{if(d==="x"&&L&&!N.x||d==="y"&&P&&!N.y){const p={anchor:{...b.anchor},origin:{...b.origin}},ie=d==="x"?g==="y"?Q:G:g==="y"?G:Q;p.anchor=ie(p.anchor),p.origin=ie(p.origin);const{overflows:U}=r(p);(U[d].before<=y[d].before&&U[d].after<=y[d].after||U[d].before+U[d].after<(y[d].before+y[d].after)/2)&&(b=p,D=N[d]=!0)}}),D)continue}y.x.before&&(A+=y.x.before,m.x+=y.x.before),y.x.after&&(A-=y.x.after,m.x-=y.x.after),y.y.before&&(M+=y.y.before,m.y+=y.y.before),y.y.after&&(M-=y.y.after,m.y-=y.y.after);{const g=ve(m,E);V.x=E.width-g.x.before-g.x.after,V.y=E.height-g.y.before-g.y.after,A+=g.x.before,m.x+=g.x.before,M+=g.y.before,m.y+=g.y.before}break}const K=fe(b.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:_(me(M)),left:_(me(A)),minWidth:_(K==="y"?Math.min(l.value,v.width):l.value),maxWidth:_(ye(se(V.x,l.value===1/0?0:l.value,c.value))),maxHeight:_(ye(se(V.y,i.value===1/0?0:i.value,f.value)))})}return B(()=>[a.value,s.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>h(),{immediate:!o}),o&&z(()=>h()),requestAnimationFrame(()=>{n.value.maxHeight&&h()}),{updateLocation:h}}function me(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ye(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ne=!0;const Z=[];function Et(e){!ne||Z.length?(Z.push(e),oe()):(ne=!1,e(),oe())}let ge=-1;function oe(){cancelAnimationFrame(ge),ge=requestAnimationFrame(()=>{const e=Z.shift();e&&e(),Z.length?oe():ne=!0})}const ae={none:null,close:kt,block:pt,reposition:xt},St=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ae}},"VOverlay/scrollStrategies");function Ot(e,t){if(!T)return;let n;J(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=le(),await z(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e);else{var a;(a=ae[e.scrollStrategy])==null||a.call(ae,t,e)}}))})}function kt(e){var n;function t(o){e.isActive.value=!1}xe((n=e.activatorEl.value)!=null?n:e.contentEl.value,t)}function pt(e,t){var n;const o=(n=e.root.value)==null?void 0:n.offsetParent,a=[...new Set([...Y(e.activatorEl.value,t.contained?o:void 0),...Y(e.contentEl.value,t.contained?o:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),s=window.innerWidth-document.documentElement.offsetWidth,l=(i=>re(i)&&i)(o||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((i,c)=>{i.style.setProperty("--v-body-scroll-x",_(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",_(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",_(s)),i.classList.add("v-overlay-scroll-blocked")}),I(()=>{a.forEach((i,c)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-u}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function xt(e){var a;let t=!1,n=-1;function o(s){Et(()=>{var l,i;const c=performance.now();(l=(i=e.updateLocation).value)==null||l.call(i,s),t=(performance.now()-c)/(1e3/60)>2})}xe((a=e.activatorEl.value)!=null?a:e.contentEl.value,s=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{o(s)})})):o(s)})}function xe(e,t){const n=[document,...Y(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),I(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const he=Symbol.for("vuetify:stack"),W=Se([]);function Pt(e,t){const n=Ee("useStack"),o=we(he,void 0),a=Se({activeChildren:new Set});Fe(he,a);const s=F(+t.value);Oe(e,()=>{var c;const f=(c=W.at(-1))==null?void 0:c[1];s.value=f?f+10:+t.value,W.push([n.uid,s.value]),o==null||o.activeChildren.add(n.uid),I(()=>{const u=W.findIndex(w=>w[0]===n.uid);W.splice(u,1),o==null||o.activeChildren.delete(n.uid)})});const l=F(!0);J(()=>{var c;const f=((c=W.at(-1))==null?void 0:c[0])===n.uid;setTimeout(()=>l.value=f)});const i=x(()=>!a.activeChildren.size);return{globalTop:Be(l),localTop:i,stackStyles:x(()=>({zIndex:s.value}))}}function j(e){return{teleportTarget:x(()=>{const n=e.value;if(n===!0||!T)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o!=null){if(!j.cache.has(o)){const a=document.createElement("div");a.className="v-overlay-container",o.appendChild(a),j.cache.set(o,a)}return j.cache.get(o)}})}}j.cache=new WeakMap;function Ct(){return!0}function Pe(e,t,n){if(!e||Ce(e,n)===!1)return!1;const o=ke(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(s=>s==null?void 0:s.contains(e.target))}function Ce(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Ct)(e)}function At(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Pe(e,t,n)&&setTimeout(()=>{Ce(e,n)&&o&&o(e)},0)}function be(e,t){const n=ke(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Lt={mounted(e,t){const n=a=>At(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Pe(a,e,t)};be(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){!e._clickOutside||(be(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:a,onMousedown:s}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",s,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Tt(e){const{modelValue:t,color:n,...o}=e;return H(Ze,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&H("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const _t=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...ft(),...Je(),...Qe(),...yt(),...St(),...Re(),...at()},"v-overlay"),Ft=De()({name:"VOverlay",directives:{ClickOutside:Lt},inheritAttrs:!1,props:_t(),emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const s=He(e,"modelValue"),l=x({get:()=>s.value,set:d=>{d&&e.disabled||(s.value=d)}}),{teleportTarget:i}=j(x(()=>e.attach||e.contained)),{themeClasses:c}=Me(e),{rtlClasses:f,isRtl:u}=Ne(),{hasContent:w,onAfterLeave:h}=et(e,l),v=Ve(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:m,localTop:C,stackStyles:k}=Pt(l,Ie(e,"zIndex")),{activatorEl:E,activatorRef:b,activatorEvents:r,contentEvents:A,scrimEvents:M}=vt(e,{isActive:l,isTop:C}),{dimensionStyles:V}=Ke(e);B(()=>e.disabled,d=>{d&&(l.value=!1)});const N=F(),R=F(),{contentStyles:K,updateLocation:O}=gt(e,{isRtl:u,contentEl:R,activatorEl:E,isActive:l});Ot(e,{root:N,contentEl:R,activatorEl:E,isActive:l,updateLocation:O});function S(d){a("click:outside",d),e.persistent?D():l.value=!1}function y(){return l.value&&m.value}T&&B(l,d=>{d?window.addEventListener("keydown",g):window.removeEventListener("keydown",g)},{immediate:!0});function g(d){d.key==="Escape"&&m.value&&(e.persistent?D():l.value=!1)}const L=Xe();Oe(()=>e.closeOnBack,()=>{Ge(L,d=>{m.value&&l.value?(d(!1),e.persistent?D():l.value=!1):d()})});const P=F();B(()=>l.value&&(e.absolute||e.contained)&&i.value==null,d=>{if(d){const p=rt(N.value);p&&p!==document.scrollingElement&&(P.value=p.scrollTop)}});function D(){e.noClickAnimation||R.value&&nt(R.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ot})}return We(()=>{var d,p;return H(Ue,null,[(d=n.activator)==null?void 0:d.call(n,{isActive:l.value,props:$({ref:b},X(r.value),e.activatorProps)}),T&&H($e,{disabled:!i.value,to:i.value},{default:()=>[w.value&&H("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},c.value,f.value],style:[k.value,{top:_(P.value)}],ref:N},o),[H(Tt,$({color:v,modelValue:l.value&&!!e.scrim},X(M.value)),null),H(lt,{appear:!0,persisted:!0,transition:e.transition,target:E.value,onAfterLeave:()=>{h(),a("afterLeave")}},{default:()=>[je(H("div",$({ref:R,class:["v-overlay__content",e.contentClass],style:[V.value,K.value]},X(A.value),e.contentProps),[(p=n.default)==null?void 0:p.call(n,{isActive:l})]),[[qe,l.value],[ze("click-outside"),{handler:S,closeConditional:y,include:()=>[E.value]}]])]})])]})])}),{activatorEl:E,animateClick:D,contentEl:R,globalTop:m,localTop:C,updateLocation:O}}});function Nt(e){return Ye(e,Object.keys(Ft.props))}export{ut as V,Ft as a,Nt as f,_t as m};