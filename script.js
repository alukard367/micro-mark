const menuBtn = document.querySelector(".menu-btn")
const mainMenu = document.querySelector(".main-menu")

const toggleContent = document.querySelectorAll(".toggle-content")
const readMoreBtn = document.querySelectorAll(".readmore")

menuBtn.addEventListener("click", ()=> {
    mainMenu.classList.toggle("show")
    document.body.classList.toggle("no-scroll")
})


readMoreBtn.addEventListener("click", ()=> {
    toggleContent.classList.toggle("showmore")
    readMoreButton()
})

function readMoreButton() {
    if(readMoreBtn.innerText == "READ MORE") {
        readMoreBtn.innerText = "READ LESS..."
    } else if(readMoreBtn.innerText = "READ LESS..."){
        readMoreBtn.innerText = "READ MORE"
    } 
}
