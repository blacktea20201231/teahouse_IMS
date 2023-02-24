import Request from './Request.js';
export default function doLogin(){
    const sp = `
        帳號：<input type="text" id="id"><br>
        密碼：<input type="password" id="password"><br>
        <button id="login">登入</button>
        <div id="content"></div>
    `;
    document.getElementById("root").innerHTML = sp;
    document.getElementById("login").onclick = function(){
        //console.log("Login")
        const data={
            "id": document.getElementById("id").value,
            "password": document.getElementById("password").value
        };
        Request().post('/index.php?action=login', Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            if(response['status'] == 200){
                if(window.localStorage){ //儲存到 local storage
                    window.localStorage.setItem('jwtToken', response['token']);
                }
                console.log("login successful")
                location.reload();
            }else{
                console.log("login failed")
            }

        })
        .catch(err=>{
          console.log(err);
        });
    }
}
