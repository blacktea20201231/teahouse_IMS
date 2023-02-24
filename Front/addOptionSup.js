import Request from "./Request.js";
export default function addOpiotnSup(){
   
 Request().get('/index.php?action=getSup')
    .then(res=>{
        let response=res['data']
        switch (response['status']) {
            case 200:
                //作畫面
                const rows = response['result'];               
                rows.forEach(element => {
                  str += '<option value=' + element['id'] + '>' + element['name'] + '</option>'                                                        
                });                            
            default:
                document.getElementById("content").innerHTML = response['message'];
                break;
        }
    })
    .catch(err => {
        console.log(err);
    })
     
}