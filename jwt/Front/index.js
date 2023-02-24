import startPage from "./startPage.js";
import Request from "./Request.js";
import doLogin from "./dologin.js";
import main from "./main.js";
import getUsers from "./dogetUsers.js";
import doLogout from "./doLogout.js";

window.onload=function(){
    if(window.localStorage){
        Request().get("/index.php")
        .then(res => {
            const response = res['data'];
            if(response['status'] ==200){
                window.localStorage.setItem("jwtToken", response['token']);
                main();
                document.getElementById("getUsers").onclick=function(){
                    getUsers();
                }
                document.getElementById("logout").onclick=function(){
                    doLogout();
                }
            }
            else{
                doLogin();
            }
        })
        .catch(err => {
            console.error(err); 
        })
    }
}

//     document.getElementById('root').innerHTML=startPage();
//     document.getElementById("login").onclick = function(){
//         const data = {
//             "id": document.getElementById("id").value,
//             "password": document.getElementById("password").value
//         };
//          Request().post('/login.php',Qs.stringify(data))
//          .then(res => {
//             const response = res['data'];
//             switch(response['status']){
//                 case 200:
//                     console.log(response['message']);
//                     if(window.localStorage){ //儲存到 local storage
//                         window.localStorage.setItem("jwtToken", response['token']);
//                     }
//                     break;
//                default:
//                     console.log(response['message']);
//             }
//         })
//         .catch(err => {
//             document.getElementById("content").innerHTML = err; 
//         })
//     }


//     document.getElementById("checkToken").onclick = function(){
//         Request().get("/checkToken.php")
//         .then(res => {
//             const response = res['data'];
//             switch(response['status']){
//                 case 200:
//                     console.log(response['message']);
//                     if(window.localStorage){ //儲存到 local storage
//                         window.localStorage.setItem("jwtToken", response['token']);
//                     }
//                     break;
//                 default:
//                     console.log(response['message']);
//             }
//         })
//         .catch(err => {
//             console.error(err); 
//         })    
//    } 
//}


