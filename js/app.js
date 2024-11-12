function alterarStatus(id) { //Aqui eu criei uma function onde o parametro se chama id, porque cada li tem um id chamado (game-numero) entao se game e tudo iigual eu so mudei o id que pode ser 1,2 ou 3.
  let jogoSelecionado = document.getElementById(`game-${id}`); //Aqui eu selecionei a tag que envolve todo o card do jogo selecionado
  let imagem = jogoSelecionado.querySelector('.dashboard__item__img'); // Aqui armazenei a imagem do card do jogo porque futuramente vou usar para deixar mas apagado se tiver alugado e acessei ele atravez do jogoSlecionado.
  let btn = jogoSelecionado.querySelector('.dashboard__item__button'); // Aqui recuperei o botão tambem acessando a minha variavel jogoSelecionado.
  

  if (imagem.classList.contains('dashboard__item__img--rented')) { //Unica coisa que diferenciava um jogo alugado era a imagem e o botao, entao aqui se a imagem estiver alugada eu faço isso....
    
    if (confirmarDevolucao()) {

      imagem.classList.remove('dashboard__item__img--rented'); // Aqui a pessoa clicou noque estava alugado para devolver entao eu removi a classe que deixava o botao de alugado
      btn.classList.remove('dashboard__item__button--return') // tambem removi oque deixava o botao apagado
      btn.textContent = 'Alugar' // Aqui eu mudei o texto do botao com text.Content.
    }
  } else {  // Senao tiver alugado eu faço isso.....
    imagem.classList.add('dashboard__item__img--rented');
    btn.classList.add('dashboard__item__button--return')
    btn.textContent = 'Devolver'
  }

}


// Desafio: No projeto Alugames, uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída. Isso pode ajudar a evitar devoluções acidentais.

function confirmarDevolucao(){
  return confirm("Tem certeza que deseja devolver este jogo?")
}

//