export function showInsertPage_output(){
    let str=
   '<div class="container w-50 mt-5">\
    <div class="input-group mb-3 mt-3">\
    <div class="input-group-prepend">\
      <label class="input-group-text" for="inputGroupSelect01">供&nbsp;&nbsp;應&nbsp;&nbsp;商</label>\
    </div>\
    <select class="custom-select" id="">\
      <option selected>Choose...</option>\
      <option value="1">上統食品</option>\
      <option value="2">金品茗茶</option>\
      <option value="3">鑫冠茶葉</option>\
    </select>\
  </div>\
    <div class="input-group mb-3">\
      <div class="input-group-prepend">\
        <label class="input-group-text" for="inputGroupSelect01">品項名稱</label>\
      </div>\
      <select class="custom-select" id="">\
        <option selected>Choose...</option>\
        <option value="1">紅茶葉</option>\
        <option value="2">綠茶葉</option>\
        <option value="3">砂糖</option>\
        <option value="1">糖漿</option>\
        <option value="2">牛奶</option>\
        <option value="3">奶精</option>\
      </select>\
    </div>\
    <div class="input-group">\
      <span class="input-group-text">數&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</span>\
      <input type="text" class="form-control">\
    </div>\
    <div class="input-group mt-3">\
      <span class="input-group-text">單&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位</span>\
      <input type="text" class="form-control" value="包" readonly>\
    </div>\
    <div class="input-group mt-3">\
      <span class="input-group-text ">有效期限</span>\
      <input type="date" class="form-control" value="2023-02-25">\
    </div>\
    <div class="input-group mb-3 mt-3">\
      <div class="input-group-prepend">\
        <label class="input-group-text" for="inputGroupSelect01">出庫原因</label>\
      </div>\
      <select class="custom-select" id="">\
        <option selected value="1">出庫</option>\
        <option value="2">盤點</option>\
        <option value="3">其他(請於備註中說明)</option>\
      </select>\
    </div>\
    <div class="input-group">\
      <span class="input-group-text">備&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;註</span>\
      <input type="text" class="form-control">\
    </div>\
  </div>\
  <div class="two_buttons d-flex justify-content-center mt-5">\
    <button class="btn-dark mx-3">出庫</button>\
    <button class="btn-dark mx-3">返回</button>\
  </div>'
  document.getElementById("content").innerHTML=str;
}