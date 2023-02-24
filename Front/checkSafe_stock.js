import Request from "./Request.js";
export default function checkSafe_stock(good_id,good_name,inv){
     Request().get('index.php?action=getGood')
     .then(res=>{
        let response=res['data']
        let rows=response['result']
        let safe
        rows.forEach(element => {
            if (element['id'] == good_id ) {
                safe=element['safe_stock']                 
            }
        })
        if(inv<safe){
            alert(good_name + '低於安存庫存量')
            return 
        }else{
            return 
        }        
     })
     .catch(err=>{
        console.log(err);
    })
}