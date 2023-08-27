import{a0 as K,ae as L,B as V,k as f,af as Q,Z as v,ac as W,a6 as X,ay as ee,p as a,O as P,F as I,H,at as te,bd as ae,ar as _,aY as ne,ap as le,b2 as oe}from"./index.30a9a44b.js";/* empty css                   */import{m as re,f as ue,V as ie}from"./VField.e328867b.js";import{m as se,u as ce,f as de,a as fe}from"./VInput.24975e5a.js";import{i as ve}from"./VImg.9952cb03.js";import{f as me}from"./forwardRefs.c003b6b8.js";import{V as xe}from"./VCounter.da854d3c.js";const we=K({name:"VTextarea",directives:{Intersect:ve},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...se(),...re()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,N){let{attrs:y,emit:$,slots:u}=N;const n=L(e,"modelValue"),{isFocused:c,focus:z,blur:T}=ce(e),A=V(()=>typeof e.counterValue=="function"?e.counterValue(n.value):(n.value||"").toString().length),D=V(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function G(t,l){var o,r;!e.autofocus||!t||(o=l[0].target)==null||(r=o.focus)==null||r.call(o)}const b=f(),m=f(),p=f(""),x=f(),R=V(()=>c.value||e.persistentPlaceholder),M=V(()=>e.messages.length?e.messages:R.value||e.persistentHint?e.hint:"");function C(){if(x.value!==document.activeElement){var t;(t=x.value)==null||t.focus()}c.value||z()}function U(t){C(),$("click:control",t)}function E(t){t.stopPropagation(),C(),_(()=>{n.value="",ne(e["onClick:clear"],t)})}function O(t){n.value=t.target.value}const i=f();function s(){!e.autoGrow||_(()=>{if(!i.value||!m.value)return;const t=getComputedStyle(i.value),l=getComputedStyle(m.value.$el),o=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),r=i.value.scrollHeight,F=parseFloat(t.lineHeight),k=Math.max(parseFloat(e.rows)*F+o,parseFloat(l.getPropertyValue("--v-input-control-height"))),w=parseFloat(e.maxRows)*F+o||1/0;p.value=le(oe(r!=null?r:0,k,w))})}Q(s),v(n,s),v(()=>e.rows,s),v(()=>e.maxRows,s),v(()=>e.density,s);let g;return v(i,t=>{if(t)g=new ResizeObserver(s),g.observe(i.value);else{var l;(l=g)==null||l.disconnect()}}),W(()=>{var t;(t=g)==null||t.disconnect()}),X(()=>{const t=!!(u.counter||e.counter||e.counterValue),l=!!(t||u.details),[o,r]=ee(y),[{modelValue:F,...k}]=de(e),[w]=ue(e);return a(fe,P({ref:b,modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},o,k,{focused:c.value,messages:M.value}),{...u,default:d=>{let{isDisabled:h,isDirty:S,isReadonly:Y,isValid:Z}=d;return a(ie,P({ref:m,style:{"--v-textarea-control-height":p.value},"onClick:control":U,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},w,{active:R.value||S.value,dirty:S.value||e.dirty,focused:c.value,error:Z.value===!1}),{...u,default:j=>{let{props:{class:B,...q}}=j;return a(I,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),H(a("textarea",P({ref:x,class:B,value:n.value,onInput:O,autofocus:e.autofocus,readonly:Y.value,disabled:h.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:T},q,r),null),[[te("intersect"),{handler:G},null,{once:!0}]]),e.autoGrow&&H(a("textarea",{class:[B,"v-textarea__sizer"],"onUpdate:modelValue":J=>n.value=J,ref:i,readonly:!0,"aria-hidden":"true"},null),[[ae,n.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?d=>{var h;return a(I,null,[(h=u.details)==null?void 0:h.call(u,d),t&&a(I,null,[a("span",null,null),a(xe,{active:e.persistentCounter||c.value,value:A.value,max:D.value},u.counter)])])}:void 0})}),me({},b,m,x)}});export{we as V};
