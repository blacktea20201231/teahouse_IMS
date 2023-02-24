import recordsInv from "./showInventoryRecordsInv.js"
import recordsInput from "./showinventoryRecordsInput.js"
import recordsOutput from "./showinventoryRecordsOutput.js"

export default function pageDetemine () {
  let actions = document.getElementsByName("action")
  let action = ``
  actions.forEach(element => {
    if (element.checked) {
      action = element.value
    }
  })
  let str = ``
  switch (action) {
    case "getInput":
      console.log("HHHH")
      str = recordsInput()
      console.log("WWW")
      console.log(str)
      break
    case "getOutput":
      str = recordsOutput()
      break
    case "getInv":
      str = recordsInv()
      break
    default:
      break
  }
  return str
}