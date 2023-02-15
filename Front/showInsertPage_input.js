export function showInsertPage_input() {


  axios.post("http://localhost/MVC_Demo/Back/index.php?action=getSup")
    .then(res => {
      let response = res['data']
      const rows = response['result']
      // switch(response['status']){
      //   case 200:
      let str = '<div class="container w-50 mt-5">'
      str += '<div class="input-group mb-3 mt-3">'
      str += '<div class="input-group-prepend">'
      str += '<label class="input-group-text" for="inputGroupSelect01">供&nbsp;&nbsp;應&nbsp;&nbsp;商</label>'
      str += '</div>'
      str += '<select class="custom-select" id="supplier_id">'
      str += '<option selected>Choose...</option>'
      rows.forEach(element => {
        str += '<option value=' + element['id'] + '>' + element['name'] + '</option>'
      });
      str += '</select>'
      str += '</div>'

      document.getElementById('supplier_id').onchange=function(){
        let data={
          "id":supplier_id
        }
        axios.post('http://localhost/MVC_Demo/Back/index.php?action=getGood',Qs.stringify(data))
      }

      document.getElementById("content").innerHTML = str;
      //}
    })
    .catch(err => {
      console.error(err);
    })
  
}