import Request from "./Request.js"

export default function recordsOutput () {
  Request().post("/index.php?action=getOutputWithName")
    .then(res => {
      let response = res['data']
      let rows = response['result']
      let i = 1
      let input = `<div class="container mt-4 w-50">
                  <table class="table table-striped border text-center">
                    <thead>
                      <th>編號</th>
                      <th>日期</th>
                      <th>品項名稱</th>
                      <th>出庫數量</th>
                      <th>單位</th>
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
          input += `<td id="goodName` + i + `">` + element['name'] + `</td>`
          input += `<td>` + element['amount'] + `</td>`
          input += `<td name="goodUnit" id="goodUnit` + i + `">` + element['unit'] + `</td>`
          input += `</tr >`
          // console.log(i)
          i++
        }

      })
      // console.log(input)
      input += `
              </tbody>
            </table>
          </div>`
      document.getElementById("showStock").innerHTML = input
      console.log(input)


    }
    )
    .catch(err => {
      console.error(err)
    })
}