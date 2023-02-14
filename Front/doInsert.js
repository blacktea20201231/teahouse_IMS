import { SMP_sup } from "./SMP.js";

export  function doInsert_sup(){
    let data = {
         //"id": document.getElementById("id").value,
         "name": document.getElementById("name").value,
         "tax_id": document.getElementById("tax_id").value,
         "contact":document.getElementById("contact").value,
         "tel": document.getElementById("tel").value,
         "addr":document.getElementById("addr").value        
     };
     axios.post("http://localhost/MVC_Demo/Back/index.php?action=newSup",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         document.getElementById("content").innerHTML=SMP_sup();
     })
     .catch(err => {
         document.getElementById("content").innerHTML=err;  
     })
 }

export function doInsert_good(){
    let data = {
         "id": document.getElementById("good_id").value,
         "name": document.getElementById("good_name").value,
         "price": document.getElementById("good_price").value,
         "unit": document.getElementById("good_unit").value,
         "safe_stock": document.getElementById("good_safe_stock").value,
         "supplier_id": document.getElementById("good_supplier_id").value
         
     };
     axios.post("http://localhost/xampp/MVC_Demo01/Back/index.php?action=newGood",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         document.getElementById("content").innerHTML=response['message'];
     })
     .catch(err => {
         document.getElementById("content").innerHTML=err;  
     })
 }

 export function doInsert_import(){
    let data={
        "good_id":document.getElementById("good_id").value,
        "input_num":document.getElementById("input_num").value
    };
    axios.post("http://localhost/xampp/MVC_Demo01/Back/index.php?action=newMat",Qs.stringify(data))
    .then(res=>{
        let response = res['data'];
        document.getElementById("content").innerHTML=response['message'];
    })
 }

 
