const menuBtn = document.querySelector(".menu-btn")
const mainMenu = document.querySelector(".main-menu")

const expandsMore = document.querySelectorAll("[expand-more]")

menuBtn.addEventListener("click", ()=> {
    mainMenu.classList.toggle("show")
    document.body.classList.toggle("no-scroll")
})

function expand() {
    const showContent = document.getElementById(this.dataset.target)
    if(showContent.classList.contains("expand-active")) {
        this.innerHTML = this.dataset.showtext
    } else {
        this.innerHTML = this.dataset.hidetext
    }
    showContent.classList.toggle("expand-active")
}

expandsMore.forEach(expandMore => {
    expandMore.addEventListener("click", expand)
})

const sendEmail = () => {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "johnmark.garcia367@gmail.com",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}