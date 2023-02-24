export default function showinventoryRecords(){

//庫存紀錄
let str= '<div class="container">\
  <div class="d-flex flex-row mt-3 mx-1">\
    <div class="form-check mt-2">\
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">\
      <label class="form-check-label" for="flexRadioDefault1">\
        入庫\
      </label>\
    </div>\
    <div class="form-check mx-3 mt-2">\
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">\
      <label class="form-check-label" for="flexRadioDefault2">\
        出庫\
      </label>\
    </div>\
    <div class="form-check mx-1 mt-2">\
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>\
      <label class="form-check-label" for="flexRadioDefault2">\
        庫存\
      </label>\
    </div>\
    <div>\
      <div class="input-group mx-3">\
        <span class="input-group-text mx-3">日期</span>\
        <input type="date" class="form-control" value="2023-02-20">\
        <span class="input-group-text mx-1">&nbsp;&nbsp;到&nbsp;&nbsp;</span>\
        <input type="date" class="form-control" value="2023-02-25">\
      </div>\
    </div>\
  </div>\
  \
  <div class="d-inline-flex flex-row mt-3">\
\
    </div>\
    <div class="input-group ">\
      <label for="nav-item" class="h5 mt-1">品項</label>\
      <select class="form-control selectpicker mx-3 border" data-live-search="true" data-actions-box="true"\
        data-live-search-placeholder="搜索" multiple>\
        <option value="1">上統茗茶</option>\
        <option value="2">金品茗茶</option>\
        <option value="3">鑫冠茶葉</option>\
        <option value="4">銀品茗茶</option>\
        <option value="5">同冠茶葉</option>\
        <option value="6">鐵冠茶葉</option>\
      </select>\
    </div>\
</div>'

//<!-- 庫存紀錄 入庫表單 START 
str+='<div class="container mt-4">\
  <table class="table table-striped border">\
    <thead>\
      <th>編號</th>\
      <th>日期</th>\
      <th>品項名稱</th>\
      <th>入庫數量</th>\
      <th>單位</th>\
      <th>單價</th>\
      <th>總額</th>\
    </thead>\
    <tbody>\
      <tr name="supplier_data" id="supplier_data01">\
        <td>01</td>\
        <td>2023-01-25</td>\
        <td>紅茶葉</td>\
        <td>20</td>\
        <td>包</td>\
        <td>$150</td>\
        <td>$3000</td>\
      </tr>\
    </tbody>\
  </table>\
</div>'

// 庫存紀錄 出庫表單 START 
str+='<div class="container mt-4">\
  <table class="table table-striped border">\
    <thead>\
      <th>編號</th>\
      <th>日期</th>\
      <th>品項名稱</th>\
      <th>出庫數量</th>\
      <th>單位</th>\
      <th>單價</th>\
      <th>總額</th>\
    </thead>\
    <tbody>\
      <tr name="supplier_data" id="supplier_data01">\
        <td>01</td>\
        <td>2023-01-25</td>\
        <td>紅茶葉</td>\
        <td>20</td>\
        <td>包</td>\
        <td>$150</td>\
        <td>$3000</td>\
      </tr>\
    </tbody>\
  </table>\
</div>'

// 庫存紀錄 庫存表單 START 
str+='<div class="container mt-4">\
  <table class="table table-striped border">\
    <thead>\
      <th>編號</th>\
      <th>日期</th>\
      <th>品項名稱</th>\
      <th>庫存數量</th>\
      <th>單位</th>\
      <th>平均單價</th>\
      <th>總額</th>\
    </thead>\
    <tbody>\
      <tr name="supplier_data" id="supplier_data01">\
        <td>01</td>\
        <td>2023-01-25</td>\
        <td>紅茶葉</td>\
        <td>20</td>\
        <td>包</td>\
        <td>$150</td>\
        <td>$3000</td>\
      </tr>\
    </tbody>\
  </table>\
</div>'

//入庫單
str+='<div id=InputPage></div>'
//出庫單
str+='<div id=putPage></div>'
//庫存
str+='<div id=inventoryPage></div>'

document.getElementById('content').innerHTML=str;
//document.getElementsByName('action')




}



