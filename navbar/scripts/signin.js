       
      // var data = JSON.parse(localStorage.getItem("data"));
      function sign_in(){
        // event.preventDefault()
        let n=document.getElementById("in").value 
         // data.push(n);
       
        localStorage.setItem("signin",JSON.stringify(n));
             console.log(n)
             window.location.href="otp.html"
    }
       function  sign_in1(){
    window.location.href="../landing_page/index.html"
       }




       
