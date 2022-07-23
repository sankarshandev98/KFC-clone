import {appendData,searchData} from "./append.js"
let  section = document.querySelectorAll("section");
const nevItems = document.querySelectorAll("#ap_menu_side_bar ul li");

window.addEventListener("scroll", () => {
  let currunt = "";

  section.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - sectionHight / 3)) {
      currunt = section.getAttribute("id");
    }
  });
  nevItems.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(currunt)) {
      li.classList.add("active");
    }
  });
});
let menu = JSON.parse(localStorage.getItem("menu"))
let ap_Biryani_Buckets =document.getElementById("ap_Biryani_Buckets")
let ap_New_Launch = document.getElementById("ap_New_Launch")
let ap_Box_Meals = document.getElementById("ap_Box_Meals")
let ap_Burgers = document.getElementById("ap_Burgers")
let ap_Stay_Home_Specials = document.getElementById("ap_Stay_Home_Specials")
let ap_Snacks = document.getElementById("ap_Snacks")
let ap_beverages = document.getElementById("ap_beverages")
appendData(ap_Biryani_Buckets,menu.BiryaniBuckets)
appendData(ap_New_Launch,menu.NewLaunch)
appendData(ap_Box_Meals,menu.BoxMeals)
appendData(ap_Burgers,menu.Burgers)
appendData(ap_Stay_Home_Specials,menu.StayHomeSpecials)
appendData(ap_Snacks,menu.Snacks)
appendData(ap_beverages,menu.beverages)




let main = ()=>{
  let menu = JSON.parse(localStorage.getItem("menu")) 
  let ChickenBuckets = menu.ChickenBuckets
  ChickenBuckets_append(ChickenBuckets)
}


let ChickenBuckets_append = (data)=>{
    let ap_Chicken_Buckets = document.getElementById("ap_Chicken_Buckets")
    ap_Chicken_Buckets.innerHTML = null
    data.forEach((ele)=>{
      let mainDiv = document.createElement("div")
      let avtar = document.createElement("img")
      avtar.src = ele.img
      let name = document.createElement("h2")
      name.innerText = ele.name

      // div-2

      let nonVagdiv = document.createElement("div")
      nonVagdiv.setAttribute("class","nonVagDiv")
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

      let basePrice = document.createElement("p")
      basePrice.innerText = `₹${ele.basePrice}`
      basePrice.style.textDecoration = "line-through"
      let availableprice = document.createElement("p")
      availableprice.innerText = `₹${ele.availableprice}`
      availableprice.style.color = "#ff2e00"
      priceDiv.append(basePrice,availableprice)

      let description = document.createElement("p")
      description.innerText = ele.description 

      //div - 4
      let addCartDiv = document.createElement("div")
      addCartDiv.setAttribute("class","addToCart")

      let addtocart = document.createElement("button")
      let addimg = document.createElement("img")
      addimg.src = "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
      addtocart.innerText = "Add to Cart"
      
      addCartDiv.addEventListener("click",()=>{
        addDatalocalStorage(ele)
      })
      addCartDiv.append(addtocart,addimg)
      mainDiv.append(avtar,name,nonVagdiv,priceDiv,description,addCartDiv)
      ap_Chicken_Buckets.append(mainDiv)
    })

}

// let NewLaunch_append = (data)=>{
//   let ap_New_Launch = document.getElementById("ap_New_Launch")
//   ap_New_Launch.innerHTML = null
//   data.forEach((ele)=>{
//     let mainDiv = document.createElement("div")
//       let avtar = document.createElement("img")
//       avtar.src = ele.img
//       let name = document.createElement("h2")
//       name.innerText = ele.name

//       // div - 2 

//       let nonVagdiv = document.createElement("div")
//       nonVagdiv.setAttribute("class","nonVagDiv2")
//       let NonVegIcon = document.createElement("img")
//       NonVegIcon.src = ele.NonVegIcon
//       let vegOrNonVeg = document.createElement("p")
//       vegOrNonVeg.innerText = ele.vegOrNonVeg
//       let li = document.createElement("li")
//       let serves = document.createElement("p")
//       serves.innerText = ele.Serves
//       if(ele.Serves ==="")
//       {
//         nonVagdiv.append(NonVegIcon,vegOrNonVeg,serves)
//       }
//       else
//       {
//         nonVagdiv.append(NonVegIcon,vegOrNonVeg,li,serves)
//       }

//       // div - 3 

//       let priceDiv = document.createElement("div")
//       priceDiv.setAttribute("class","price")
//       let availableprice = document.createElement("p")
//       availableprice.innerText = `₹${ele.availableprice}`
//       availableprice.style.color = "#202124"
//       priceDiv.append(availableprice)

//       let description = document.createElement("p")
//       description.innerText = ele.description 

//       // div - 4 
//       let addCartDiv = document.createElement("div")
//       addCartDiv.setAttribute("class","addToCart2")

//       let addtocart = document.createElement("button")
//       let addimg = document.createElement("img")
//       addimg.src = "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
//       addtocart.innerText = "Add to Cart"
      
//       addCartDiv.addEventListener("click",()=>{
//         addDatalocalStorage(ele)
//       })
//       addCartDiv.append(addtocart,addimg)

//       mainDiv.append(avtar,name,nonVagdiv,priceDiv,description,addCartDiv)
//       ap_New_Launch.append(mainDiv)
//   })

// }
let addDatalocalStorage = (data)=>{
  let kfcCart = JSON.parse(localStorage.getItem("kfc_cart")) || []
  kfcCart.push(data)
  localStorage.setItem("kfc_cart",JSON.stringify(kfcCart))
}
let getData = ()=>{
  let ap_search = document.getElementById("ap_search").value
  for(let key in menu)
  {
  //  console.log(menu[key]);
   for(let i = 0;i<menu[key].length;i++)
   {
    if(menu[key][i].name == ap_search)
    {
      let searchDat = menu[key][i];
      let ap_section = document.getElementById('ap_section')
      ap_section.innerHTML = null
      searchData(ap_section,searchDat)
    }
   }
  }

}
  let ap_search = document.getElementById("ap_search")
  ap_search.addEventListener("change",getData)

  let preloading=document.querySelector(".chickenload");
  function chicken(){
   preloading.style.display="none";
  }
  let deal = ()=>{
    setTimeout(() => {
      chicken()
      main()
    },5000);
  }
  window.onload=deal();
