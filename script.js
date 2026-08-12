// Adiciona interatividade aos botões dos cards
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card-btn');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      alert(`Você clicou para ler mais na Postagem ${index + 1}!`);
    });
  });
});
