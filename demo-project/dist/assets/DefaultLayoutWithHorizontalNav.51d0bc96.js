import{_ as w}from"./TheCustomizer.a6475ca5.js";import{o as s,c as u,F as y,a as C,b as g,e as k,_ as x,f as S,g as L,i as R,j as $,k as A,l as P,m as o,n as p,p as t,q as e,s as f,t as V,w as n,V as T,v as b,x as E,y as F,T as z,r as _}from"./index.7cf7c61e.js";import I from"./Footer.45541c40.js";import N from"./NavBarI18n.bc9f082a.js";import B from"./NavBarNotifications.46ec10ac.js";import D from"./NavbarShortcuts.60eb214f.js";import j from"./NavbarThemeSwitcher.be4cde17.js";import q from"./UserProfile.2aba20cc.js";import{V as M}from"./VSpacer.4e88c6bf.js";import{V as H}from"./VBtn.173f27d7.js";import"./VDivider.be3199b8.js";import"./index.c48d7475.js";import"./VRadioGroup.e86214b3.js";import"./VSelectionControl.4b1a9e79.js";import"./router.3438bc48.js";import"./VInput.1239432e.js";import"./VImg.d72fefbf.js";import"./VSwitch.9df7b5f9.js";import"./position.bc69640e.js";import"./VRow.ff0250fc.js";import"./VSelect.910d381a.js";import"./VList.f0ba42a9.js";import"./VAvatar.4f19170c.js";import"./forwardRefs.c003b6b8.js";import"./VMenu.c36c3c49.js";import"./scopeId.a061e5d3.js";import"./VOverlay.2eee6981.js";import"./lazy.91ce62a6.js";import"./easing.36b781ab.js";import"./VCheckboxBtn.97977bdb.js";import"./VChip.0bb83553.js";import"./VTextField.0f1ebf9b.js";/* empty css                   */import"./VField.f8e0ae60.js";import"./VCounter.77ed01eb.js";import"./VNavigationDrawer.792408c8.js";import"./ssrBoot.a66aa571.js";import"./formatters.1ccc6423.js";import"./index.0d4b9ec4.js";import"./VBadge.2a603f18.js";import"./VListItemAction.59622d3a.js";import"./VCard.2337b864.js";import"./useAppAbility.008ae422.js";const W={class:"nav-items"},U={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(m){const r=l=>"children"in l?x:S;return(l,d)=>(s(),u("ul",W,[(s(!0),u(y,null,C(m.navItems,(i,c)=>(s(),g(k(r(i)),{key:c,item:i},null,8,["item"]))),128))]))}},O={class:"layout-navbar"},Q={class:"navbar-content-container"},Y={class:"layout-horizontal-nav"},G={class:"horizontal-nav-content-container"},J={class:"layout-page-content"},K={class:"layout-footer"},X={class:"footer-content-container"},Z={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(m){const{y:r}=L(),{width:l}=R(),d=$(),i=A(!1);d.beforeEach(()=>{i.value=!0}),d.afterEach(()=>{i.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:h}=P();return(a,v)=>(s(),u("div",{class:f(["layout-wrapper",e(c)(e(l),e(r))])},[o("div",{class:f(["layout-navbar-and-nav-container",e(h)&&"header-blur"])},[o("div",O,[o("div",Q,[p(a.$slots,"navbar")])]),o("div",Y,[o("div",G,[t(e(U),{"nav-items":m.navItems},null,8,["nav-items"])])])],2),o("main",J,[a.$slots["content-loading"]?(s(),u(y,{key:0},[e(i)?p(a.$slots,"content-loading",{key:0}):p(a.$slots,"default",{key:1})],64)):p(a.$slots,"default",{key:1})]),o("footer",K,[o("div",X,[p(a.$slots,"footer")])])],2))}},tt=[{title:"Apps & Pages",icon:{icon:"tabler-package"},children:[{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message"},to:"apps-chat"},{title:"Calendar",to:"apps-calendar",icon:{icon:"tabler-calendar"}},{title:"Invoice",icon:{icon:"tabler-file"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-user"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"Authentication",children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Help Center",to:"pages-help-center"},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:"pages-misc-not-found",target:"_blank"},{title:"Not Authorized - 401",to:"pages-misc-not-authorized",target:"_blank"},{title:"Server Error - 500",to:"pages-misc-internal-server-error",target:"_blank"}]}]}]}],et=[{title:"Charts",icon:{icon:"tabler-chart-donut"},children:[{title:"Apex Chart",to:"charts-apex-chart",icon:{icon:"tabler-chart-line"}},{title:"Chartjs",to:"charts-chartjs",icon:{icon:"tabler-chart-pie"}}]}],ot=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics",icon:{icon:"tabler-chart-bar"}},{title:"eCommerce",to:"dashboards-ecommerce",icon:{icon:"tabler-shopping-cart"}},{title:"CRM",to:"dashboards-crm",icon:{icon:"tabler-heart-rate-monitor"}}]}],it=[{title:"Forms",icon:{icon:"tabler-checks"},children:[{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-circle-check"},to:"forms-form-layouts"},{title:"Form Validation",icon:{icon:"tabler-circle-check"},to:"forms-form-validation"}]}],at=[{title:"Others",icon:{icon:"tabler-dots"},children:[{title:"Access Control",icon:{icon:"tabler-shield"},to:"access-control",action:"read",subject:"Auth"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-lifebuoy"},target:"_blank"},{title:"Documentation",href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/",icon:{icon:"tabler-file"},target:"_blank"}]}],nt=[{title:"User Interface",icon:{icon:"tabler-stack"},children:[{title:"Icons",icon:{icon:"tabler-eye"},to:"pages-icons"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Cards",icon:{icon:"tabler-credit-card"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Analytics",to:"pages-cards-card-analytics"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-archive"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]}]}],st=[...ot,...tt,...nt,...it,...et,...at],rt={class:"app-title font-weight-bold leading-normal text-xl"},Kt={__name:"DefaultLayoutWithHorizontalNav",setup(m){const{appRouteTransition:r}=V();return(l,d)=>{const i=_("RouterLink"),c=_("RouterView"),h=w;return s(),g(e(Z),{"nav-items":e(st)},{navbar:n(()=>[t(i,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:n(()=>[t(e(T),{nodes:e(b).app.logo},null,8,["nodes"]),o("h1",rt,E(e(b).app.title),1)]),_:1}),t(M),t(H,{icon:"",variant:"text",color:"default",size:"small"},{default:n(()=>[t(F,{icon:"tabler-search",size:"24"})]),_:1}),t(N),t(j),t(D),t(B,{class:"me-2"}),t(q)]),footer:n(()=>[t(I)]),default:n(()=>[t(c,null,{default:n(({Component:a,route:v})=>[t(z,{name:e(r),mode:"out-in"},{default:n(()=>[(s(),g(k(a),{key:v.path}))]),_:2},1032,["name"])]),_:1}),t(h)]),_:1},8,["nav-items"])}}};export{Kt as default};