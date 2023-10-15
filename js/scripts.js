const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#product-image")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{

        buttons.forEach((btn) =>{
            btn.querySelector(".color").classList.remove("selected")
        })

        const button = e.target //elemento clicado (tag)
        const id = button.getAttribute("id"); //valor do atributo id
        
        button.querySelector(".color").classList.add("selected") //adicionando a classe selected na elemento (tag) clicado

        image.classList.add("chagnging")
        image.setAttribute("src", `img/iphone_${id}.jpg`)
        
        setTimeout(() =>{
            image.classList.toggle("chagnging")
        }, 200)
    })
})