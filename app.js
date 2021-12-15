const divs = document.querySelectorAll("form div")
const btn = document.querySelector("button")


// FIXME: no se agrega la clase error al div

btn.addEventListener("click", () =>{
    divs.forEach(( div ) =>{

        const input = div.querySelector("input")

        if(input.value === ""){
            div.classList.add("error")   
        }
    })
})

// si despues de clickear el boton de claim, algun input esta vacio, debe agregar error a la clase del input