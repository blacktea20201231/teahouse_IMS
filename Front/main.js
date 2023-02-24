import Request from './Request.js';
export default function main(){
    const sp =    
    "<nav class='navbar navbar-expand-lg navbar-dark bg-dark' >\
    <a class='navbar-brand'id=home >\
      <i class='fa-solid fa-cart-flatbed' style='color:white'></i>\
    </a>\
    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav'\
      aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>\
      <span class='navbar-toggler-icon'></span>\
    </button>\
    <div class='collapse navbar-collapse' id='navbarNav'>\
      <ul class='navbar-nav'>\
        <li class='nav-item'>\
          <a class='nav-link' id=showinventoryRecords>庫存紀錄\
            <span class='sr-only'>(current)</span>\
          </a>\
        </li>\
        <li class='nav-item '>\
          <a class='nav-link' href='#' id=showInsertPage_input>入庫</a>\
        </li>\
        <li class='nav-item '>\
          <a class='nav-link' href='#' id=showInsertPage_output>出庫</a>\
        </li>\
        <li class='nav-item dropdown'>\
          <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown'\
            aria-haspopup='true' aria-expanded='false'>\
            供應商管理\
          </a>\
          <div class='dropdown-menu' aria-labelledby='navbarDropdown' container='body'>\
              <a class='dropdown-item' href='#' id=showInsertPage_sup>新增供應商</a>\
              <a class='dropdown-item' href='#' id=SMP_sup>管理供應商</a>\
           </div>\
        </li>\
        <li class='nav-item dropdown'>\
          <a class='nav-link  dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown'\
            aria-haspopup='true' aria-expanded='false'>\
            商品管理\
          </a>\
          <div class='dropdown-menu' aria-labelledby='navbarDropdown'>\
            <a class='dropdown-item' id=showGoodItem_add>新增商品</a>\
            <a class='dropdown-item' href='#' id=SMP_good>管理商品</a>\
          </div>\
        </li>\
        <li class='nav-item'>\
          <a class='nav-link disabled' href='#' tabindex='-1' aria-disabled='true'>\
            下單\
          </a>\
        </li>\
        <li class='nav-item'>\
          <a class='nav-link' id=AMP>帳戶管理\
            <span class='sr-only'>(current)</span>\
          </a>\
        </li>\
        <li class='nav-item'>\
          <a class='nav-link' id=logout>登出\
            <span class='sr-only'>(current)</span>\
          </a>\
        </li>\
      </ul>\
    </div>\
  </nav>\
  <div id='content'></div>";
    document.getElementById("root").innerHTML =sp;

    //以下先省略…..
  
}
