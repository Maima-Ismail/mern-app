import{b6 as o,cT as e}from"./index.7cf7c61e.js";const i=o("ProjectStore",{state:()=>({user:null,studentData:[]}),actions:{setUser(t){this.user=t},async fetchData(){try{const t=await e.get("/students");this.studentData=t.data}catch(t){console.log("Error in fetching",t)}},async editTitle({student:t,title:r}){const a=this.studentData.find(s=>s.id===t.id);if(a){a.title=r;try{await e.put(`/students/${t.id}`,{title:r})}catch(s){console.error("Error updating title:",s)}}},async addRow(t){try{const r=await e.post("/students",t);this.studentData.push(r.data)}catch(r){console.error("Error adding row:",r)}}}});export{i as u};