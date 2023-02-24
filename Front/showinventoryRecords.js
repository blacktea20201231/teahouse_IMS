import pageDetemine from "./aaa.js"
import Request from "./Request.js"

export default function showinventoryRecords () {

  //庫存紀錄
  let str = `<div class="container">
  <div class="d-flex flex-row mt-3 mx-1">`
  str += `<div class="form-check mt-2">
      <input class="form-check-input" type="radio" name="action" id="flexRadioDefault1" value=getInput>
      <label class="form-check-label" for="flexRadioDefault1">
        入庫
      </label>
    </div>`
  str += ` <div class="form-check mx-3 mt-2">
      <input class="form-check-input" type="radio" name="action" id="flexRadioDefault2" value=getOutput>
      <label class="form-check-label" for="flexRadioDefault2">
        出庫
      </label>
    </div>`
  str += ` <div class="form-check mx-1 mt-2">
      <input class="form-check-input" type="radio" name="action" id="flexRadioDefault3" value=getInv checked>
      <label class="form-check-label" for="flexRadioDefault3">
        庫存
      </label>
    </div>
    <div>`
  str += ` 
      <div class="input-group mx-3">
        <span class="input-group-text mx-3">日期</span>
        <input type="date" class="form-control" value="2023-02-20" id=startDate>
        <span class="input-group-text mx-1">&nbsp;&nbsp;到&nbsp;&nbsp;</span>
        <input type="date" class="form-control" value="2023-02-25" id=endDate>
        &nbsp;&nbsp;
        <button class="btn-dark mx-3" id="search">查詢</button>
      </div>
    </div>
  </div>
</div>
<div id="showStock"></div>`

  document.getElementById('content').innerHTML = str

  let btnSearch = document.getElementById("search")
  btnSearch.onclick = function () {
    console.log("btnSearch.onclick")
    const startDate = new Date(document.getElementById("startDate").value)
    const endDate = new Date(document.getElementById("endDate").value)
    if (startDate <= endDate) {
      const pp = pageDetemine();
      console.log("aaa");
      console.log(pp);
    } else {
      window.confirm("起始日期不能大於結束日期喔！\n請再試一次。")
    }
  }
  
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
      let safe_stock = element['safe_stock']
      console.log(safe_stock < element['inv'])
      if (safe_stock < element['inv']) {
        warning = "🟢"
      } else if (safe_stock == element['inv']) {
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
