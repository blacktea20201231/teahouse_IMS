export function doUpdate_sup(){
   
    let data = {
         "id":document.getElementById("id").value,
         "name":document.getElementById("name").value,
         "tax_id":document.getElementById("tax_id").value,
         "tel":document.getElementById("tel").value,
         "addr":document.getElementById("addr").value          
     };
     axios.post("http://localhost/MVC_Demo/Back/index.php?action=updateSup",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         document.getElementById("content").innerHTML = response['message'];
     })
     .catch(err => {
         document.getElementById("content").innerHTML = err; 
     })
 }