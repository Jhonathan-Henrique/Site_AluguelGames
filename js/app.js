function alterarStatus(id) {
  let jogoSelecionado = document.getElementById(`game-${id}`);
  let imagem = jogoSelecionado.querySelector('.dashboard__item__img');
  let btn = jogoSelecionado.querySelector('.dashboard__item__button');

  if (imagem.classList.contains('dashboard__item__img--rented')) {
    if (confirmarDevolucao()) {
      imagem.classList.remove('dashboard__item__img--rented');
      btn.classList.remove('dashboard__item__button--return');
      btn.textContent = 'Alugar';
    }
  } else {
    imagem.classList.add('dashboard__item__img--rented');
    btn.classList.add('dashboard__item__button--return');
    btn.textContent = 'Devolver';
  }

  // Chama a função para contar os jogos alugados
  qtdJogosAlugados();
}

function qtdJogosAlugados() {
  const jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
  console.log(`Total de jogos alugados: ${jogosAlugados.length}`);
}