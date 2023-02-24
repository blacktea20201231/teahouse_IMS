import Request from "./Request.js"
export default function getUnitbyGoodID () {
    // let data = {
    //     "id": document.getElementById("good").value
    // }
    Request().post("/index.php?action=getGood_unit")
        .then(res => {
            const response = res['data']
            const rows = response['result']
            let i = 1
            let str = ''
            let goodUnits = document.getElementsByName("goodUnit")
            goodUnits.forEach(element => {
                rows.forEach(Element => {
                    if (element.innerText == rows['id']) {
                        document.getElementById("goodUnit" + i).innerText = rows['unit']
                    }
                })
            })

            //let str='<div>ok</div>'
            document.getElementById('unit').innerHTML = str

        })
        .catch(err => {
            console.log(err)
        })
}