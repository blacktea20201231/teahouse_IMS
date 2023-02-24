import {doInsert_sup} from "./doInsert.js";
import { SMP_sup } from "./SMP.js";

//供應商
export default function showInsertPage_sup(){
   
    let str="<div class='container w-50 mt-5'>\
    <div class='form-group'>\
      <label for='usr'>供應商名稱：</label>\
      <input type='text' class='form-control' id='name'>\
    </div>\
    <div class='form-group'>\
      <label for='usr'>統一編號：</label>\
      <input type='text' class='form-control' id='tax_id'>\
    </div>\
    <div class='form-group'>\
      <label for='usr'>聯絡人：</label>\
      <input type='text' class='form-control' id='contact'>\
    </div>\
    <div class='form-group'>\
      <label for='usr'>連絡電話：</label>\
      <input type='text' class='form-control' id='tel'>\
    </div>\
    <div class='form-group'>\
      <label for='usr'>地址：</label>\
      <input type='text' class='form-control' id='addr'>\
    </div>\
    <div class='two_buttons d-flex justify-content-center mt-4'>\
      <button class='btn-dark mx-3' id=doinsert>新增</button>\
      <button class='btn-dark mx-3' id=back>返回</button>\
    </div>\
  </div>";
  
    document.getElementById("content").innerHTML=str;
    document.getElementById("doinsert").onclick = function(){
      if(!document.getElementById('name').value||
      !document.getElementById('tax_id').value||
      !document.getElementById('contact').value||
      !document.getElementById('tel').value||
      !document.getElementById('addr').value)
      alert("請輸入完整資料")
      else{
        doInsert_sup();     
      }
         
    };
    document.getElementById("back").onclick=function(){
      SMP_sup();
    }
}

//物料


