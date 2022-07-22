let appendData = (wherAppend,data)=>{
    // let wherAppend = document.getElementById("wherAppend")
    // wherAppend.innerHTML = null
    data.forEach((ele)=>{
      let mainDiv = document.createElement("div")
        let avtar = document.createElement("img")
        avtar.src = ele.img
        let name = document.createElement("h2")
        name.innerText = ele.name
  
        // div - 2 
  
        let nonVagdiv = document.createElement("div")
        nonVagdiv.setAttribute("class","nonVagDiv2")
        let NonVegIcon = document.createElement("img")
        NonVegIcon.src = ele.NonVegIcon
        let vegOrNonVeg = document.createElement("p")
        vegOrNonVeg.innerText = ele.vegOrNonVeg
        let li = document.createElement("li")
        let serves = document.createElement("p")
        serves.innerText = ele.Serves
        if(ele.Serves ==="")
        {
          nonVagdiv.append(NonVegIcon,vegOrNonVeg,serves)
        }
        else
        {
          nonVagdiv.append(NonVegIcon,vegOrNonVeg,li,serves)
        }
  
        // div - 3 
  
        let priceDiv = document.createElement("div")
        priceDiv.setAttribute("class","price")
        let availableprice = document.createElement("p")
        availableprice.innerText = `₹${ele.availableprice}`
        availableprice.style.color = "#202124"
        priceDiv.append(availableprice)
  
        let description = document.createElement("p")
        description.innerText = ele.description 
  
        // div - 4 
        let addCartDiv = document.createElement("div")
        addCartDiv.setAttribute("class","addToCart2")
  
        let addtocart = document.createElement("button")
        let addimg = document.createElement("img")
        addimg.src = "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
        addtocart.innerText = "Add to Cart"
        
        addCartDiv.addEventListener("click",()=>{
          addDatalocalStorage(ele)
        })
        addCartDiv.append(addtocart,addimg)
  
        mainDiv.append(avtar,name,nonVagdiv,priceDiv,description,addCartDiv)
        wherAppend.append(mainDiv)
    })
}
let addDatalocalStorage = (data)=>{
    let kfcCart = JSON.parse(localStorage.getItem("kfc_cart")) || []
    kfcCart.push(data)
    localStorage.setItem("kfc_cart",JSON.stringify(kfcCart))
  }
export default appendData