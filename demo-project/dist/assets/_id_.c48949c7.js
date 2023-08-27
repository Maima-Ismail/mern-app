import{k as n,o as D,b as P,w as a,q as l,p as e,z as A,E as i,m as s,D as r,b8 as C}from"./index.30a9a44b.js";import{_ as N,a as T}from"./InvoiceSendInvoiceDrawer.83ff30c1.js";import{_ as U}from"./InvoiceEditable.d5fef475.js";import{u as B}from"./useInvoiceStore.92fa1e0d.js";import{a as S,V as h}from"./VRow.2532b873.js";import{V as I,c as O}from"./VCard.7c5bdd1f.js";import{V as u}from"./VBtn.b063c464.js";import{V as $}from"./VSelect.69af7930.js";import{V as b}from"./VInput.24975e5a.js";import{V as _}from"./VSwitch.c6df8cfd.js";import"./AppDateTimePicker.db41ddb0.js";import"./VField.e328867b.js";import"./index.6a573a18.js";import"./position.8ec4a68a.js";import"./router.dfe3e1e7.js";import"./easing.36b781ab.js";import"./VSpacer.9a581b23.js";import"./VAvatar.aeee1a67.js";import"./VImg.9952cb03.js";import"./VForm.afc9a864.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.b21e8a14.js";/* empty css                   */import"./VCounter.da854d3c.js";import"./VTextarea.ee678f2b.js";import"./VNavigationDrawer.3aad7144.js";import"./ssrBoot.e500bf54.js";import"./VChip.45813b53.js";import"./VTooltip.158a91c2.js";import"./scopeId.a99c0c73.js";import"./VOverlay.998081e8.js";import"./lazy.fa0d234d.js";import"./VDivider.a03abf93.js";import"./VList.115d9393.js";import"./VMenu.54c59b67.js";import"./VCheckboxBtn.4e339412.js";import"./VSelectionControl.b8a27f61.js";const j={class:"d-flex gap-2"},M={class:"w-50"},R={class:"w-50"},L={class:"d-flex align-center justify-space-between"},q={class:"d-flex align-center justify-space-between"},z={class:"d-flex align-center justify-space-between"},Ae={__name:"[id]",setup(E){const g=B(),w=C(),c=n();g.fetchInvoice(Number(w.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=n(!1),p=n(!1),f=n(!0),v=n(!1),V=n(!1),y=n("Bank Account"),x=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>(D(),P(h,null,{default:a(()=>{var k;return[(k=l(c))!=null&&k.invoice?(D(),P(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(U,{data:l(c)},null,8,["data"])]),_:1})):A("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(I,{class:"mb-8"},{default:a(()=>[e(O,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),s("div",j,[s("div",M,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(w).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),s("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e($,{modelValue:l(y),"onUpdate:modelValue":t[2]||(t[2]=o=>r(y)?y.value=o:null),items:x,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",L,[e(b,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),s("div",null,[e(_,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),s("div",q,[e(b,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),s("div",null,[e(_,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),s("div",z,[e(b,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),s("div",null,[e(_,{id:"payment-stub",modelValue:l(V),"onUpdate:modelValue":t[5]||(t[5]=o=>r(V)?V.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(N,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(T,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1}))}};export{Ae as default};