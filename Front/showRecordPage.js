export default function showRecordsPage(){
    const action = document.getElementsByName("action");
    let actionValue;
    for(let i=0; i<action.length; i++){
        if(action[i].checked){
            actionValue = action[i].value;
        }
    };
    // let data = {
    //     "action": actionValue,
    // };

    axios.post("http://localhost/MVC_Demo/Back/index.php?action="+actionValue)
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}