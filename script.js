const values = document.querySelectorAll(".val")
const button = document.querySelector("button");
const rateDisplay = document.querySelector(".dis");
const prevPage = document.querySelector("#prev");
const nextPage = document.querySelector("#next");


let rate = null;

values.forEach((value) =>{
  value.addEventListener("click", (e) =>{
    const active = document.querySelector(".checked");
    if(active){
      active.classList.remove("checked")
    }
    const card = e.target;
    card.classList.add("checked");
    rate = e.target.innerText;

  })
})

button.addEventListener("click", ()=>{
  if(rate){
    rateDisplay.innerText = rate;
    prevPage.setAttribute("id", "next");
    nextPage.removeAttribute("id", "next");
  }
});

