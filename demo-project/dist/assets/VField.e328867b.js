import{a0 as Z,a6 as x,p as l,a7 as q,as as C,aD as k,a2 as z,ak as G,a3 as J,B as v,a9 as K,k as I,aw as Q,a5 as Y,an as ee,Z as le,ap as ae,H as ne,I as te,F as ie,O as oe,aE as se,aF as re}from"./index.30a9a44b.js";import{c as de}from"./index.6a573a18.js";import{V as ce,b as ue,u as ve,c as fe}from"./VInput.24975e5a.js";import{m as ge,b as me,L as be}from"./position.8ec4a68a.js";import{n as pe,a as ye,s as _e}from"./easing.36b781ab.js";const y=Z({name:"VFieldLabel",props:{floating:Boolean},setup(e,c){let{slots:u}=c;return x(()=>l(ce,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},u)),{}}}),he=["underlined","outlined","filled","solo","plain"],Ce=q({appendInnerIcon:C,bgColor:String,clearable:Boolean,clearIcon:{type:C,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:C,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>he.includes(e)},"onClick:clear":k,"onClick:appendInner":k,"onClick:prependInner":k,...z(),...ge()},"v-field"),ke=G()({name:"VField",inheritAttrs:!1,props:{id:String,...ue(),...Ce()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{attrs:u,emit:w,slots:a}=c;const{themeClasses:R}=J(e),{loaderClasses:E}=me(e),{focusClasses:T,isFocused:F,focus:V,blur:P}=ve(e),{InputIcon:_}=fe(e),f=v(()=>e.dirty||e.active),g=v(()=>!e.singleLine&&!!(e.label||a.label)),D=K(),r=v(()=>e.id||`input-${D}`),B=I(),m=I(),L=I(),{backgroundColorClasses:O,backgroundColorStyles:A}=Q(Y(e,"bgColor")),{textColorClasses:S,textColorStyles:U}=ee(v(()=>f.value&&F.value&&!e.error&&!e.disabled?e.color:void 0));le(f,n=>{if(g.value){const t=B.value.$el,o=m.value.$el,d=pe(t),s=o.getBoundingClientRect(),b=s.x-d.x,p=s.y-d.y-(d.height/2-s.height/2),i=s.width/.75,j=Math.abs(i-d.width)>1?{maxWidth:ae(i)}:void 0,H=getComputedStyle(t),$=getComputedStyle(o),M=parseFloat(H.transitionDuration)*1e3||150,N=parseFloat($.getPropertyValue("--v-field-label-scale")),X=$.getPropertyValue("color");t.style.visibility="visible",o.style.visibility="hidden",ye(t,{transform:`translate(${b}px, ${p}px) scale(${N})`,color:X,...j},{duration:M,easing:_e,direction:n?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),o.style.removeProperty("visibility")})}},{flush:"post"});const h=v(()=>({isActive:f,isFocused:F,controlRef:L,blur:P,focus:V}));function W(n){n.target!==document.activeElement&&n.preventDefault(),w("click:control",n)}return x(()=>{var n,t,o;const d=e.variant==="outlined",s=a["prepend-inner"]||e.prependInnerIcon,b=!!(e.clearable||a.clear),p=!!(a["append-inner"]||e.appendInnerIcon||b),i=a.label?a.label({label:e.label,props:{for:r.value}}):e.label;return l("div",oe({class:["v-field",{"v-field--active":f.value,"v-field--appended":p,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":s,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!i,[`v-field--variant-${e.variant}`]:!0},R.value,O.value,T.value,E.value],style:[A.value,U.value],onClick:W},u),[l("div",{class:"v-field__overlay"},null),l(be,{name:"v-field",active:e.loading,color:e.error?"error":e.color},{default:a.loader}),s&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(_,{key:"prepend-icon",name:"prependInner"},null),(n=a["prepend-inner"])==null?void 0:n.call(a,h.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&g.value&&l(y,{key:"floating-label",ref:m,class:[S.value],floating:!0,for:r.value},{default:()=>[i]}),l(y,{ref:B,for:r.value},{default:()=>[i]}),(t=a.default)==null?void 0:t.call(a,{...h.value,props:{id:r.value,class:"v-field__input"},focus:V,blur:P})]),b&&l(de,{key:"clear"},{default:()=>[ne(l("div",{class:"v-field__clearable"},[a.clear?a.clear():l(_,{name:"clear"},null)]),[[te,e.dirty]])]}),p&&l("div",{key:"append",class:"v-field__append-inner"},[(o=a["append-inner"])==null?void 0:o.call(a,h.value),e.appendInnerIcon&&l(_,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",S.value]},[d&&l(ie,null,[l("div",{class:"v-field__outline__start"},null),g.value&&l("div",{class:"v-field__outline__notch"},[l(y,{ref:m,floating:!0,for:r.value},{default:()=>[i]})]),l("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&g.value&&l(y,{ref:m,floating:!0,for:r.value},{default:()=>[i]})])])}),{controlRef:L}}});function Le(e){const c=Object.keys(ke.props).filter(u=>!se(u));return re(e,c)}export{ke as V,Le as f,Ce as m};
