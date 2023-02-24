export default function doLogout(){
    window.localStorage.removeItem('jwtToken')
    console.log('logged out');
    location.reload();
}