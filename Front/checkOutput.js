export default function checkOutput(){
   let inv=parseInt(document.getElementById('inv').value)
   let amount=parseInt(document.getElementById('amount').value)
   if(inv<amount)
        return false
    else
        return true
}