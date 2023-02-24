import Request from "./Request.js"
export default function getGoodsBySupplierId(){
    let data = {
        "id": document.getElementById("supplier_id").value
    }
    Request().post("/index.php?action=getGood_detail",Qs.stringify(data))
    .then(res => {
        const response=res['data']
        const rows=response['result']        
        let str=""
        rows.forEach(element => {
            str += '<option value=' + element['id'] + '>' + element['name'] + '</option>'
          });
       
        //let str='<div>ok</div>'
        document.getElementById('good').innerHTML=str
       
    })
    .catch(err => {
        console.log(err)
    })
}