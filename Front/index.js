import startPage from './startPage.js';
import showInsertPage_sup from './showInsertPage_sup.js';
import {doSelect_good,doSelect_sup} from './doSelect.js';
import { SMP_Good, SMP_sup } from './SMP.js';
import { showInsertPage_input } from './showInsertPage_input.js';
import { showInsertPage_output } from './showinsertPage_output.js';
import showinventoryRecords from './showinventoryRecords.js';
import showGoodItem_add from './showGoodItem_add.js';
import main from './main.js';
import Request from './Request.js';
import doLogin from './doLogin.js';
import user_all from './user_all.js';

window.onload=function(){
    if(window.localStorage){
        Request().get("/index.php")
        .then(res => {
            const response = res['data'];
            if(response['status'] ==200){
                window.localStorage.setItem("jwtToken", response['token']);
                main();
                showinventoryRecords()
                //導航列-------
                //圖標
                document.getElementById("home").onclick = function () {
                    console.log("home chlicked")
                    showinventoryRecords();
                }
                //新增供應商頁面
                document.getElementById("showInsertPage_sup").onclick=function(){
                console.log("showInsertPage_sup clicked")
                   showInsertPage_sup();
                };
                //管理供應商頁面
                document.getElementById("SMP_sup").onclick = function () {
                    console.log("SMP_sup clicked");
                    SMP_sup();
                };
                //新增入庫畫面
                document.getElementById("showInsertPage_input").onclick = function () {
                    console.log("showInsertPage_input chlicked")
                    showInsertPage_input();
                }
                //新增出庫畫面
                document.getElementById("showInsertPage_output").onclick = function () {
                    console.log("showInsertPage_output chlicked")
                    showInsertPage_output();

                }
                //庫存畫面
                document.getElementById("showinventoryRecords").onclick = function () {
                    console.log("showinventoryRecords chlicked")
                    showinventoryRecords();
                }
                document.getElementById('showGoodItem_add').onclick=function(){
                    console.log("showGoodItem_add");
                    showGoodItem_add()
                }
                document.getElementById('SMP_good').onclick=function(){
                    console.log("SMP_good");
                    SMP_Good();
                }
                document.getElementById('logout').onclick=function(){
                    localStorage.clear()
                    alert('您已登出系統')
                    location.reload()                    
                }
                document.getElementById('AMP').onclick=function(){
                    user_all()                
                }

                

                 // document.getElementById("logout").onclick=function(){
                //     //doLogout();
                // }
                //showGoodItem_add
            }
            else{
                doLogin();
            }
        })
        .catch(err => {
            console.error(err); 
        })
    }
}

// window.onload = function(){
//     document.getElementById("root").innerHTML = startPage();
    
    
//};
