import Request from "./Request.js"
export default function getUnitbyGoodID(){
    // let data = {
    //     "id": document.getElementById("good").value
    // }
    Request().post("/index.php?action=getGood_unit")
    .then(res => {
        const response=res['data']
        const rows=response['result']
        
        let str='<span class="input-group-text">單&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位</span>'
        rows.forEach(Element=> {           
            if(Element['id']==document.getElementById('good').value)         
            str+='<input type="text" class="form-control" id="good_unit" value='+Element['unit']+' readonly>'
            });
        
        //let str='<div>ok</div>'
        document.getElementById('unit').innerHTML=str
       
    })
    .catch(err => {
        console.log(err)
    })
}