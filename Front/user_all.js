import Request from "./Request.js";
export default function user_all(){
    Request().get('/index.php?action=getUser')
    .then(res=>{
        const response=res['data']
        let rows=response['result']
        let str =`
        <div class="container w-50 mt-5">
        <table class="table table-striped">
            <thead>
                <th>帳號</th>
                <th>密碼</th>
                <th>身分</th>
                <th></th>
            </thead>
            <tbody>`
                rows.forEach(element => {
                    str+='<tr name="user_data" id=>'
                    str+='<td>'+element['id']+'</td>'
                    str+='<td>'+element['password']+'</td>' 
                    str+='<td>'+element['role']+'</td>'
                    str+='<td><button class="btn-dark w-75" id=user_update>修改</button></td>'
                    str+='</tr>' 
                });                        
            str+='</tbody>'
            str+='</table>'
        str+='</div>'
        str+='<div class="button d-flex justify-content-center mt-5">'
            str+='<button class="btn-dark mx-3">新增使用者</button>'
        str+='</div>'
        document.getElementById("content").innerHTML=str;
    })
    .catch(err=>{

    })
   
   
}