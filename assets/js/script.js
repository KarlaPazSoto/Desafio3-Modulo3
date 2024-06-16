function pintar(color = "green"){
    elemento.style.backgroundColor = color
}
    let elemento = document.getElementById("ele1")
    elemento.addEventListener("click", function(){
        this.style.backgroundColor = "yellow"
    })
pintar()
