import Request from "./Request.js";
import doLogin from "./doLogin.js";

export default function getUsers(){
    Request().post('/index.php?action=getUsers')
    .then(res=>{
        console.log('getUsers')
        let response=res['data']
        if(response['tokenStatus'] != 200){
            console.log('token expired')
            doLogin();
        }else{
            switch(response['status']){
                case 200:
                //執行成功後的畫面處理
                const $rows=response['result']
                let str=""
                $rows.forEach(element => {
                     str+='<div>'+element['id']+'</div>'  
                     str+='<div>'+element['password']+'</div>'    
                });
                document.getElementById("content").innerHTML=str;                  
                if(window.localStorage){ //儲存到 local storage
                        window.localStorage.setItem("jwtToken", response['token']);
                    }
                    break;
                default:
                    document.getElementById("content").innerHTML = response['message'];
                break;    
                }
            }        
      

    })
    .catch(err=>{
        console.log(err);
    })
}


