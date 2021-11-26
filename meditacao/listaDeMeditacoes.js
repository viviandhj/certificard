
const novaMeditacao = document.querySelector("[data-form-button]")

novaMeditacao.addEventListener("click", (evento) => {

    evento.preventDefault()

    const input = document.querySelector("[data-form-input]")
    const conteudo = input.value

    
   // const meditacao = document.querySelector("[data-task]")
   // meditacao.innerHTML = conteudo

    const ul = document.querySelector("[data-ul]")

    const li = document.createElement("li")

    li.classList.add("meditations-done")

    ul.appendChild(li)

    li.innerHTML = conteudo

   // console.log(conteudo)

    input.value = " "

 })

