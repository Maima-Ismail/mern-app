import{c as Q,i as K,n as ee,h as te,a as ae,b as se,s as le}from"./sony-dualsense.2d3b4d27.js";import{V as W,a as b}from"./VRow.2532b873.js";import{c as k,V as I}from"./VCard.7c5bdd1f.js";import{V as C}from"./VBtn.b063c464.js";import{V as oe}from"./VImg.9952cb03.js";import{o as i,b as $,w as t,p as e,E as _,q as d,m as a,A as L,B,bm as z,y as f,c as g,F as x,a as w,x as n,k as T,aq as J,r as re,D as A,O as ne,H as ie,I as ce,z as de,s as F,L as ue}from"./index.30a9a44b.js";import{V as O}from"./vue3-apexcharts.common.5e11732e.js";import{V as N}from"./VMenu.54c59b67.js";import{V as P,a as S,b as E,c as H}from"./VList.115d9393.js";import{V as R}from"./VAvatar.aeee1a67.js";import{u as pe}from"./useInvoiceStore.92fa1e0d.js";import{V as X}from"./VSelect.69af7930.js";import{V as me}from"./VSpacer.9a581b23.js";import{V as fe}from"./VTextField.b21e8a14.js";import{V as M}from"./VDivider.a03abf93.js";import{V as he}from"./VTable.16ab84bb.js";import{V as _e}from"./VTooltip.158a91c2.js";import{V as be}from"./VPagination.e9ddd07f.js";import{V as ve,a as ge}from"./VTabs.c7419d4d.js";import{V as ye,a as xe}from"./VWindowItem.a3931882.js";import{V as Y,a as Z}from"./VTimelineItem.f8375e23.js";import"./router.dfe3e1e7.js";import"./position.8ec4a68a.js";import"./vue.runtime.esm-bundler.151991b7.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.a99c0c73.js";import"./VOverlay.998081e8.js";import"./lazy.fa0d234d.js";import"./easing.36b781ab.js";import"./index.6a573a18.js";import"./VCheckboxBtn.4e339412.js";import"./VSelectionControl.b8a27f61.js";import"./VInput.24975e5a.js";import"./VChip.45813b53.js";/* empty css                   */import"./VField.e328867b.js";import"./VCounter.da854d3c.js";import"./VSlideGroup.ab06073a.js";import"./ssrBoot.e500bf54.js";const we=a("h6",{class:"text-lg text-no-wrap font-weight-semibold"}," Congratulations John! \u{1F389} ",-1),$e=a("p",{class:"mb-2"}," Best seller of the month ",-1),ke=a("h5",{class:"text-h5 font-weight-semibold text-primary mb-2"}," $48.9k ",-1),Ve={__name:"EcommerceCongratulationsJohn",setup(V){return(r,u)=>(i(),$(I,null,{default:t(()=>[e(W,{"no-gutters":""},{default:t(()=>[e(b,{cols:"8"},{default:t(()=>[e(k,null,{default:t(()=>[we,$e,ke,e(C,null,{default:t(()=>[_("View Sales")]),_:1})]),_:1})]),_:1}),e(b,{cols:"4"},{default:t(()=>[e(k,{class:"pb-0 px-0 position-relative h-100"},{default:t(()=>[e(oe,{src:d(Q),height:"140",class:"w-100 position-absolute",style:{bottom:"0"}},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1}))}},Ce={class:"mt-n4 me-n2"},Se={class:"d-flex align-center text-body-2"},Ee={class:"me-1"},Ie={class:"text-disabled"},ze={__name:"EcommerceEarningReports",setup(V){const r=L(),u=[{data:[40,95,60,45,90,50,75]}],h=B(()=>{const l=r.current.value.colors,o=r.current.value.variables,m=`rgba(${z(l["on-background"])},${o["disabled-opacity"]})`,c=`rgba(${z(l.primary)},0.1)`;return{chart:{type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},plotOptions:{bar:{barHeight:"60%",columnWidth:"60%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-20,bottom:0,left:-10,right:-10}},colors:[c,c,c,c,l.primary,c,c],dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:m,fontSize:"14px"}}},yaxis:{labels:{show:!1}}}}),s=[{avatarIcon:"tabler-chart-pie-2",avatarColor:"primary",title:"Net Profit",subtitle:"12.4k Sales",earnings:"$1,619",percentage:"18.6%"},{avatarIcon:"tabler-currency-dollar",avatarColor:"success",title:"Total Income",subtitle:"Sales, Affiliation",earnings:"$3,571",percentage:"39.6%"},{avatarIcon:"tabler-credit-card",avatarColor:"secondary",title:"Total Expenses",subtitle:"ADVT, Marketing",earnings:"$430",percentage:"52.8%"}];return(l,o)=>(i(),$(I,{title:"Earning Reports",subtitle:"Weekly Earnings Overview"},{append:t(()=>[a("div",Ce,[e(C,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:t(()=>[e(f,{size:"22",icon:"tabler-dots-vertical"}),e(N,{activator:"parent"},{default:t(()=>[e(P,null,{default:t(()=>[(i(),g(x,null,w(["Refresh","Download","View All"],(m,c)=>e(S,{key:c,value:c},{default:t(()=>[e(E,null,{default:t(()=>[_(n(m),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(k,{class:"pb-0"},{default:t(()=>[e(P,{class:"card-list mb-3"},{default:t(()=>[(i(),g(x,null,w(s,m=>e(S,{key:m.title},{prepend:t(()=>[e(R,{rounded:"",size:"34",variant:"tonal",color:m.avatarColor},{default:t(()=>[e(f,{icon:m.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[a("div",Se,[a("span",Ee,n(m.earnings),1),e(f,{color:"success",icon:"tabler-chevron-up",size:"18",class:"me-1"}),a("span",Ie,n(m.percentage),1)])]),default:t(()=>[e(E,{class:"font-weight-medium"},{default:t(()=>[_(n(m.title),1)]),_:2},1024),e(H,null,{default:t(()=>[_(n(m.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(d(O),{options:d(h),series:u,height:245},null,8,["options"])]),_:1})]),_:1}))}},Te=a("div",null,[a("h6",{class:"text-h6"}," 82.5k "),a("span",{class:"text-disabled text-sm"},"Expenses")],-1),Pe=a("div",{class:"text-sm text-center text-disabled mt-6"}," $21k Expenses more than last month ",-1),Re={__name:"EcommerceExpensesRadialBarCharts",setup(V){const r=L(),u=[78],h=B(()=>{const s=r.current.value.colors,l=r.current.value.variables;return{chart:{sparkline:{enabled:!0},parentHeightOffset:0,type:"radialBar"},colors:[s.warning],plotOptions:{radialBar:{offsetY:0,startAngle:-90,endAngle:90,hollow:{size:"65%"},track:{strokeWidth:"45%",background:`rgba(${z(String(l["border-color"]))},${l["border-opacity"]})`},dataLabels:{name:{show:!1},value:{fontSize:"22px",color:`rgba(${z(s["on-background"])},${l["high-emphasis-opacity"]})`,fontWeight:600,offsetY:-5}}}},grid:{show:!1,padding:{bottom:5}},stroke:{lineCap:"round"},labels:["Progress"],responsive:[{breakpoint:1442,options:{chart:{height:120},plotOptions:{radialBar:{dataLabels:{value:{fontSize:"18px"}},hollow:{size:"60%"}}}}},{breakpoint:1025,options:{chart:{height:136},plotOptions:{radialBar:{hollow:{size:"65%"},dataLabels:{value:{fontSize:"18px"}}}}}},{breakpoint:769,options:{chart:{height:120},plotOptions:{radialBar:{hollow:{size:"55%"}}}}},{breakpoint:426,options:{chart:{height:145},plotOptions:{radialBar:{hollow:{size:"65%"}}},dataLabels:{value:{offsetY:0}}}},{breakpoint:376,options:{chart:{height:105},plotOptions:{radialBar:{hollow:{size:"60%"}}}}}]}});return(s,l)=>(i(),$(I,null,{default:t(()=>[e(k,null,{default:t(()=>[Te,e(d(O),{options:d(h),series:u,type:"radialBar",height:145},null,8,["options"]),Pe]),_:1})]),_:1}))}},De={class:"d-flex flex-column"},Ae=a("div",{class:"mb-auto"},[a("h6",{class:"text-h6 text-no-wrap"}," Generated Leads "),a("span",{class:"text-sm"},"Monthly Report")],-1),Oe=a("h5",{class:"text-h5 mb-1"}," 4,350 ",-1),Be={class:"text-sm"},Ne=a("span",{class:"text-success font-weight-medium"},"15.8% ",-1),We={__name:"EcommerceGeneratedLeads",setup(V){const r=L(),u=[45,58,30,50],h=B(()=>{const s=r.current.value.colors,l=r.current.value.variables,o=`rgba(${z(s.success)},0.2)`,m=`rgba(${z(s["on-background"])},${l["high-emphasis-opacity"]})`,c={donut:{series1:s.success,series2:"#28c76fb3",series3:"#28c76f80",series4:o}};return{chart:{parentHeightOffset:0,type:"donut"},labels:["Electronic","Sports","Decor","Fashion"],colors:[c.donut.series1,c.donut.series2,c.donut.series3,c.donut.series4],stroke:{width:0},dataLabels:{enabled:!1,formatter(D){return`${parseInt(D)}%`}},legend:{show:!1},tooltip:{theme:!1},grid:{padding:{top:15,right:-20,left:-20}},states:{hover:{filter:{type:"none"}}},plotOptions:{pie:{donut:{size:"70%",labels:{show:!0,value:{fontSize:"1.375rem",fontFamily:"Public Sans",color:m,fontWeight:600,offsetY:-15,formatter(D){return`${parseInt(D)}%`}},name:{offsetY:20,fontFamily:"Public Sans"},total:{show:!0,showAlways:!0,color:s.success,fontSize:".8125rem",label:"Total",fontFamily:"Public Sans",formatter(){return"184"}}}}}}}});return(s,l)=>(i(),$(I,null,{default:t(()=>[e(k,{class:"d-flex justify-space-between"},{default:t(()=>[a("div",De,[Ae,a("div",null,[Oe,a("div",Be,[e(f,{icon:"tabler-chevron-up",size:"24",color:"success",class:"me-1"}),Ne])])]),a("div",null,[e(d(O),{options:d(h),series:u,height:147,width:130},null,8,["options"])])]),_:1})]),_:1}))}};const Le={style:{width:"5rem"}},Fe={class:"d-flex align-center flex-wrap gap-2"},Me={class:"invoice-list-search"},He={class:"invoice-list-status"},Ue=a("th",{scope:"col",class:"font-weight-semibold"}," ID ",-1),Je={scope:"col",class:"font-weight-semibold"},Xe=a("th",{scope:"col",class:"text-center font-weight-semibold"}," TOTAL ",-1),Ye=a("th",{scope:"col",class:"text-center font-weight-semibold"}," ISSUED DATE ",-1),Ze=a("th",{scope:"col",class:"font-weight-semibold"},[a("span",{class:"ms-2"},"ACTIONS")],-1),je={class:"mb-0"},qe={class:"mb-0"},Ge={class:"mb-0"},Qe={class:"text-center text-medium-emphasis"},Ke={class:"text-center text-medium-emphasis"},et={style:{width:"7.5rem"}},tt=a("tr",null,[a("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),at=[tt],st={class:"text-sm text-disabled"},lt={__name:"EcommerceInvoiceTable",setup(V){const r=pe(),u=T(""),h=T(),s=T(7),l=T(1),o=T(1),m=T(0),c=T([]),D=T([]);J(()=>{r.fetchInvoices({q:u.value,status:h.value,perPage:s.value,currentPage:l.value}).then(v=>{c.value=v.data.invoices,o.value=v.data.totalPage,m.value=v.data.totalInvoices}).catch(v=>{console.log(v)})}),J(()=>{l.value>o.value&&(l.value=o.value)});const j=B(()=>{const v=c.value.length?(l.value-1)*s.value+1:0,y=c.value.length+(l.value-1)*s.value;return`Showing ${v} to ${y} of ${m.value} entries`}),U=v=>v==="Partial Payment"?{variant:"success",icon:"tabler-circle-half-2"}:v==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:v==="Downloaded"?{variant:"info",icon:"tabler-arrow-down-circle"}:v==="Draft"?{variant:"primary",icon:"tabler-device-floppy"}:v==="Sent"?{variant:"secondary",icon:"tabler-circle-check"}:v==="Past Due"?{variant:"error",icon:"tabler-info-circle"}:{variant:"secondary",icon:"tabler-x"};return(v,y)=>{const q=re("RouterLink");return d(c)?(i(),$(I,{key:0,id:"invoice-list"},{default:t(()=>[e(k,{class:"d-flex align-center flex-wrap gap-2 py-4"},{default:t(()=>[a("div",Le,[e(X,{modelValue:d(s),"onUpdate:modelValue":y[0]||(y[0]=p=>A(s)?s.value=p:null),variant:"outlined",items:[7,10,20,30,50]},null,8,["modelValue"])]),e(C,{"prepend-icon":"tabler-plus",to:{name:"apps-invoice-add"}},{default:t(()=>[_(" Create invoice ")]),_:1}),e(me),a("div",Fe,[a("div",Me,[e(fe,{modelValue:d(u),"onUpdate:modelValue":y[1]||(y[1]=p=>A(u)?u.value=p:null),placeholder:"Search Invoice",density:"compact"},null,8,["modelValue"])]),a("div",He,[e(X,{modelValue:d(h),"onUpdate:modelValue":y[2]||(y[2]=p=>A(h)?h.value=p:null),label:"Select Status",clearable:"","clear-icon":"tabler-x",density:"compact",items:["Downloaded","Draft","Paid","Partial Payment","Past Due"]},null,8,["modelValue"])])])]),_:1}),e(M),e(he,{class:"text-no-wrap invoice-list-table"},{default:t(()=>[a("thead",null,[a("tr",null,[Ue,a("th",Je,[e(f,{icon:"tabler-trending-up"})]),Xe,Ye,Ze])]),a("tbody",null,[(i(!0),g(x,null,w(d(c),p=>(i(),g("tr",{key:p.id},[a("td",null,[e(q,{to:{name:"apps-invoice-preview-id",params:{id:p.id}}},{default:t(()=>[_(" #"+n(p.id),1)]),_:2},1032,["to"])]),a("td",null,[e(_e,null,{activator:t(({props:G})=>[e(R,ne({size:30},G,{color:U(p.invoiceStatus).variant,variant:"tonal"}),{default:t(()=>[e(f,{size:20,icon:U(p.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:t(()=>[a("p",je,n(p.invoiceStatus),1),a("p",qe," Balance: "+n(p.balance),1),a("p",Ge," Due date: "+n(p.dueDate),1)]),_:2},1024)]),a("td",Qe," $"+n(p.total),1),a("td",Ke,n(p.issuedDate),1),a("td",et,[e(C,{icon:"",variant:"plain",color:"default",size:"x-small"},{default:t(()=>[e(f,{icon:"tabler-mail",size:22})]),_:1}),e(C,{icon:"",variant:"plain",color:"default",size:"x-small",to:{name:"apps-invoice-preview-id",params:{id:p.id}}},{default:t(()=>[e(f,{size:22,icon:"tabler-eye"})]),_:2},1032,["to"]),e(C,{icon:"",variant:"plain",color:"default",size:"x-small"},{default:t(()=>[e(f,{size:22,icon:"tabler-dots-vertical"}),e(N,{activator:"parent"},{default:t(()=>[e(P,{density:"compact"},{default:t(()=>[e(S,{value:"Download"},{prepend:t(()=>[e(f,{size:"22",class:"me-3",icon:"tabler-download"})]),default:t(()=>[e(E,null,{default:t(()=>[_("Download")]),_:1})]),_:1}),e(S,{to:{name:"/apps/invoice/edit/[id]",params:{id:p.id}}},{prepend:t(()=>[e(f,{size:"22",class:"me-3",icon:"tabler-pencil"})]),default:t(()=>[e(E,null,{default:t(()=>[_("Edit")]),_:1})]),_:2},1032,["to"]),e(S,{value:"Duplicate"},{prepend:t(()=>[e(f,{size:"22",class:"me-3",icon:"tabler-stack"})]),default:t(()=>[e(E,null,{default:t(()=>[_("Duplicate")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),ie(a("tfoot",null,at,512),[[ce,!d(c).length]])]),_:1}),e(M),e(k,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:t(()=>[a("span",st,n(d(j)),1),e(be,{modelValue:d(l),"onUpdate:modelValue":y[3]||(y[3]=p=>A(l)?l.value=p:null),size:"small","total-visible":5,length:d(o),onNext:y[4]||(y[4]=p=>D.value=[]),onPrev:y[5]||(y[5]=p=>D.value=[])},null,8,["modelValue","length"])]),_:1})]),_:1})):de("",!0)}}},ot={class:"mt-n4 me-n2"},rt={class:"v-timeline-avatar-wrapper rounded-circle",style:{"background-color":"rgb(var(--v-theme-surface))"}},nt={class:"font-weight-medium text-high-emphasis mb-0"},it={class:"text-disabled mb-0"},ct={class:"v-timeline-avatar-wrapper rounded-circle",style:{"background-color":"rgb(var(--v-theme-surface))"}},dt={class:"font-weight-medium text-high-emphasis mb-0"},ut={class:"text-disabled mb-0"},pt={__name:"EcommerceOrder",setup(V){const r=T("New"),u=[{tabName:"New",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Myrtle Ullrich",address:"101 Boulder, California(CA), 95959"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]},{tabName:"Preparing",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Myrtle Ullrich",address:"101 Boulder, California(CA), 95959"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]},{tabName:"Shipping",timeline1:[{icon:"tabler-circle-check",type:"SENDER",name:"Veronica Herman",address:"101 Boulder, California(CA), 95959"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Barry Schowalter",address:"939 Orange, California(CA),92118"}],timeline2:[{icon:"tabler-circle-check",type:"SENDER",name:"Myrtle Ullrich",address:"162 Windsor, California(CA), 95492"},{icon:"tabler-map-pin",type:"RECEIVER",name:"Helen Jacobs",address:"487 Sunset, California(CA), 94043"}]}];return(h,s)=>(i(),$(I,{title:"Orders",subtitle:"62 Deliveries in Progress"},{append:t(()=>[a("div",ot,[e(C,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:t(()=>[e(f,{size:"22",icon:"tabler-dots-vertical"}),e(N,{activator:"parent"},{default:t(()=>[e(P,null,{default:t(()=>[(i(),g(x,null,w(["Refresh","Download","View All"],(l,o)=>e(S,{key:o,value:o},{default:t(()=>[e(E,null,{default:t(()=>[_(n(l),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(ve,{modelValue:d(r),"onUpdate:modelValue":s[0]||(s[0]=l=>A(r)?r.value=l:null),grow:""},{default:t(()=>[(i(),g(x,null,w(u,l=>e(ge,{key:l.tabName,value:l.tabName},{default:t(()=>[_(n(l.tabName),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(M),e(k,null,{default:t(()=>[e(ye,{modelValue:d(r),"onUpdate:modelValue":s[1]||(s[1]=l=>A(r)?r.value=l:null),class:"disable-tab-transition"},{default:t(()=>[(i(),g(x,null,w(u,l=>e(xe,{key:l.tabName,value:l.tabName},{default:t(()=>[e(Y,{side:"end",align:"start","truncate-line":"both",density:"compact",class:"v-timeline-density-compact"},{default:t(()=>[(i(!0),g(x,null,w(l.timeline1,o=>(i(),$(Z,{key:o.icon,"fill-dot":"",size:"x-small"},{icon:t(()=>[a("div",rt,[e(R,null,{default:t(()=>[e(f,{size:"22",icon:o.icon,color:o.type==="SENDER"?"success":"primary"},null,8,["icon","color"])]),_:2},1024)])]),default:t(()=>[a("p",{class:F(`text-sm font-weight-medium text-${o.type==="SENDER"?"success":"primary"} mb-0`)},n(o.type),3),a("p",nt,n(o.name),1),a("p",it,n(o.address),1)]),_:2},1024))),128))]),_:2},1024),e(M,{class:"my-3",style:{"border-style":"dashed"}}),e(Y,{side:"end",align:"start","truncate-line":"both",density:"compact",class:"v-timeline-density-compact"},{default:t(()=>[(i(!0),g(x,null,w(l.timeline2,o=>(i(),$(Z,{key:o.icon,"fill-dot":"",size:"x-small"},{icon:t(()=>[a("div",ct,[e(R,null,{default:t(()=>[e(f,{size:"22",icon:o.icon,color:o.type==="SENDER"?"success":"primary"},null,8,["icon","color"])]),_:2},1024)])]),default:t(()=>[a("p",{class:F(`text-sm font-weight-medium text-${o.type==="SENDER"?"success":"primary"} mb-0`)},n(o.type),3),a("p",dt,n(o.name),1),a("p",ut,n(o.address),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};const mt={class:"mt-n4 me-n2"},ft={class:"d-flex align-center"},ht={class:"font-weight-medium text-medium-emphasis me-2"},_t={__name:"EcommercePopularProducts",setup(V){const r=[{avatarImg:K,title:"Apple iPhone 13",subtitle:"Item: #FXZ-4567",stats:"$999.29"},{avatarImg:ee,title:"Nike Air Jordan",subtitle:"Item: #FXZ-3456",stats:"$72.40"},{avatarImg:te,title:"Beats Studio 2",subtitle:"Item: #FXZ-9485",stats:"$99"},{avatarImg:ae,title:"Apple Watch Series 7",subtitle:"Item: #FXZ-2345",stats:"$249.99"},{avatarImg:se,title:"Amazon Echo Dot",subtitle:"Item: #FXZ-8959",stats:"$79.40"},{avatarImg:le,title:"Play Station Console",subtitle:"Item: #FXZ-7892",stats:"$129.48"}];return(u,h)=>(i(),$(I,{title:"Popular Products",subtitle:"Total 10.4k Visitors"},{append:t(()=>[a("div",mt,[e(C,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:t(()=>[e(f,{size:"22",icon:"tabler-dots-vertical"}),e(N,{activator:"parent"},{default:t(()=>[e(P,null,{default:t(()=>[(i(),g(x,null,w(["Refresh","Download","View All"],(s,l)=>e(S,{key:l,value:l},{default:t(()=>[e(E,null,{default:t(()=>[_(n(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(k,null,{default:t(()=>[e(P,{class:"card-list"},{default:t(()=>[(i(),g(x,null,w(r,s=>e(S,{key:s.title},{prepend:t(()=>[e(R,{size:"44",rounded:"",image:s.avatarImg},null,8,["image"])]),append:t(()=>[a("div",ft,[a("span",ht,n(s.stats),1)])]),default:t(()=>[e(E,{class:"font-weight-medium"},{default:t(()=>[_(n(s.title),1)]),_:2},1024),e(H,null,{default:t(()=>[_(n(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},bt=ue(_t,[["__scopeId","data-v-b68f4c11"]]),vt=a("h6",{class:"text-h6 mb-6"}," Revenue Report ",-1),gt=a("span",null,"2022",-1),yt=a("div",{class:"d-flex flex-column mt-6"},[a("h5",{class:"font-weight-semibold text-h5"}," $25,825 "),a("p",null,[a("span",{class:"text-high-emphasis font-weight-semibold me-1"},"Budget:"),a("span",null,"56,800")])],-1),xt={__name:"EcommerceRevenueReport",setup(V){const r=L(),u={bar:[{name:"Earning",data:[270,210,180,200,250,280,250,270,150]},{name:"Expense",data:[-140,-160,-180,-150,-100,-60,-80,-100,-180]}],line:[{name:"Last Month",data:[20,10,30,16,24,5,40,23,28,5,30]},{name:"This Month",data:[50,40,60,46,54,35,70,53,58,35,60]}]},h=B(()=>{const s=r.current.value.colors,l=r.current.value.variables,o=`rgba(${z(s["on-surface"])},${l["disabled-opacity"]})`,m=`rgba(${z(s["on-background"])},${l["high-emphasis-opacity"]})`,c=`rgba(${z(String(l["border-color"]))},${l["border-opacity"]})`;return{bar:{chart:{parentHeightOffset:0,stacked:!0,type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"40%",borderRadius:8,startingShape:"rounded",endingShape:"rounded"}},colors:[s.primary,s.warning],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:6,lineCap:"round",colors:[s.surface]},legend:{show:!0,horizontalAlign:"left",position:"top",fontFamily:"Public Sans",markers:{height:12,width:12,radius:12,offsetX:-3,offsetY:2},labels:{colors:m},itemMargin:{horizontal:5}},grid:{show:!1,padding:{bottom:-8,top:20}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{fontSize:"14px",colors:o,fontFamily:"Public Sans"}},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{offsetX:-16,style:{fontSize:"14px",colors:o,fontFamily:"Public Sans"}},min:-200,max:300,tickAmount:5},responsive:[{breakpoint:1700,options:{plotOptions:{bar:{columnWidth:"43%"}}}},{breakpoint:1441,options:{plotOptions:{bar:{columnWidth:"52%"}}}},{breakpoint:1280,options:{plotOptions:{bar:{columnWidth:"38%"}}}},{breakpoint:1025,options:{plotOptions:{bar:{columnWidth:"70%"}},chart:{height:390}}},{breakpoint:991,options:{plotOptions:{bar:{columnWidth:"38%"}}}},{breakpoint:850,options:{plotOptions:{bar:{columnWidth:"48%"}}}},{breakpoint:449,options:{plotOptions:{bar:{columnWidth:"70%"}},chart:{height:360},xaxis:{labels:{offsetY:-5}}}},{breakpoint:394,options:{plotOptions:{bar:{columnWidth:"88%"}}}}],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}},line:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line"},stroke:{curve:"smooth",dashArray:[5,0],width:[1,2]},legend:{show:!1},colors:[c,s.primary],grid:{show:!1,borderColor:c,padding:{top:-30,bottom:-15,left:25}},markers:{size:0},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},tooltip:{enabled:!1}}}});return(s,l)=>(i(),$(I,null,{default:t(()=>[e(W,{"no-gutters":""},{default:t(()=>[e(b,{cols:"12",sm:"8",lg:"8",class:F(s.$vuetify.display.smAndUp?"border-e":"border-b")},{default:t(()=>[e(k,{class:"pe-2"},{default:t(()=>[vt,e(d(O),{options:d(h).bar,series:u.bar,height:"365"},null,8,["options","series"])]),_:1})]),_:1},8,["class"]),e(b,{cols:"12",sm:"4"},{default:t(()=>[e(k,{class:"d-flex flex-column justify-center align-center text-center ps-2 h-100"},{default:t(()=>[e(C,{variant:"outlined",size:"small",class:"d-flex mx-auto"},{append:t(()=>[e(f,{size:"16",icon:"tabler-chevron-down"})]),default:t(()=>[gt,e(N,{activator:"parent"},{default:t(()=>[e(P,null,{default:t(()=>[(i(),g(x,null,w(["2021","2020","2019"],(o,m)=>e(S,{key:m,value:m},{default:t(()=>[e(E,null,{default:t(()=>[_(n(o),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}),yt,e(d(O),{options:d(h).line,series:u.line,height:"100"},null,8,["options","series"]),e(C,{class:"mt-4"},{default:t(()=>[_(" Increase Budget ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},wt=a("span",{class:"text-body-2"},"Updated 1 month ago",-1),$t={class:"d-flex"},kt={class:"d-flex flex-column"},Vt={class:"text-h6 font-weight-medium"},Ct={class:"text-caption"},St={__name:"EcommerceStatistics",setup(V){const r=[{title:"Sales",stats:"230k",icon:"tabler-chart-pie-2",color:"primary"},{title:"Customers",stats:"8.549k",icon:"tabler-users",color:"info"},{title:"Products",stats:"1.423k",icon:"tabler-shopping-cart",color:"error"},{title:"Revenue",stats:"$9745",icon:"tabler-currency-dollar",color:"success"}];return(u,h)=>(i(),$(I,{title:"Statistics"},{append:t(()=>[wt]),default:t(()=>[e(k,{class:"pt-6"},{default:t(()=>[e(W,null,{default:t(()=>[(i(),g(x,null,w(r,s=>e(b,{key:s.title,cols:"6",md:"3"},{default:t(()=>[a("div",$t,[e(R,{color:s.color,variant:"tonal",size:"42",class:"me-3"},{default:t(()=>[e(f,{size:"24",icon:s.icon},null,8,["icon"])]),_:2},1032,["color"]),a("div",kt,[a("span",Vt,n(s.stats),1),a("span",Ct,n(s.title),1)])])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},Et=a("div",{class:"pb-2"},[a("h6",{class:"text-h6"}," Profit "),a("span",{class:"text-disabled text-sm"},"Last Month")],-1),It=a("div",{class:"d-flex align-center justify-space-between mt-4"},[a("h6",{class:"text-h6 text-center font-weight-semibold"}," 624k "),a("span",{class:"text-sm text-success"}," +8.24% ")],-1),zt={__name:"EcommerceTotalProfitLineCharts",setup(V){const r=L(),u=[{data:[0,25,10,40,25,55]}],h=B(()=>{const s=r.current.value.colors,l=r.current.value.variables;return{chart:{height:90,type:"line",parentHeightOffset:0,toolbar:{show:!1}},grid:{borderColor:`rgba(${z(String(l["border-color"]))},${l["border-opacity"]})`,strokeDashArray:6,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-18,left:-4,right:7,bottom:-10}},colors:[s.info],stroke:{width:2},tooltip:{enabled:!1,shared:!1,intersect:!0,x:{show:!1}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},markers:{size:3.5,fillColor:s.info,strokeColors:"transparent",strokeWidth:3.2,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:s.surface,strokeColor:s.info,size:5,shape:"circle"}],hover:{size:5.5}},responsive:[{breakpoint:960,options:{chart:{height:110}}}]}});return(s,l)=>(i(),$(I,null,{default:t(()=>[e(k,null,{default:t(()=>[Et,e(d(O),{type:"line",options:d(h),series:u,height:90},null,8,["options"]),It]),_:1})]),_:1}))}},Tt={class:"mt-n4 me-n2"},Pt={class:"d-flex align-center"},Rt={__name:"EcommerceTransactions",setup(V){const r=[{avatarIcon:"tabler-wallet",avatarColor:"primary",title:"Wallet",subtitle:"Starbucks",stats:"-$75",profit:!1},{avatarIcon:"tabler-browser-check",avatarColor:"success",title:"Bank Transfer",subtitle:"Add Money",stats:"+$480",profit:!0},{avatarIcon:"tabler-brand-paypal",avatarColor:"error",title:"Paypal",subtitle:"Client Payment",stats:"+$268",profit:!0},{avatarIcon:"tabler-credit-card",avatarColor:"secondary",title:"Master Card",subtitle:"Ordered iPhone 13",stats:"-$699",profit:!1},{avatarIcon:"tabler-currency-dollar",avatarColor:"info",title:"Bank Transactions",subtitle:"Refund",stats:"+$98",profit:!0},{avatarIcon:"tabler-brand-paypal",avatarColor:"error",title:"Paypal",subtitle:"Client Payment",stats:"+$126",profit:!0},{avatarIcon:"tabler-browser-check",avatarColor:"success",title:"Bank Transfer",subtitle:"Pay Office Rent",stats:"-$1290",profit:!1}];return(u,h)=>(i(),$(I,{title:"Transactions",subtitle:"Total 58 Transactions done in this Month"},{append:t(()=>[a("div",Tt,[e(C,{icon:"",color:"default",size:"x-small",variant:"plain"},{default:t(()=>[e(f,{size:"22",icon:"tabler-dots-vertical"}),e(N,{activator:"parent"},{default:t(()=>[e(P,null,{default:t(()=>[(i(),g(x,null,w(["Refresh","Download","View All"],(s,l)=>e(S,{key:l,value:l},{default:t(()=>[e(E,null,{default:t(()=>[_(n(s),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})])]),default:t(()=>[e(k,null,{default:t(()=>[e(P,{class:"card-list"},{default:t(()=>[(i(),g(x,null,w(r,s=>e(S,{key:s.title},{prepend:t(()=>[e(R,{size:"34",color:s.avatarColor,variant:"tonal",rounded:""},{default:t(()=>[e(f,{icon:s.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[a("div",Pt,[a("span",{class:F(`${s.profit?"text-success":"text-error"} me-2`)},n(s.stats),3)])]),default:t(()=>[e(E,{class:"font-weight-semibold"},{default:t(()=>[_(n(s.title),1)]),_:2},1024),e(H,{class:"opacity-100 text-disabled"},{default:t(()=>[_(n(s.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}};const ga={__name:"ecommerce",setup(V){return(r,u)=>(i(),$(W,null,{default:t(()=>[e(b,{cols:"12",md:"5",lg:"4"},{default:t(()=>[e(Ve)]),_:1}),e(b,{cols:"12",md:"7",lg:"8"},{default:t(()=>[e(St,{class:"h-100"})]),_:1}),e(b,{cols:"12",lg:"4"},{default:t(()=>[e(W,null,{default:t(()=>[e(b,{cols:"12",lg:"6",md:"3",sm:"6"},{default:t(()=>[e(Re)]),_:1}),e(b,{cols:"12",lg:"6",md:"3",sm:"6"},{default:t(()=>[e(zt)]),_:1}),e(b,{cols:"12",md:"6",lg:"12"},{default:t(()=>[e(We)]),_:1})]),_:1})]),_:1}),e(b,{cols:"12",lg:"8"},{default:t(()=>[e(xt)]),_:1}),e(b,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(ze)]),_:1}),e(b,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(bt)]),_:1}),e(b,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(pt)]),_:1}),e(b,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(Rt)]),_:1}),e(b,{cols:"12",lg:"8"},{default:t(()=>[e(lt)]),_:1})]),_:1}))}};export{ga as default};
