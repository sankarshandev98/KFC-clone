let x=document.getElementById("timer")
function counter(){
    let i=50 
    setInterval(function () {
        // i=i-1
        if(i>0)
        {
            i=i-1
        }
        else{
            alert("time is out")
        }


    x.innerText=i;


},1000);

}
counter()
 


let submit=()=>{
    let otp=document.getElementById("otp4").value
    if(otp!=1234){
        window.location.href="index.html"
       
        // console.log(otp)
    }else{
        window.location.href="signin.html"
    }
   
}