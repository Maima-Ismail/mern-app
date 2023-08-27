import{a7 as ne,aJ as ue,B as a,a5 as V,k as U,bf as ce,aa as de,b2 as G,a0 as ee,ab as te,an as ve,a6 as le,ap as E,p as c,H as Q,at as me,I as fe,bg as be,aw as Z}from"./index.30a9a44b.js";import{d as he}from"./index.6a573a18.js";import{c as ke,b as pe,R as ye,f as ge,g as Se}from"./router.dfe3e1e7.js";const J=Symbol.for("vuetify:v-slider");function we(l,t,f){const p=f==="vertical",m=t.getBoundingClientRect(),y="touches"in l?l.touches[0]:l;return p?y.clientY-(m.top+m.height/2):y.clientX-(m.left+m.width/2)}function Ce(l,t){return"touches"in l&&l.touches.length?l.touches[0][t]:"changedTouches"in l&&l.changedTouches.length?l.changedTouches[0][t]:l[t]}const ze=ne({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:l=>typeof l=="boolean"||l==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:l=>typeof l=="boolean"||l==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:l=>["vertical","horizontal"].includes(l)},reverse:Boolean,...ke(),...pe({elevation:2})},"slider"),xe=l=>{let{props:t,handleSliderMouseUp:f,handleMouseMove:p,getActiveThumb:m}=l;const{isRtl:y}=ue(),g=a(()=>y.value!==t.reverse),F=a(()=>{let e=y.value?"rtl":"ltr";return t.reverse&&(e=e==="rtl"?"ltr":"rtl"),e}),n=a(()=>parseFloat(t.min)),b=a(()=>parseFloat(t.max)),u=a(()=>t.step>0?parseFloat(t.step):0),L=a(()=>{const e=u.value.toString().trim();return e.includes(".")?e.length-e.indexOf(".")-1:0}),B=a(()=>parseInt(t.thumbSize,10)),S=a(()=>parseInt(t.tickSize,10)),$=a(()=>parseInt(t.trackSize,10)),T=a(()=>(b.value-n.value)/u.value),K=V(t,"disabled"),I=a(()=>t.direction==="vertical"),D=a(()=>{var e;return t.error||t.disabled?void 0:(e=t.thumbColor)!=null?e:t.color}),P=a(()=>{var e;return t.error||t.disabled?void 0:(e=t.trackColor)!=null?e:t.color}),A=a(()=>{var e;return t.error||t.disabled?void 0:(e=t.trackFillColor)!=null?e:t.color}),w=U(!1),d=U(0),M=U(),v=U();function z(e){if(u.value<=0)return e;const o=G(e,n.value,b.value),N=n.value%u.value,Y=Math.round((o-N)/u.value)*u.value+N;return parseFloat(Math.min(Y,b.value).toFixed(L.value))}function C(e){var o;const N=t.direction==="vertical",Y=N?"top":"left",ae=N?"height":"width",re=N?"clientY":"clientX",{[Y]:se,[ae]:oe}=(o=M.value)==null?void 0:o.$el.getBoundingClientRect(),ie=Ce(e,re);let H=Math.min(Math.max((ie-se-d.value)/oe,0),1)||0;return(N||g.value)&&(H=1-H),z(n.value+H*(b.value-n.value))}let h=!1;const i=e=>{h||(d.value=0,f(C(e))),w.value=!1,h=!1,d.value=0},O=e=>{v.value=m(e),v.value&&(v.value.focus(),w.value=!0,v.value.contains(e.target)?(h=!0,d.value=we(e,v.value,t.direction)):(d.value=0,p(C(e))))},_={passive:!0,capture:!0};function x(e){h=!0,p(C(e))}function r(e){e.stopPropagation(),e.preventDefault(),i(e),window.removeEventListener("mousemove",x,_),window.removeEventListener("mouseup",r)}function s(e){var o;i(e),window.removeEventListener("touchmove",x,_),(o=e.target)==null||o.removeEventListener("touchend",s)}function R(e){var o;O(e),window.addEventListener("touchmove",x,_),(o=e.target)==null||o.addEventListener("touchend",s,{passive:!1})}function q(e){e.preventDefault(),O(e),window.addEventListener("mousemove",x,_),window.addEventListener("mouseup",r,{passive:!1})}const k=e=>{const o=(e-n.value)/(b.value-n.value)*100;return G(isNaN(o)?0:o,0,100)},j=a(()=>t.ticks?Array.isArray(t.ticks)?t.ticks.map(e=>({value:e,position:k(e),label:e.toString()})):Object.keys(t.ticks).map(e=>({value:parseFloat(e),position:k(parseFloat(e)),label:t.ticks[e]})):T.value!==1/0?ce(T.value+1).map(e=>{const o=n.value+e*u.value;return{value:o,position:k(o)}}):[]),X=a(()=>j.value.some(e=>{let{label:o}=e;return!!o})),W={activeThumbRef:v,color:V(t,"color"),decimals:L,disabled:K,direction:V(t,"direction"),elevation:V(t,"elevation"),hasLabels:X,horizontalDirection:F,isReversed:g,min:n,max:b,mousePressed:w,numTicks:T,onSliderMousedown:q,onSliderTouchstart:R,parsedTicks:j,parseMouseMove:C,position:k,readonly:V(t,"readonly"),rounded:V(t,"rounded"),roundValue:z,showTicks:V(t,"showTicks"),startOffset:d,step:u,thumbSize:B,thumbColor:D,thumbLabel:V(t,"thumbLabel"),ticks:V(t,"ticks"),tickSize:S,trackColor:P,trackContainerRef:M,trackFillColor:A,trackSize:$,vertical:I};return de(J,W),W},Fe=ee({name:"VSliderThumb",directives:{Ripple:ye},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0}},emits:{"update:modelValue":l=>!0},setup(l,t){let{slots:f,emit:p}=t;const m=te(J);if(!m)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:y,step:g,vertical:F,disabled:n,thumbSize:b,thumbLabel:u,direction:L,readonly:B,elevation:S,isReversed:$,horizontalDirection:T,mousePressed:K,decimals:I}=m,{textColorClasses:D,textColorStyles:P}=ve(y),{pageup:A,pagedown:w,end:d,home:M,left:v,right:z,down:C,up:h}=be,i=[A,w,d,M,v,z,C,h],O=a(()=>g.value?[1,2,3]:[1,5,10]);function _(r,s){if(!i.includes(r.key))return;r.preventDefault();const R=g.value||.1,q=(l.max-l.min)/R;if([v,z,C,h].includes(r.key)){const j=($.value?[v,h]:[z,h]).includes(r.key)?1:-1,X=r.shiftKey?2:r.ctrlKey?1:0;s=s+j*R*O.value[X]}else if(r.key===M)s=l.min;else if(r.key===d)s=l.max;else{const k=r.key===w?1:-1;s=s-k*R*(q>100?q/10:10)}return Math.max(l.min,Math.min(l.max,s))}function x(r){const s=_(r,l.modelValue);s!=null&&p("update:modelValue",s)}return le(()=>{var r;const s=E(F.value?100-l.position:l.position,"%"),R=F.value?"block":"inline",{elevationClasses:q}=ge(a(()=>n.value?void 0:S.value));return c("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":l.focused,"v-slider-thumb--pressed":l.focused&&K.value}],style:{[`inset-${R}-start`]:`calc(${s} - var(--v-slider-thumb-size) / 2)`,"--v-slider-thumb-size":E(b.value),direction:F.value?void 0:T.value},role:"slider",tabindex:n.value?-1:0,"aria-valuemin":l.min,"aria-valuemax":l.max,"aria-valuenow":l.modelValue,"aria-readonly":B.value,"aria-orientation":L.value,onKeydown:B.value?void 0:x},[c("div",{class:["v-slider-thumb__surface",D.value,q.value],style:{...P.value}},null),Q(c("div",{class:["v-slider-thumb__ripple",D.value],style:P.value},null),[[me("ripple"),!0,null,{circle:!0,center:!0}]]),c(he,{origin:"bottom center"},{default:()=>{var k;return[Q(c("div",{class:"v-slider-thumb__label-container"},[c("div",{class:["v-slider-thumb__label"]},[c("div",null,[(k=(r=f["thumb-label"])==null?void 0:r.call(f,{modelValue:l.modelValue}))!=null?k:l.modelValue.toFixed(g.value?I.value:1)])])]),[[fe,u.value&&l.focused||u.value==="always"]])]}})])}),{}}});const Le=ee({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0}},emits:{},setup(l,t){let{slots:f}=t;const p=te(J);if(!p)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:m,horizontalDirection:y,parsedTicks:g,rounded:F,showTicks:n,tickSize:b,trackColor:u,trackFillColor:L,trackSize:B,vertical:S,min:$,max:T}=p,{roundedClasses:K}=Se(F),{backgroundColorClasses:I,backgroundColorStyles:D}=Z(L),{backgroundColorClasses:P,backgroundColorStyles:A}=Z(u),w=a(()=>`inset-${S.value?"block-end":"inline-start"}`),d=a(()=>S.value?"height":"width"),M=a(()=>({[w.value]:"0%",[d.value]:"100%"})),v=a(()=>l.stop-l.start),z=a(()=>({[w.value]:E(l.start,"%"),[d.value]:E(v.value,"%")})),C=a(()=>(S.value?g.value.slice().reverse():g.value).map((i,O)=>{var s;var _;const x=S.value?"bottom":"margin-inline-start",r=i.value!==$.value&&i.value!==T.value?E(i.position,"%"):void 0;return c("div",{key:i.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":i.position>=l.start&&i.position<=l.stop,"v-slider-track__tick--first":i.value===$.value,"v-slider-track__tick--last":i.value===T.value}],style:{[x]:r}},[(i.label||f["tick-label"])&&c("div",{class:"v-slider-track__tick-label"},[(s=(_=f["tick-label"])==null?void 0:_.call(f,{tick:i,index:O}))!=null?s:i.label])])}));return le(()=>c("div",{class:["v-slider-track",K.value],style:{"--v-slider-track-size":E(B.value),"--v-slider-tick-size":E(b.value),direction:S.value?void 0:y.value}},[c("div",{class:["v-slider-track__background",P.value,{"v-slider-track__background--opacity":!!m.value||!L.value}],style:{...M.value,...A.value}},null),c("div",{class:["v-slider-track__fill",I.value],style:{...z.value,...D.value}},null),n.value&&c("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":n.value==="always"}]},[C.value])])),{}}});export{Le as V,Fe as a,we as g,ze as m,xe as u};