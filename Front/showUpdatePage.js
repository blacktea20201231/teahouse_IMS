import { doUpdate_sup } from "./doUpdate_sup.js";

export default function showUpdatePage(sup_id = null) {


    let data = {
        "id": sup_id
    };
    axios.post("http://localhost/MVC_Demo/Back/index.php?action=getSup", Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            switch (response['status']) {
                case 200:
                    //作畫面
                    const rows = response['result'];
                    
                    let str = "<div class='container w-50 mt-5'>";

                    rows.forEach(element => {
                        // str += `編號：<span id="sup_id">`+element[`id`]+`</span> <br>`;
                        str += "<div class='form-group'>\
                            <input type='hidden' id=id value="+element['id']+">\
                            <label for='usr'>供應商名稱：</label>\
                            <input type='text' class='form-control' id='name' value="+ element['name'] + ">\
                        </div>"
                        str += "<div class='form-group'>\
                            <label for='usr'>統一編號：</label>\
                            <input type='text' class='form-control' id='tax_id' value="+ element['tax_id'] + ">\
                        </div>"
                        str += "<div class='form-group'>\
                            <label for='usr'>聯絡人：</label>\
                            <input type='text' class='form-control' id='contact' value="+ element['contact'] + ">\
                        </div>"
                        str += "<div class='form-group'>\
                            <label for='usr'>連絡電話：</label>\
                            <input type='text' class='form-control' id='tel' value="+ element['tel'] + ">\
                        </div>"
                        str += "<div class='form-group'>\
                            <label for='usr'>地址：</label>\
                            <input type='text' class='form-control' id='addr' value="+ element['addr'] + ">\
                        </div>"

                        
                    });
                    str+="<div class='two_buttons d-flex justify-content-center mt-4'>\
                               <button class='btn-dark mx-3' id=doUpdate>修改</button>\
                               <button class='btn-dark mx-3'>返回</button>\
                          </div>"

                    str+="</div>"

                    //如果row['id']=C110156202 => 學號：<input type="text" id="id" value="C110156202">
                    document.getElementById("content").innerHTML = str;
                    document.getElementById("doUpdate").onclick = function () {
                        doUpdate_sup();
                    }
                    break;
                default:
                    document.getElementById("content").innerHTML = response['message'];
                    //"idvalue:"+idValue+"typeof(idvalue):"+typeof(idValue);
                    //
                    break;
            }
        })
        .catch(err => {
            document.getElementById("content").innerHTML = err;
        })
}
