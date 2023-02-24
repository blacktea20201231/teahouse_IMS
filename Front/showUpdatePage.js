import { doUpdate_sup,doUpdate_Good } from "./doUpdate.js";
import { SMP_Good, SMP_sup } from "./SMP.js";
import Request from "./Request.js";



export function showUpdatePage_sup(sup_id = null) {
    let data = {
        "id": sup_id
    };
    Request().post("/index.php?action=getSup", Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            switch (response['status']) {
                case 200:
                    //作畫面
                    const rows = response['result'];
                    
                    let str = "<div class='container w-50 mt-5'>";

                    rows.forEach(element => {
                        // str += `編號：<span id="sup_id">`+element[`id`]+`</span> <br>`;
                        //名稱
                        str += "<div class='form-group'>\
                            <input type='hidden' id=id value="+element['id']+">\
                            <label for='usr'>供應商名稱：</label>\
                            <input type='text' class='form-control' id='name' value="+ element['name'] + ">\
                        </div>"
                        //統編
                        str += "<div class='form-group'>\
                            <label for='usr'>統一編號：</label>\
                            <input type='text' class='form-control' id='tax_id' value="+ element['tax_id'] + ">\
                        </div>"
                        //聯絡人
                        str += "<div class='form-group'>\
                            <label for='usr'>聯絡人：</label>\
                            <input type='text' class='form-control' id='contact' value="+ element['contact'] + ">\
                        </div>"
                        //電話
                        str += "<div class='form-group'>\
                            <label for='usr'>連絡電話：</label>\
                            <input type='text' class='form-control' id='tel' value="+ element['tel'] + ">\
                        </div>"
                        //地址
                        str += "<div class='form-group'>\
                            <label for='usr'>地址：</label>\
                            <input type='text' class='form-control' id='addr' value="+ element['addr'] + ">\
                        </div>"
                        //合作
                        str += '<div class="input-group mb-3 mt-3">'
                        str += '<div class="input-group-prepend">'
                        str += '<label class="input-group-text" for="inputGroupSelect01">供&nbsp;&nbsp;應&nbsp;&nbsp;壯態</label>'
                        str += '</div>'
                        str += '<select class="custom-select" id="coop">'
                        if(element['coop']==1){
                            str += '<option value=' + element['coop'] + '>供應中</option>'
                            str += '<option value=0>停止供應</option>'

                        }else{
                            str += '<option value=' + element['coop'] + '>停止供應</option>'
                            str += '<option value=1>供應中</option>'
                        }
                        
                        str+="</select>"
                        str+="</div>";

                        
                    });
                    str+="<div class='two_buttons d-flex justify-content-center mt-4'>\
                               <button class='btn-dark mx-3' id=doUpdate>修改</button>\
                               <button class='btn-dark mx-3' id=back>返回</button>\
                          </div>"

                    str+="</div>"

                    //如果row['id']=C110156202 => 學號：<input type="text" id="id" value="C110156202">
                    document.getElementById("content").innerHTML = str;
                    document.getElementById("doUpdate").onclick = function () {
                        doUpdate_sup();
                    }
                    document.getElementById("back").onclick=function(){
                        SMP_sup();
                    }
                   
                    break;
                default:
                    document.getElementById("content").innerHTML = response['message'];
                    break;
            }
        })
        .catch(err => {
            document.getElementById("content").innerHTML = err;
        })
}

export function showUpdatePage_Good(good_id = null) {
    Request().post("/index.php?action=getGood_detail2")
    .then(  res => {
        let response = res['data'];
        switch (response['status']) {
            case 200:
                //作畫面
                const rows = response['result'];
                
                let str = "<div class='container w-50 mt-5'>";

                rows.forEach(async element => {
                    // str += `編號：<span id="sup_id">`+element[`id`]+`</span> <br>`;
                    if(element['id'] ==good_id){
                        str += "<div class='form-group'>\
                        <input type='hidden' id=id value="+ element['id'] + ">\
                        <label for='usr'>商品名稱：</label>\
                        <input type='text' class='form-control' id='name' value="+ element['name'] + ">\
                    </div>"
                        str += "<div class='form-group'>\
                        <label for='usr'>單位：</label>\
                        <input type='text' class='form-control' id='unit' value="+ element['unit'] + ">\
                    </div>"
                        str += "<div class='form-group'>\
                        <label for='usr'>安全庫存量：</label>\
                        <input type='text' class='form-control' id='safe_stock' value="+ element['safe_stock'] + ">\
                    </div>"
                        str += '<div class="input-group mb-3 mt-3">'
                        str += '<div class="input-group-prepend">'
                        str += '<label class="input-group-text" for="inputGroupSelect01">供&nbsp;&nbsp;應&nbsp;&nbsp;商</label>'
                        str += '</div>'
                        //供應商
                        str += '<select class="custom-select" id="supplier_id">'
                        str += '<option value='+element['supplier_id']+' selected>' + element['sup_name'] + '</option>'
                        //
          
                        //
                        
                        str += "</select>"
                        str += "</div>";
                    }                                     
                });
                str+="<div class='two_buttons d-flex justify-content-center mt-4'>\
                           <button class='btn-dark mx-3' id=doUpdate>修改</button>\
                           <button class='btn-dark mx-3' id=back>返回</button>\
                      </div>"

                str+="</div>"

                //如果row['id']=C110156202 => 學號：<input type="text" id="id" value="C110156202">
               
                document.getElementById("content").innerHTML = str;
                //
                Request().get('/index.php?action=getSup')
                .then(res => {
                    let response = res['data']
                    switch (response['status']) {
                        case 200:
                            //作畫面
                            const rows = response['result'];
                            let option=''
                            rows.forEach(op => {
                                if(op['id'] !=document.getElementById('supplier_id').value){
                                    option += '<option value=' + op['id'] + '>' + op['name'] + '</option>'
                                }                              
                            });
                            document.getElementById('supplier_id').innerHTML+=option
                            break;
                        default:
                            document.getElementById("content").innerHTML = response['message'];
                            console.log('getSup');
                            break;
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                
                //
                
                
                
                
                document.getElementById("doUpdate").onclick = function () {
                    doUpdate_Good();
                }
                document.getElementById("back").onclick=function(){
                    SMP_Good();
                }
                console.log('200')
                break;
            default:
                document.getElementById("content").innerHTML = response['message'];
                console.log('default')
                break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })

   
}
