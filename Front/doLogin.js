import Request from './Request.js';
export default function doLogin(){
    const sp = `
    <div class="container w-25 mt-5">

    <div class="input-group mb-3">
      <div class="input-group my-2">
        <span class="input-group-text" >帳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;號</span>
        <input type="text" class="form-control" id=id>
      </div>
      <div class="input-group my-2">
        <span class="input-group-text">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碼</span>
        <input type="password" class="form-control" id=password>
      </div>
    </div>
  
    <div class="button d-flex justify-content-center mt-5">
      <button class="btn-dark mx-3" id=login>登入</button>
    </div>
    `;
    document.getElementById("root").innerHTML = sp;
    document.getElementById("login").onclick = function(){
        console.log("Login")
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
                alert('登入成功')
                location.reload();
            }else{
              alert('登入失敗')
                console.log("login failed")
            }

        })
        .catch(err=>{
          console.log(err);
        });
    }
}
