const showDiv = document.querySelector(".show-hidden");
const hiddenDiv = document.querySelector(".hidden-div");
const showConnect = document.querySelector(".show-hidden-menu");
const showHiddenMenu = document.querySelector(".hidden-menu");
const hamburger = document.querySelector(".hamburger");
const hiddenSection = document.querySelector(".hidden-section");
const hamburgerDiv  = document.querySelector(".hamburger-div");

showDiv.addEventListener("click", ()=>{
    hiddenDiv.classList.toggle("show-div");
})

showConnect.addEventListener("click", ()=>{
    showHiddenMenu.classList.toggle("show-hidden-items");
});

hamburger.addEventListener("click", ()=>{
    if (hiddenSection.classList.contains("show-menu")) {
        closeMenu()
        hamburger.setAttribute("src", "images/icon-hamburger.svg")
    }else{
        showMenu()
        hamburger.setAttribute("src", "images/icon-close.svg")
    }
    // hamburger.remove()
    // const closeBtn = document.createElement("img");
    // closeBtn.setAttribute("src", "images/icon-close.svg");
    // hamburgerDiv.appendChild(closeBtn)
})

function showMenu() {
    hiddenSection.classList.add("show-menu");
}

function closeMenu(){
    hiddenSection.classList.remove("show-menu");
}   