import{aK as m,k as v,Z as f,a0 as i,ba as y,bb as p,a6 as c,p as u,a1 as b,bc as V}from"./index.30a9a44b.js";import{u as L}from"./ssrBoot.e500bf54.js";const k=(e=void 0)=>{const{mdAndDown:l,name:a}=m(),t=e||l,s=v(!0);return(()=>{s.value=!t.value})(),f(a,()=>{s.value=!t.value}),{isLeftSidebarOpen:s}};const B=i({name:"VLayout",props:y(),setup(e,l){let{slots:a}=l;const{layoutClasses:t,layoutStyles:s,getLayoutItem:o,items:n,layoutRef:d}=p(e);return c(()=>{var r;return u("div",{ref:d,class:t.value,style:s.value},[(r=a.default)==null?void 0:r.call(a)])}),{getLayoutItem:o,items:n}}});const $=i({name:"VMain",props:{scrollable:Boolean,...b({tag:"main"})},setup(e,l){let{slots:a}=l;const{mainStyles:t}=V(),{ssrBootStyles:s}=L();return c(()=>{var o,n;return u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,s.value]},{default:()=>[e.scrollable?u("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(n=a.default)==null?void 0:n.call(a)]})}),{}}});export{$ as V,B as a,k as u};