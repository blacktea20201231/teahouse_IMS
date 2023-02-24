import supplier_good from "./supplier_good.js"
import getGoodsBySupplierId from "./getGoodsBySupplierId.js"
import getUnitbyGoodID from "./getUnitbyGoodID.js"
import { doInsert_output } from "./doInsert.js"
import { SMP_sup } from "./SMP.js"
import Request from "./Request.js"
import getInvbyGoodID from "./getInvbyGoodID.js"
import checkOutput from "./checkOutput.js"
import showinventoryRecords from "./showinventoryRecords.js"
export function showInsertPage_output() {


  Request().post("/index.php?action=getGood")
    .then(res => {
      let response = res['data']
      const rows = response['result']
      // switch(response['status']){
      //   case 200:
      let str = '<div class="container w-50 mt-5">'
     //商品
      str+='<div class="input-group mb-3">'
      str+='<div class="input-group-prepend">'
      str+='<label class="input-group-text" for="inputGroupSelect01">品項名稱</label>'
      str+='</div>'
      str+='<select class="custom-select" id="good">'
      str+='<option selecetd value=0>Choose...</option>'
      rows.forEach(element => {
        str += '<option value=' + element['id'] + '>' + element['name'] + '</option>'
      });
      str+= '</select>'
      str+='</div>'
      //數量
      str+='<div class="input-group">'
      str+='<span class="input-group-text">數&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</span>'
      str+='<input type="text" class="form-control" id=amount>'
      str+='</div>'
      //當下庫存
      str+='<div class="input-group mt-3" id=curinv>'
      str+='<span class="input-group-text">當下庫存</span>'
      str+='<input type="text" class="form-control" value="" readonly>'
      str+='</div>'
      str+='<br/>'
      //單位
      str+='<div class="input-group mt-3" id=unit>'
      str+='<span class="input-group-text">單&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位</span>'
      str+='<input type="text" class="form-control" value="包" readonly>'
      str+='</div>'
      str+='<br/>'
      //備註
      str+='<div class="input-group">'
      str+='<span class="input-group-text">備&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;註</span>'
      str+='<input type="text" class="form-control" id="note">'
      str+='</div>'
      str+='</div>'
      str+='<div class="two_buttons d-flex justify-content-center mt-5">'
      str+='<button class="btn-dark mx-3" id=output>出庫</button>'
      str+='<button class="btn-dark mx-3" id=back>返回</button>'
      str+='</div>'
      

      document.getElementById("content").innerHTML = str;
      document.getElementById("good").onchange=function () {
        console.log(document.getElementById("good").value)
        getUnitbyGoodID();
        getInvbyGoodID();
      }
      document.getElementById('back').onclick=function () {
        showinventoryRecords();
      }
      document.getElementById("output").onclick=function(){
        if(!document.getElementById('good').value||
           !document.getElementById('amount').value||       
        document.getElementById('good').value==0)
        alert("請輸入完整資料")
        else{
          if(checkOutput()){
            console.log("output click")
            let good_names = document.getElementById('good')
            let good_name = good_names.options[good_names.selectedIndex].innerText
            let unit_name = document.getElementById('good_unit').value
            let amount = document.getElementById("amount").value
            // console.log(unit_name.value)
            const comfirmBox = window.confirm("您欲出庫：\n" + good_name + "：" + amount + unit_name + "\n請確認。")
            if (comfirmBox == true) {
              doInsert_output();
              //showinventoryRecords()
            }
          }            
          else{
            alert('當前庫存的數量無法滿足訂單需求，請停止當前出貨')   
          }
        }
      
                        
      }
     
    })
    .catch(err => {
      document.getElementById("content").innerHTML = err; 
    })
  
}

