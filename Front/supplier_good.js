export default function supplier_good(supplier_id){
    let data={
        "id":supplier_id
      }
     axios.post('http://localhost/MVC_Demo/Back/index.php?action=getGood_detail',Qs.stringify(data))
     .then(res=>{
         let response=res['data']
         const rows=response['result']
         let str= ' <div class="input-group mb-3">'
         str += '<div class="input-group-prepend">'
         str += '<label class="input-group-text" for="inputGroupSelect01">品項名稱</label>'
         str += '</div>'
         str += '<select class="custom-select" id="">'
         str += '<option selected>Choose...</option>'
         rows.forEach(element=>{
          str += '<option value=' + element['id'] + '>' + element['name'] + '</option>'
         })
         str += '</select>'
         str += '</div>'
         return str
     })
     .catch(err=>{
        document.getElementById("content").innerHTML = err; 
     })    
}