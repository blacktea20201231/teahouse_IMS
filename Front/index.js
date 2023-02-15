import startPage from './startPage.js';
import {showInsertPage_sup,showInsertPage_good} from './showInsertPage.js';
import {doSelect_good,doSelect_sup} from './doSelect.js';
import {showUpdateList, showDeleteList} from './showList.js';
import { SMP_sup } from './SMP.js';
import { showInsertPage_input } from './showInsertPage_input.js';
import { showInsertPage_output } from './showinsertPage_output.js';



window.onload = function(){
    document.getElementById("root").innerHTML = startPage();
    
    //導航列-------
    //新增供應商頁面
    document.getElementById("showInsertPage_sup").onclick=function(){
        console.log("showInsertPage_sup clicked")
        showInsertPage_sup();
    };
    //管理供應商頁面
    document.getElementById("SMP_sup").onclick=function(){
        console.log("SMP_sup clicked");
        SMP_sup();        
    };
    //新增入庫畫面
    document.getElementById("showInsertPage_input").onclick=function(){
        console.log("showInsertPage_input clicked")
        showInsertPage_input();
    }
    //新增出庫畫面
    document.getElementById("showInsertPage_output").onclick=function(){
        console.log("showInsertPage_output clicked")
        showInsertPage_output();

    }
    //庫存畫面
    document.getElementById("showPage_stock").onclick=function(){
        console.log("showPage_stock clicked")
    }
    

};
