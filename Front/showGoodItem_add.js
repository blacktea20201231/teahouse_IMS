import supplier_good from "./supplier_good.js"
import getGoodsBySupplierId from "./getGoodsBySupplierId.js"
import getUnitbyGoodID from "./getUnitbyGoodID.js"
import { doInsert_good, doInsert_input } from "./doInsert.js"
import Request from "./Request.js"
import showinventoryRecords from "./showinventoryRecords.js"
import { SMP_Good } from "./SMP.js"
export default function showGoodItem_add() {


  Request().post("/index.php?action=getSup")
    .then(res => {
      let response = res['data']
      const rows = response['result']
      // switch(response['status']){
      //   case 200:
      let str = '<div class="container w-50 mt-5">'
      //商品名稱
      str+='<div class="input-group mt-3">'
      str+='<span class="input-group-text">商品名稱</span>'
      str+='<input type="text" class="form-control" id=good_name>'//id
      str+='</div>'
      str += '<div class="input-group mb-3 mt-3">'
      str += '<div class="input-group-prepend">'
      str += '<label class="input-group-text" for="inputGroupSelect01">供&nbsp;&nbsp;應&nbsp;&nbsp;商</label>'
      str += '</div>'
      //供應商
      str += '<select class="custom-select" id="supplier_id">'
      str += '<option selected>Choose...</option>'
      rows.forEach(element => {
        str += '<option value=' + element['id'] + '>' + element['name'] + '</option>'
      });
      str+="</select>"
      str+="</div>";
      //
      str += "<div ></div>"
      //安全庫存
      str+='<div class="input-group mt-3">'
      str+='<span class="input-group-text">安全庫存量</span>'
      str+='<input type="number" class="form-control" id=safe_stock min=0>'//id
      str+='</div>'
      //單位
      str+='<div class="input-group mt-3" id=unit>'
      str+='<span class="input-group-text">單&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位</span>'
      str+='<input type="text" class="form-control" value="" id=good_unit>'
      str+='</div>'
      str+='</div>'
      str+='<div class="two_buttons d-flex justify-content-center mt-5">'
      str+='<button class="btn-dark mx-3" id=input>新增</button>'
      str+='<button class="btn-dark mx-3" id=back>返回</button>'
      str+='</div>'
      

      document.getElementById("content").innerHTML = str;
      // document.getElementById("supplier_id").onchange = function () {
      //   console.log(document.getElementById("supplier_id").value)
      //   getGoodsBySupplierId();
      // }
      // document.getElementById("good").onchange=function () {
      //   console.log(document.getElementById("good").value)
      //   getUnitbyGoodID();
      // }
      document.getElementById("input").onclick = function () {
        console.log("input click")
        if(!document.getElementById('good_name').value||
        !document.getElementById('supplier_id').value||
        !document.getElementById('safe_stock').value||
        !document.getElementById('good_unit').value)alert("請輸入完整資料")
        else     
        doInsert_good();      
      }
      document.getElementById('back').onclick = function () {
        SMP_Good();
      }
    })
    .catch(err => {
      document.getElementById("content").innerHTML = err; 
    })
  
}