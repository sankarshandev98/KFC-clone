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
    var data = JSON.parse(localStorage.getItem("data"));
    var number = JSON.parse(localStorage.getItem("signin"));
    console.log("data:",data)
    console.log("number:",number)

    let login= [];

    if(otp!=1234){
       let arr = data.filter(element => {
              return element.cont==number
        });
        console.log("arr", arr)
        if(arr.length>0)
        {
          login.push(1)
          localStorage.setItem("checklogin",JSON.stringify(login))
           window.location.href="header.html" 
        //    window.location.href="signmid.html" 

        

        }
        else if (arr.length==0){
        window.location.href="signmid.html"
        }
        // console.log(otp)
    }else{
        window.location.href="signin.html"
    }
   
}