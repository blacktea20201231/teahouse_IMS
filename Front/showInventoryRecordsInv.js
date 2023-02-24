import Request from "./Request.js"

export default function recordsInv () {
  Request().post("/index.php?action=getInvWithName")
    .then(res => {
      // console.log(res)
      let response = res['data']
      let rows = response['result']
      let inv = `<div class="container mt-4 w-50 text-center">
                  <table class="table table-striped border text-center">
                    <thead>
                      <th>編號</th>
                      <th>品項名稱</th>
                      <th>庫存數量</th>
                      <th>單位</th>
                      <th>安全庫存</th>
                      <th>庫存警示</th>
                    </thead>`
      let i = 1
      inv += `<tbody>`

      rows.forEach(element => {
        let warning = ``
        let safe_stock = parseInt( element['safe_stock'])
        console.log(safe_stock < parseInt(element['inv']))
        if (safe_stock < parseInt( element['inv'])) {
          warning = "🟢"
        } else if (safe_stock == parseInt( element['inv'])) {
          warning = "🟡"
        } else {
          warning = "🔴"
        }


        inv += `<tr name="supplier_data" id="supplier_data01 text-center">`
        inv += `<td>` + i + `</td>`
        inv += `<td>` + element['name'] + `</td>`
        inv += `<td>` + element['inv'] + `</td>`
        inv += `<td>` + element['unit'] + `</td>`
        inv += `<td>` + element['safe_stock'] + `</td>`
        inv += `<td>` + warning + `</td>`
        inv += `  </tr >`
        i++
      })

      inv += `         </tbody >
                  </table >
                </div > `
      // console.log(inv)
      document.getElementById("showStock").innerHTML = inv
    })
    .catch(err => {
      console.error(err)
    })
}