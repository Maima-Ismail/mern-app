import{b6 as i,b7 as t}from"./index.30a9a44b.js";const o=i("InvoiceStore",{actions:{fetchInvoices(e){return t.get("apps/invoices",{params:e})},fetchInvoice(e){return t.get(`/apps/invoices/${e}`)},fetchClients(){return t.get("/apps/invoice/clients")}}});export{o as u};
