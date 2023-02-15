import showUpdatePage from './showUpdatePage.js';
import { doDelete_sup } from './doDelete.js';

function showDeleteList($table,$type) {
    showList($table,$type);    
}
function showUpdateList($table,$type) {
    showList($table,$type);
}
function showList($table,type) {
    axios.get("http://localhost/xampp/MVC_Demo01/Back/index.php?action=get"+$table)
        .then(res => {
            let response = res['data'];
            switch (response['status']) {
                case 200:
                    //作資料列表
                    const rows = response['result'];
                    let str = '<table>';
                    rows.forEach(element => {
                        str += "<tr>";
                        const idstr = "<input type='radio' id='id' name=id value='" + element['id'] + "'>";
                        str += "<td>" + idstr + "</td>";
                        str += "<td>" + element['name'] + "</td>";
                        str += "</tr>";
                    });
                    str += '</table>';


                    //根據type產出修改或刪除鍵
                    switch(type) {
                        case 'delete':
                            str += `<button id="doDelete">刪除</button>`;
                            document.getElementById("content").innerHTML=str;
                            document.getElementById("doDelete").onclick = function(){
                                doDelete_sup();
                            };
                            break;
                        case 'update':
                            str += `<button id="showUpdatePage">修改</button>`;
                            document.getElementById("content").innerHTML=str;
                            document.getElementById("showUpdatePage").onclick = function(){
                                showUpdatePage();
                            };
                        
                            break;
                        default:
                            break;
                    }

                    break;
                default:
                    document.getElementById("content").innerHTML = response['message'];
                    break;
            }

        })
        .catch(err => {
            document.getElementById("content").innerHTML = response['message']
        })
}
export { showUpdateList, showDeleteList };
