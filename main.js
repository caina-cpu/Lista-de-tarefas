let tarefa = document.querySelector('.tarefa')
let lista = document.querySelector('.tarefas')
let tarefas = []

function Adicionar() {
    if (tarefa.value.length == 0) {
        alert('Adicione uma tarefa válida.')
    } else {
        tarefas.push(tarefa.value)

        const li = document.createElement('li')
        li.innerHTML = tarefas[tarefas.length - 1]
        lista.appendChild(li)
        botaoApagar(li)
        botaoConcluido(li)
        tarefa.value = ''
        tarefa.focus()
    }
}

function botaoApagar(li) { // criar botão de apagar
    li.innerHTML += '. ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function botaoConcluido(li) { // criar botão de concluir
    li.innerHTML += ' '
    const botaoConcluido = document.createElement('button')
    botaoConcluido.innerText = `Concluído`
    botaoConcluido.setAttribute('class', 'concluído')
    li.appendChild(botaoConcluido)
}

document.addEventListener('click', function (e) { // apagar a tarefa qnd clicar no botão 'apagar'
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
})

document.addEventListener('click', function (e) { // eventos para quando clicar em 'concluído'
    const el = e.target;
    const ell = el.parentElement
    const ap = document.querySelector('.apagar')
    if (el.classList.contains('concluído')) {
        ap.remove() // apagar o botão 'apagar'
        el.remove() // apagar o botão 'concluído'
        ell.style.color = 'green';
        ell.innerHTML += ` <strong>(Concluído)</strong>` 
    }
})

tarefa.addEventListener('keypress', function(e){ // pegar o click do botão enter 
    if(e.keyCode === 13) {
        if(tarefa.value.length == 0) alert('Aicione uma tarefa válida.');
        Adicionar(tarefa.value); // jogando o valor do input para a função mestre
        tarefa.value = ''
        tarefa.focus()
    }
})



