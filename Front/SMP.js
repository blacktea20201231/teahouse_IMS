import { doDelete_good, doDelete_sup } from "./doDelete.js";
import { showUpdatePage_Good ,showUpdatePage_sup} from "./showUpdatePage.js";
import Request from "./Request.js";

export function SMP_sup() {

    Request().get("/index.php?action=getSup")
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
                              <th>供應狀態</th>\
                              <th></th>\
                          </thead>\
                          <tbody>\
                    "
                   //資料最新的在前面
                    rows.forEach(element => {
                        str += "<tr>";
                        str += "<td name=sup_name>"+element['name']+"</td>"
                        str += "<td>"+element['tax_id']+"</td>"
                        str += "<td>"+element['contact']+"</td>"
                        str += "<td>"+element['tel']+"</td>"
                        if(element['coop']==true){
                            str += "<td>供應中</td>"
                        }else{
                            str += "<td>目前停止供應</td>"                            
                        }
                        str += "<td> <button class='btn-dark w-75' id=update"+element['id']+">修改</button></td>"
                        //str += "<td> <button class='btn-dark w-75' id=kill"+element['id']+">刪除</button></td>"
                        str += "</tr>";
                     
                    });
                    str +="   </tbody>\
                          </table>\
                     </div>";
                    document.getElementById('content').innerHTML = str;
                    rows.forEach(element => {
                        // document.getElementById("kill"+element['id']).onclick=function(){
                        //     doDelete_sup(element['id']);
                        // }
                        document.getElementById("update"+element['id']).onclick=function(){
                            showUpdatePage_sup(element['id']);
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
}

export function SMP_Good() {

    Request().get("/index.php?action=getGood_detail2")
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
                              <th>商品編號</th>\
                              <th>商品名稱</th>\
                              <th>單位</th>\
                              <th>安全庫存</th>\
                              <th>供應商</th>\
                              <th></th>\
                          </thead>\
                          <tbody>\
                    "
                   //資料最新的在前面
                    rows.forEach(element => {
                        str += "<tr>";
                        str += "<td>"+element['id']+"</td>"
                        str += "<td>"+element['name']+"</td>"
                        str += "<td>"+element['unit']+"</td>"
                        str += "<td>"+element['safe_stock']+"</td>"
                        str += "<td value="+element['supplier_id']+">"+element['sup_name']+"</td>"
                        str += "<td> <button class='btn-dark w-75' id=update"+element['id']+">修改</button></td>"
                        //str += "<td> <button class='btn-dark w-75' id=kill"+element['id']+">刪除</button></td>"
                        str += "</tr>";
                     
                    });
                    str +="   </tbody>\
                          </table>\
                     </div>";
                    document.getElementById('content').innerHTML = str;
                    rows.forEach(element => {
                        // document.getElementById("kill"+element['id']).onclick=function(){
                        //     doDelete_good(element['id']);
                        // }
                        document.getElementById("update"+element['id']).onclick=function(){
                            showUpdatePage_Good(element['id']);
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
}