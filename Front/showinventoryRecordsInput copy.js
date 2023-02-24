import getUnitbyGoodIDForInput from "./getUnitbyGoodIDForInvInput.js"
import Request from "./Request.js"

export default function recordsInput () {
  console.log("QQQ1")
  async function test(){
    const ret = await Request().post("/index.php?action=getInput");
    return ret;
  }
  Request().post("/index.php?action=getInput")
    .then(res => {
      console.log("UUU")
      let response = res['data']
      let rows = response['result']
      let i = 1
      let input = `<div class="container mt-4">
                  <table class="table table-striped border">
                    <thead>
                      <th>編號</th>
                      <th>日期</th>
                      <th>品項名稱</th>
                      <th>入庫數量</th>
                      <th>單位</th>
                      <th>單價</th>
                      <th>總額</th>
                    </thead>
                    <tbody>`

      rows.forEach(element => {
        let startDate = new Date(document.getElementById("startDate").value)
        let endDate = new Date(document.getElementById("endDate").value)
        let element_date = new Date(element['date'])
        if (element_date >= startDate && element_date <= endDate) {
          input += `<tr name="supplier_data" id="` + element['id'] + `">`
          input += `<td>` + i + `</td>`
          input += `<td >` + element['date'] + `</td>`
          input += `<td id="goodName` + i + `">` + element['good_id'] + `</td>`
          input += `<td>` + element['amount'] + `</td>`
          input += `<td name="goodUnit" id="goodUnit` + i + `">` + element['good_id'] + `</td>`
          input += `<td>` + element['price'] + `</td>`
          input += `<td>` + (element['amount'] * element['price']) + `</td>`
          input += `</tr >`
          console.log(i)
          i++
        }

      })
      // console.log(input)
      input += `</tbody>
            </table>
          </div>`
      document.getElementById("showStock").innerHTML = input
      console.log("kkk")
      console.log(input)
      const arr = new Array();
      arr[0] = input;
      console.log("QQQ2")
      // return arr;
  
    }
    )
    .catch(err => {
      console.error(err)
    })
    
}