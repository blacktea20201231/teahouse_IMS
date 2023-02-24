import Request from "./Request.js"
export default function getInvbyGoodID(){
  Request().post("/index.php?action=getInv")
    .then(res => {
        const response=res['data']
        const rows=response['result']
        let str='<span class="input-group-text">當下庫存</span>'
        rows.forEach(Element=> {           
            if(Element['good_id']==document.getElementById('good').value)         
            str+='<input type="text" class="form-control" id="inv" value='+Element['inv']+' readonly>'
            });
        
        //let str='<div>ok</div>'
        document.getElementById('curinv').innerHTML=str
       
    })
    .catch(err => {
        console.log(err)
    })
}
