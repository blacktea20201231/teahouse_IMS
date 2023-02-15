//供應商
export function doSelect_sup(){
    axios.get("http://localhost/xampp/MVC_Demo01/Back/index.php?action=getSup")
    .then(res => {
        let response = res['data'];
        const rows=response['result'];
        switch(response['status']){
            case 200:
                let str = '<table>';
                Object.values(rows).forEach(element => {
                    str += "<tr>";
                    str += "<td>" + element['id'] + "</td>";
                    str += "<td>" + element['name'] + "</td>";
                    str += "<td>" + element['tel'] + "</td>";
                    str += "<td>" + element['addr'] + "</td>";
                    str += "<td>" + element['tax_id'] + "</td>";
                    str += "</tr>";
                });
                str += '</table>';
                document.getElementById("content").innerHTML=str;
                break;
            default:
                document.getElementById("content").innerHTML=response['message'];
                break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    }) 
}
//物料
export function doSelect_good(){
    axios.get("http://localhost/xampp/MVC_Demo01/Back/index.php?action=getGood")
    .then(res => {
        let response = res['data'];
        const rows=response['result'];
        switch(response['status']){
            case 200:
                let str = '<table>';
                Object.values(rows).forEach(element => {
                    str += "<tr>";
                    str += "<td>" + element['id'] + "</td>";
                    str += "<td>" + element['name'] + "</td>";
                    str += "<td>" + element['price'] + "</td>";
                    str += "<td>" + element['unit'] + "</td>";
                    str += "<td>" + element['supplier_id'] + "</td>";
                   
                    str += "</tr>";
                });
                str += '</table>';
                document.getElementById("content").innerHTML=str;
                break;
            default:
                document.getElementById("content").innerHTML=response['message'];
                break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    }) 
}


