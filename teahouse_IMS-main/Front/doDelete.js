// export function doDelete_sup(){
//     const id = document.getElementsByName("id");
//     let idValue;
//     for(let i=0; i<id.length; i++){
//         if(id[i].checked){
//             idValue = id[i].value;
//         }
//     };
//     let data = {
//         "id": idValue,
//     };

//     axios.post("http://localhost/xampp/MVC_Demo01/Back/index.php?action=removeSup",Qs.stringify(data))
//     .then(res => {
//         let response = res['data'];
//         document.getElementById("content").innerHTML = response['message'];
//     })
//     .catch(err => {
//         document.getElementById("content").innerHTML = err;
//     })          
// }

export function doDelete_sup(sup_id){
    let data = {
        "id": sup_id
    };

    axios.post("http://localhost/MVC_Demo/Back/index.php?action=removeSup",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}

export function doDelete_good(){
    const id = document.getElementsByName("id");
    let idValue;
    for(let i=0; i<id.length; i++){
        if(id[i].checked){
            idValue = id[i].value;
        }
    };
    let data = {
        "id": idValue,
    };

    axios.post("http://localhost/xampp/MVC_Demo01/Back/index.php?action=removeGood",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}

export function doDelete_input(){
    const id = document.getElementsByName("id");
    let idValue;
    for(let i=0; i<id.length; i++){
        if(id[i].checked){
            idValue = id[i].value;
        }
    };
    let data = {
        "id": idValue,
    };

    axios.post("http://localhost/xampp/MVC_Demo01/Back/index.php?action=removeInput",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}

export function doDelete_output(){
    const id = document.getElementsByName("id");
    let idValue;
    for(let i=0; i<id.length; i++){
        if(id[i].checked){
            idValue = id[i].value;
        }
    };
    let data = {
        "id": idValue,
    };

    axios.post("http://localhost/xampp/MVC_Demo01/Back/index.php?action=removeOutput",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}

export function doDelete_inv(){
    const id = document.getElementsByName("id");
    let idValue;
    for(let i=0; i<id.length; i++){
        if(id[i].checked){
            idValue = id[i].value;
        }
    };
    let data = {
        "id": idValue,
    };

    axios.post("http://localhost/xampp/MVC_Demo01/Back/index.php?action=removeInv",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}

