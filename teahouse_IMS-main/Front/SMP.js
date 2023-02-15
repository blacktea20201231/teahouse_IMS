import { doDelete_sup } from "./doDelete.js";
import showUpdatePage from "./showUpdatePage.js";

export function SMP_sup() {

    axios.get("http://localhost/MVC_Demo/Back/index.php?action=getSup")
        .then(res => {
            let response = res['data']
            switch (response['status']) {
                case 200:
                    //作資料列表
                    const rows = response['result'];
                    let str = "\
                    <div class='container w-50 mt-5'>\
                      <table class='table table-striped'>\
                          <thead>\
                              <th>供應商名稱</th>\
                              <th>統一編號</th>\
                              <th>聯絡人</th>\
                              <th>連絡電話</th>\
                              <th></th>\
                              <th></th>\
                          </thead>\
                          <tbody>\
                    "
                   //資料最新的在前面
                    rows.forEach(element => {
                        str += "<tr>";
                        str += "<td>"+element['name']+"</td>"
                        str += "<td>"+element['tax_id']+"</td>"
                        str += "<td>"+element['contact']+"</td>"
                        str += "<td>"+element['tel']+"</td>"
                        str += "<td> <button class='btn-dark w-75' id=update"+element['id']+">修改</button></td>"
                        str += "<td> <button class='btn-dark w-75' id=kill"+element['id']+">刪除</button></td>"
                       
                        str += "</tr>";
                     
                    });
                    str +="   </tbody>\
                          </table>\
                     </div>";
                    document.getElementById('content').innerHTML = str;
                    rows.forEach(element => {
                        document.getElementById("kill"+element['id']).onclick=function(){
                            doDelete_sup(element['id']);
                        }
                        document.getElementById("update"+element['id']).onclick=function(){
                            showUpdatePage(element['id']);
                        }
                    });
                    break;
                default:
                    document.getElementById("content").innerHTML = response['message']
                    break;
            }

        })
        .catch(err => {
            console.error(err);
            document.getElementById("content").innerHTML = response['message'];
        })

    //     let str="\
    //   <div class='container w-50 mt-5'>\
    //   <table class='table table-striped'>\
    //       <thead>\
    //           <th>供應商名稱</th>\
    //           <th>統一編號</th>\
    //           <th>聯絡人</th>\
    //           <th>連絡電話</th>\
    //           <th></th>\
    //           <th></th>\
    //       </thead>\
    //       <tbody>\---------------------------------------
    //           <tr name='supplier_data' id='supplier_data01'>\
    //               <td>佳品茶行</td>\
    //               <td>26439385</td>\
    //               <td>張智雄</td>\
    //               <td>0987654321</td>\
    //               <td>\
    //                   <button class='btn-dark w-75' id=showUpdatePage_sup>\
    //                   修改\
    //                   </button>\
    //               </td>\
    //               <td>\
    //                   <button class='btn-dark w-75' id=doDelete>\
    //                   刪除\
    //                   </button>\
    //               </td>\
    //           </tr>\
    //       </tbody>\-----------------------------------------
    //   </table>\
    // </div>";
    //document.getElementById("content").innerHTML=str;
    //document.getElementById("doselect").onclick = function(){
    //        doSelect_sup();
    //    };
}