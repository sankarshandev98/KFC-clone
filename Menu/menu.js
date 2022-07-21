const section = document.querySelectorAll("section");
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
