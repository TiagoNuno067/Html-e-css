let t = document.getElementById("ti")
let p = document.getElementById("para")

t.addEventListener("mouseenter", clicar)

t.addEventListener("mouseout", sair)

function clicar() {
    p.innerHTML = "Stop!"
    p.style.color = "blue"
    t.style.color = "red"
}

function sair() {
    
        p.style.display = "none"
        t.style.color = "black"
}