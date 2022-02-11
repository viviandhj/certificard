
const BotaoConclui = () => {
            
    const botaoConclui = document.createElement("button")

    botaoConclui.addEventListener("click", concluirTarefa)

    botaoConclui.classList.add("check-button")

    botaoConclui.innerText = "concluir"

    return botaoConclui  // ?? pra que serve isso????
}



const concluirTarefa = (evento) => {  // ?? o q sigifica esse evento???
    const botaoConclui = evento.target  // botaoConclui = botao
    // Isso está me falando qual o alvo do evento, ou seja, quando eu clicar, eu quero saber em quem eu cliquei.
                                        
    const tarefaCompleta = botaoConclui.parentElement  // li

    tarefaCompleta.classList.toggle("done")  // o toggle me devolve um Booleano verdadeiro ou falso. No nosso caso, vai ser se eu tiver clicado ou não.
}

export default BotaoConclui