async function getTotalPayment(){
    const response = await fetch("https://wtf-backend-production.up.railway.app/api/get-total-payment/1")
    console.log(response)
    const data = await response.json();
    
}