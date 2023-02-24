import Request from "./Request.js"
export default function getGoodsBySupplierId (goodID) {
  Request().post("/index.php?action=getGood_detail")
    .then(res => {
      const response = res['data']
      const rows = response['result']
      let str = ""
      rows.forEach(element => {
        if (goodID == rows['good_id']) {
          return element['good_name']
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
}