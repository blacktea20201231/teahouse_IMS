// export default function Request(){
//     const req = axios.create({
//         baseURL: 'http://localhost/xampp/jwt/Back',
//         headers: { 'Auth': window.localStorage.getItem("jwtToken")}
//     })
//     return req;
// }
export default function Request(){
    let jwtToken = window.localStorage.getItem("jwtToken");
    if(!jwtToken){
         jwtToken = '';
    }
    const req = axios.create({
        baseURL: 'http://localhost/MVC_Demo_0218/Back/',
        headers: { 'Auth': jwtToken}
    })
    return req;
}

