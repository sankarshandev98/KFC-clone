let x=document.getElementById("timer")
function counter(){
    let i=50 
    setInterval(function () {
        i=i-1

    x.innerText=i

},2000);
}
counter()


let submit=()=>{
    let otp=document.getElementById("otp4").value
    if(otp!=1234){
        window.location.href="index.html"
       
        // console.log(otp)
    }else{
        window.location.href="signin_confirm.html"
    }
   
}