
import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDeleta from "./componentes/deletaTarefa.js"

        const criarTarefa = (evento)=>{ // ?? o q sigifica esse evento ???

            evento.preventDefault()
            const input = document.querySelector("[data-form-input]")
            const valor = input.value

            const tarefa = document.createElement("li") 
            tarefa.classList.add("task")

            const lista = document.querySelector("[data-list]") // ul

            lista.appendChild(tarefa)

            const conteudo = `<p class="content">${valor}</p>`

            tarefa.innerHTML = conteudo

            tarefa.appendChild(BotaoConclui()) // coloquei em cima do lista.appendChild(tarefa) e não funcionou, troquei pra aqui e funcionou.
            tarefa.appendChild(BotaoDeleta())

            input.value = " "
        }

        const novaTarefa = document.querySelector("[data-form-button]")

        novaTarefa.addEventListener("click", criarTarefa)


    


        




