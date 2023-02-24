import Request from './Request.js';
export default function main(){
    const sp = `
        <button id="getUsers">員工資料</button>
        <button id="product">產品資料</button>
        <button id="order">訂單資料</button>
        <button id="logout">登出</button>
        <div id="content"></div>
    `;
    document.getElementById("root").innerHTML = sp;

    //以下先省略…..
  
}
