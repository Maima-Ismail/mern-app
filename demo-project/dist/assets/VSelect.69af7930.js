import{m as A,u as E,V as U,a as g}from"./VList.115d9393.js";import{m as L}from"./VImg.9952cb03.js";import{f as M}from"./forwardRefs.c003b6b8.js";import{a7 as j,as as K,ak as z,aC as H,k as B,ae as D,B as I,a6 as q,p as s,F as G,O as k,E as J,ah as Q}from"./index.30a9a44b.js";import{a as R,V as W}from"./VMenu.54c59b67.js";import{V as X}from"./VCheckboxBtn.4e339412.js";import{V as Y}from"./router.dfe3e1e7.js";import{V as Z}from"./VChip.45813b53.js";import{V as ee}from"./VTextField.b21e8a14.js";const le=j({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:K,default:"$dropdown"},menuProps:{type:Object},modelValue:null,multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,readonly:Boolean,...A({itemChildren:!1})},"select"),de=z()({name:"VSelect",props:{...le(),...L({transition:{component:R}})},emits:{"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,w){let{slots:t}=w;const{t:x}=H(),h=B(),r=D(l,"menu"),{items:f,transformIn:P,transformOut:T}=E(l),u=D(l,"modelValue",[],e=>P(Q(e)),e=>{var o;const a=T(e);return l.multiple?a:(o=a[0])!=null?o:null}),C=I(()=>u.value.map(e=>f.value.find(a=>a.value===e.value)||e)),y=I(()=>C.value.map(e=>e.props.value)),c=B();function S(e){u.value=[],l.openOnClear&&(r.value=!0)}function _(){l.hideNoData&&!f.value.length||l.readonly||(r.value=!r.value)}function O(e){if(!l.readonly){if(["Enter","ArrowDown"," "].includes(e.key)&&(r.value=!0),["Escape","Tab"].includes(e.key)&&(r.value=!1),e.key==="ArrowDown"){var a;(a=c.value)==null||a.focus("next")}else if(e.key==="ArrowUp"){var o;(o=c.value)==null||o.focus("prev")}else if(e.key==="Home"){var d;(d=c.value)==null||d.focus("first")}else if(e.key==="End"){var n;(n=c.value)==null||n.focus("last")}}}function p(e){if(l.multiple){const a=y.value.findIndex(o=>o===e.value);if(a===-1)u.value=[...u.value,e];else{const o=[...u.value];o.splice(a,1),u.value=o}}else u.value=[e],r.value=!1}function b(e){var a;(a=c.value)!=null&&a.$el.contains(e.relatedTarget)||(r.value=!1)}function F(e){if(e.relatedTarget==null){var a;(a=h.value)==null||a.focus()}}return q(()=>{const e=!!(l.chips||t.chip);return s(ee,{ref:h,modelValue:u.value.map(a=>a.props.value).join(", "),"onUpdate:modelValue":a=>{a==null&&(u.value=[])},validationValue:u.externalValue,dirty:u.value.length>0,class:["v-select",{"v-select--active-menu":r.value,"v-select--chips":!!l.chips,[`v-select--${l.multiple?"multiple":"single"}`]:!0,"v-select--selected":u.value.length}],appendInnerIcon:l.menuIcon,readonly:!0,"onClick:clear":S,"onClick:control":_,onBlur:b,onKeydown:O},{...t,default:()=>{var a,o,d;return s(G,null,[s(W,k({modelValue:r.value,"onUpdate:modelValue":n=>r.value=n,activator:"parent",contentClass:"v-select__content",eager:l.eager,openOnClick:!1,closeOnContentClick:!1,transition:l.transition},l.menuProps),{default:()=>[s(U,{ref:c,selected:y.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),onFocusout:F},{default:()=>{var n;return[!f.value.length&&!l.hideNoData&&((n=(a=t["no-data"])==null?void 0:a.call(t))!=null?n:s(g,{title:x(l.noDataText)},null)),(o=t["prepend-item"])==null?void 0:o.call(t),f.value.map((i,V)=>{var m;var v;return(m=(v=t.item)==null?void 0:v.call(t,{item:i,index:V,props:k(i.props,{onClick:()=>p(i)})}))!=null?m:s(g,k({key:V},i.props,{onClick:()=>p(i)}),{prepend:N=>{let{isSelected:$}=N;return l.multiple&&!l.hideSelected?s(X,{modelValue:$,ripple:!1},null):void 0}})}),(d=t["append-item"])==null?void 0:d.call(t)]}})]}),C.value.map((n,i)=>{function V(m){m.stopPropagation(),m.preventDefault(),p(n)}const v={"onClick:close":V,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:n.value,class:"v-select__selection"},[e?s(Y,{defaults:{VChip:{closable:l.closableChips,size:"small",text:n.title}}},{default:()=>[t.chip?t.chip({item:n,index:i,props:v}):s(Z,v,null)]}):t.selection?t.selection({item:n,index:i}):s("span",{class:"v-select__selection-text"},[n.title,l.multiple&&i<C.value.length-1&&s("span",{class:"v-select__selection-comma"},[J(",")])])])})])}})}),M({menu:r,select:p},h)}});export{de as V,le as m};
