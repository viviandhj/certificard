
const novaMeditacao = document.querySelector("[data-form-button]")

novaMeditacao.addEventListener("click", (evento) => {

    evento.preventDefault()

    const input = document.querySelector("[data-form-input]")
    const conteudo = input.value

    
   // const meditacao = document.querySelector("[data-task]")
   // meditacao.innerHTML = conteudo

    const ul = document.querySelector("[data-ul]")

    const li = document.createElement("li")

    li.classList.add("meditations-to-do")

    li.innerHTML = conteudo
   
    ul.appendChild(li)
    li.appendChild(BotaoConclui())
    

   // console.log(conteudo)

    input.value = " "

 })


const BotaoConclui = ()=> {

    const botaoConclui = document.createElement("button")

    botaoConclui.classList.add("check-button")

    botaoConclui.innerText = "check"

    botaoConclui.addEventListener("click", ()=> {
        console.log("fui clicado")
    })

    return botaoConclui

}
