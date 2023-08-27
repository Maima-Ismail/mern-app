import{_}from"./InvoiceEditable.d5fef475.js";import{a as v,V as k}from"./VRow.2532b873.js";import{V as w,c as x}from"./VCard.7c5bdd1f.js";import{V as c}from"./VBtn.b063c464.js";import{V as P}from"./VSelect.69af7930.js";import{V as f}from"./VInput.24975e5a.js";import{V}from"./VSwitch.c6df8cfd.js";import{k as s,o as B,b as S,w as t,p as e,q as i,E as l,D as m,m as n}from"./index.30a9a44b.js";import"./AppDateTimePicker.db41ddb0.js";import"./VField.e328867b.js";import"./index.6a573a18.js";import"./position.8ec4a68a.js";import"./router.dfe3e1e7.js";import"./easing.36b781ab.js";import"./VTextarea.ee678f2b.js";/* empty css                   */import"./VImg.9952cb03.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.da854d3c.js";import"./VTextField.b21e8a14.js";import"./VTooltip.158a91c2.js";import"./scopeId.a99c0c73.js";import"./VOverlay.998081e8.js";import"./lazy.fa0d234d.js";import"./useInvoiceStore.92fa1e0d.js";import"./VDivider.a03abf93.js";import"./VAvatar.aeee1a67.js";import"./VList.115d9393.js";import"./VMenu.54c59b67.js";import"./VCheckboxBtn.4e339412.js";import"./VSelectionControl.b8a27f61.js";import"./VChip.45813b53.js";const D={class:"d-flex align-center justify-space-between"},N={class:"d-flex align-center justify-space-between"},C={class:"d-flex align-center justify-space-between"},re={__name:"index",setup(T){const b=s({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",balance:"",dueDate:"",client:{address:"",company:"",companyEmail:"",contact:"",country:"",name:""}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,hours:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),r=s(!0),d=s(!1),u=s(!1),p=s("Bank Account"),y=["Bank Account","PayPal","UPI Transfer"];return(U,a)=>(B(),S(k,null,{default:t(()=>[e(v,{cols:"12",md:"9"},{default:t(()=>[e(_,{data:i(b)},null,8,["data"])]),_:1}),e(v,{cols:"12",md:"3"},{default:t(()=>[e(w,{class:"mb-8"},{default:t(()=>[e(x,null,{default:t(()=>[e(c,{block:"","prepend-icon":"tabler-send",class:"mb-2"},{default:t(()=>[l(" Send Invoice ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:t(()=>[l(" Preview ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal"},{default:t(()=>[l(" Save ")]),_:1})]),_:1})]),_:1}),e(P,{modelValue:i(p),"onUpdate:modelValue":a[0]||(a[0]=o=>m(p)?p.value=o:null),items:y,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",D,[e(f,{for:"payment-terms"},{default:t(()=>[l(" Payment Terms ")]),_:1}),n("div",null,[e(V,{id:"payment-terms",modelValue:i(r),"onUpdate:modelValue":a[1]||(a[1]=o=>m(r)?r.value=o:null)},null,8,["modelValue"])])]),n("div",N,[e(f,{for:"client-notes"},{default:t(()=>[l(" Client Notes ")]),_:1}),n("div",null,[e(V,{id:"client-notes",modelValue:i(d),"onUpdate:modelValue":a[2]||(a[2]=o=>m(d)?d.value=o:null)},null,8,["modelValue"])])]),n("div",C,[e(f,{for:"payment-stub"},{default:t(()=>[l(" Payment Stub ")]),_:1}),n("div",null,[e(V,{id:"payment-stub",modelValue:i(u),"onUpdate:modelValue":a[3]||(a[3]=o=>m(u)?u.value=o:null)},null,8,["modelValue"])])])]),_:1})]),_:1}))}};export{re as default};