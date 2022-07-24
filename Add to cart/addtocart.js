import header from "../components/navbar.js";
document.getElementById("header").innerHTML = header();

let data = JSON.parse(localStorage.getItem("kfc_cart")) || [];
let total = 1;
let count = 1;
function append(data) {
  document.getElementById("lefts").innerHTML = "";
  data.map(function (elem, index) {
    elem.quantity = 1;
    let cardd = document.createElement("div");
    cardd.setAttribute("id", "card");
    let carddiv = document.createElement("div");
    let cdimgdiv = document.createElement("div");
    cdimgdiv.setAttribute("id", "cdimg");
    let foodimg = document.createElement("img");
    foodimg.src = elem.img;
    cdimgdiv.append(foodimg);
    let cddetailsdiv = document.createElement("div");
    cddetailsdiv.setAttribute("id", "cddetails");
    let name = document.createElement("h4");
    name.innerHTML = elem.name;
    let cddetailsinnerdiv = document.createElement("div");
    let Veg_dot_Icon = document.createElement("img");
    Veg_dot_Icon.src = elem.NonVegIcon;
    let vegNonVeg = document.createElement("p");
    vegNonVeg.innerHTML = elem.vegOrNonVeg;
    cddetailsinnerdiv.append(Veg_dot_Icon, vegNonVeg);

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "price");

    let price = document.createElement("p");
    price.innerText = elem.availableprice;

    let anchor = document.createElement("span");
    anchor.setAttribute("id", "anc");
    anchor.innerText = "Remove";
    anchor.addEventListener("click", function () {
      elemRemove(index);
    });
    cddetailsdiv.append(name, cddetailsinnerdiv, anchor);
    let counterdiv = document.createElement("div");
    counterdiv.setAttribute("id", "counter");
    let minus_span = document.createElement("span");
    minus_span.setAttribute("class", "minus");
    minus_span.addEventListener("click", function () {
      reducing(elem);
      if (elem.quantity >= 1) {
        numspan.innerText = elem.quantity;
        price.innerText = "₹" + elem.availableprice * elem.quantity;
      } else {
        numspan.innerText = 1;
      }
    });

    let inner_minus_span = document.createElement("span");
    minus_span.append(inner_minus_span);
    let numspan = document.createElement("span");
    numspan.setAttribute("id", "num");
    numspan.innerText = elem.quantity;
    let plus_span = document.createElement("span");
    plus_span.setAttribute("class", "plus");
    plus_span.addEventListener("click", function () {
      adding(elem);
      if (elem.quantity > 1) {
        numspan.innerText = elem.quantity;
        price.innerText = "₹" + elem.availableprice * elem.quantity;
      } else {
        numspan.innerText = 1;
      }
    });
    let inner_plus_span1 = document.createElement("span");
    let inner_plus_span2 = document.createElement("span");
    plus_span.append(inner_plus_span1, inner_plus_span2);
    counterdiv.append(minus_span, numspan, plus_span);
    pricediv.append(price);
    carddiv.append(cdimgdiv, cddetailsdiv, counterdiv, pricediv);
    cardd.append(carddiv);
    document.getElementById("lefts").append(cardd);
    document.querySelector("#quan").innerHTML = elem.quantity + " " + "ITEMS";
  });
}
append(data);
data.map(function (element) {
  total += element.availableprice;
});

function reducing(elem) {
  event.preventDefault();
  for (let i = 0; i < data.length; i++) {
    if (elem == data[i] && elem.quantity > 1) {
      elem.quantity--;
      total -= elem.availableprice;
      document.querySelector("#total").innerHTML = "₹" + total.toFixed(2);
      document.querySelector("#ctotal").innerHTML = "₹" + total.toFixed(2);
      document.querySelector("#quan").innerHTML = elem.quantity + " " + "ITEMS";
    }
  }
}
function adding(elem) {
  event.preventDefault();
  for (let i = 0; i < data.length; i++) {
    if (elem == data[i]) {
      elem.quantity++;
      total += elem.availableprice;
      document.querySelector("#quan").innerHTML = elem.quantity + " " + "ITEMS";
      document.querySelector("#ctotal").innerHTML = "₹" + total.toFixed(2);
      document.querySelector("#total").innerHTML = "₹" + total.toFixed(2);
    }
  }
}
function elemRemove(index) {
  event.preventDefault();
  data.splice(index, 1);
  localStorage.setItem("kfc_cart", JSON.stringify(data));
  append(data);
}
document.querySelector("#all").addEventListener("click", allRemove);
function allRemove() {
  localStorage.removeItem("kfc_cart", JSON.stringify(data));
  append(data);
}

document.querySelector("#total").innerHTML = "₹" + total.toFixed(2);
document.querySelector("#ctotal").innerHTML = "₹" + total.toFixed(2);

document.getElementById("check").addEventListener("click", goToCheckout);

function goToCheckout() {
  let totalprice = document.getElementById("ctotal").innerHTML;
  localStorage.setItem("totalprice", JSON.stringify(totalprice));

  window.location.href = "checkout.html";
}

function totals() {
  let totalitem = 0;
  data.map((elem) => {
    totalitem += elem.quantity;
  });
  document.querySelector("#quan").innerHTML = totalitem + " " + "ITEMS";
}
totals();
let preloading = document.querySelector(".chickenload");
function chicken() {
  preloading.style.display = "none";
}
let deal = () => {
  setTimeout(() => {
    chicken();
    append(data);
  }, 2000);
};

window.onload = deal();
let y = JSON.parse(localStorage.getItem("totalprice"));
if (y == null) {
  let x = document.querySelector("#rs");
  // x.innerText = null;
  x.innerText = `₹0`;
} else {
  let x = document.querySelector("#rs");
  x.innerText = null;
  x.innerText = y;
}
