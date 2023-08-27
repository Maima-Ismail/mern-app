import{m as te}from"./VSelect.69af7930.js";import{m as ae,u as ne}from"./filter.d7d7e3e2.js";import{m as ue}from"./VImg.9952cb03.js";import{u as oe,t as A,V as ie,a as B}from"./VList.115d9393.js";import{f as se}from"./forwardRefs.c003b6b8.js";import{ak as re,aC as ce,k as C,ae as M,B as x,an as ve,ah as me,Z as P,ar as U,a6 as fe,p as o,F as K,O as $,E as de}from"./index.30a9a44b.js";import{V as be}from"./VMenu.54c59b67.js";import{V as he}from"./VCheckboxBtn.4e339412.js";import{V as pe}from"./router.dfe3e1e7.js";import{V as ke}from"./VChip.45813b53.js";import{V as Ve}from"./VTextField.b21e8a14.js";function ge(l,d,y){if(Array.isArray(d))throw new Error("Multiple matches is not implemented");return typeof d=="number"&&~d?o(K,null,[o("span",{class:"v-combobox__unmask"},[l.substr(0,d)]),o("span",{class:"v-combobox__mask"},[l.substr(d,y)]),o("span",{class:"v-combobox__unmask"},[l.substr(d+y)])]):l}const Se=re()({name:"VCombobox",props:{delimiters:Array,...ae({filterKeys:["title"]}),...te({hideNoData:!0,returnObject:!0}),...ue({transition:!1})},emits:{"update:modelValue":l=>!0,"update:search":l=>!0,"update:menu":l=>!0},setup(l,d){var N;var y;let{emit:j,slots:s}=d;const{t:z}=ce(),b=C(),h=C(!1),p=C(!0),v=M(l,"menu"),a=C(-1),Z=x(()=>{var e;return(e=b.value)==null?void 0:e.color}),{items:E,transformIn:q,transformOut:G}=oe(l),{textColorClasses:H,textColorStyles:J}=ve(Z),i=M(l,"modelValue",[],e=>q(me(e||[])),e=>{var n;const t=G(e);return l.multiple?t:(n=t[0])!=null?n:null}),V=C(l.multiple?"":(N=(y=i.value[0])==null?void 0:y.title)!=null?N:""),r=x({get:()=>V.value,set:e=>{var t;if(V.value=e,l.multiple||(i.value=[A(l,e)]),e&&l.multiple&&(t=l.delimiters)!=null&&t.length){const n=e.split(new RegExp(`(?:${l.delimiters.join("|")})+`));n.length>1&&(n.forEach(m=>{m=m.trim(),m&&k(A(l,m))}),V.value="")}e||(a.value=-1),h.value&&(v.value=!0),p.value=!e}});P(V,e=>{j("update:search",e)}),P(i,e=>{var n;if(!l.multiple){var t;V.value=(n=(t=e[0])==null?void 0:t.title)!=null?n:""}});const{filteredItems:w}=ne(l,E,x(()=>p.value?void 0:r.value)),g=x(()=>i.value.map(e=>E.value.find(t=>t.value===e.value)||e)),S=x(()=>g.value.map(e=>e.props.value)),R=x(()=>g.value[a.value]),T=C();function Q(e){i.value=[],l.openOnClear&&(v.value=!0)}function L(){l.hideNoData&&!E.value.length||l.readonly||(v.value=!0)}function W(e){if(l.readonly)return;const t=b.value.selectionStart,n=S.value.length;if(a.value>-1&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(v.value=!0),["Escape"].includes(e.key)&&(v.value=!1),["Enter","Escape","Tab"].includes(e.key)&&(p.value=!0),e.key==="ArrowDown"){var m;(m=T.value)==null||m.focus("next")}else if(e.key==="ArrowUp"){var u;(u=T.value)==null||u.focus("prev")}if(!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(a.value<0){e.key==="Backspace"&&!r.value&&(a.value=n-1);return}k(R.value),U(()=>!R.value&&(a.value=n-2))}if(e.key==="ArrowLeft"){if(a.value<0&&t>0)return;const c=a.value>-1?a.value-1:n-1;g.value[c]?a.value=c:(a.value=-1,b.value.setSelectionRange(r.value.length,r.value.length))}if(e.key==="ArrowRight"){if(a.value<0)return;const c=a.value+1;g.value[c]?a.value=c:(a.value=-1,b.value.setSelectionRange(0,0))}e.key==="Enter"&&(k(A(l,r.value)),r.value="")}}function X(){h.value&&(p.value=!0)}function k(e){if(l.multiple){const t=S.value.findIndex(n=>n===e.value);if(t===-1)i.value=[...i.value,e];else{const n=[...i.value];n.splice(t,1),i.value=n}r.value=""}else i.value=[e],V.value=e.title,U(()=>{v.value=!1,p.value=!0})}function Y(e){h.value=!0}function ee(e){if(e.relatedTarget==null){var t;(t=b.value)==null||t.focus()}}return P(w,e=>{!e.length&&l.hideNoData&&(v.value=!1)}),P(h,e=>{if(e)a.value=-1;else{if(v.value=!1,!l.multiple||!r.value)return;i.value=[...i.value,A(l,r.value)],r.value=""}}),fe(()=>{const e=!!(l.chips||s.chip);return o(Ve,{ref:b,modelValue:r.value,"onUpdate:modelValue":[t=>r.value=t,t=>{t==null&&(i.value=[])}],validationValue:i.externalValue,dirty:i.value.length>0,class:["v-combobox",{"v-combobox--active-menu":v.value,"v-combobox--chips":!!l.chips,"v-combobox--selecting-index":a.value>-1,[`v-combobox--${l.multiple?"multiple":"single"}`]:!0}],appendInnerIcon:l.items.length?l.menuIcon:void 0,readonly:l.readonly,"onClick:clear":Q,"onClick:control":L,"onClick:input":L,onFocus:()=>h.value=!0,onBlur:()=>h.value=!1,onKeydown:W},{...s,default:()=>{var t,n,m;return o(K,null,[o(be,$({modelValue:v.value,"onUpdate:modelValue":u=>v.value=u,activator:"parent",contentClass:"v-combobox__content",eager:l.eager,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:X},l.menuProps),{default:()=>[o(ie,{ref:T,selected:S.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onFocusin:Y,onFocusout:ee},{default:()=>{var u;return[!w.value.length&&!l.hideNoData&&((u=(t=s["no-data"])==null?void 0:t.call(s))!=null?u:o(B,{title:z(l.noDataText)},null)),(n=s["prepend-item"])==null?void 0:n.call(s),w.value.map((c,D)=>{var O;var _;let{item:f,matches:le}=c;return(O=(_=s.item)==null?void 0:_.call(s,{item:f,index:D,props:$(f.props,{onClick:()=>k(f)})}))!=null?O:o(B,$({key:D},f.props,{onClick:()=>k(f)}),{prepend:I=>{let{isSelected:F}=I;return l.multiple&&!l.hideSelected?o(he,{modelValue:F,ripple:!1},null):void 0},title:()=>{var F;var I;return p.value?f.title:ge(f.title,le.title,(F=(I=r.value)==null?void 0:I.length)!=null?F:0)}})}),(m=s["append-item"])==null?void 0:m.call(s)]}})]}),g.value.map((u,c)=>{function D(f){f.stopPropagation(),f.preventDefault(),k(u)}const _={"onClick:close":D,modelValue:!0,"onUpdate:modelValue":void 0};return o("div",{key:u.value,class:["v-combobox__selection",c===a.value&&["v-combobox__selection--selected",H.value]],style:c===a.value?J.value:{}},[e?o(pe,{defaults:{VChip:{closable:l.closableChips,size:"small",text:u.title}}},{default:()=>[s.chip?s.chip({item:u,index:c,props:_}):o(ke,_,null)]}):s.selection?s.selection({item:u,index:c}):o("span",{class:"v-combobox__selection-text"},[u.title,l.multiple&&c<g.value.length-1&&o("span",{class:"v-combobox__selection-comma"},[de(",")])])])})])}})}),se({isFocused:h,isPristine:p,menu:v,search:r,selectionIndex:a,filteredItems:w,select:k},b)}});export{Se as V};
