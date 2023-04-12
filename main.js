var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Vetor para representar o tabuleiro do jogo
var buttonIds = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]; // Vetor com os ids dos botões
var jogador1 = true; // Variável para controlar o jogador da vez
var vencedor = false; // Variável para verificar se há um vencedor
var jogadasVencedoras = [ // Matriz com as possíveis jogadas vencedoras
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function markCell(cellNumber) {
  if (!vencedor) { // Verificar se já há um vencedor, caso contrário, permitir jogada
    var button = document.getElementById(buttonIds[cellNumber - 1]);
    if (gameBoard[cellNumber - 1] === 0) {
      if (jogador1) {
        button.textContent = "X";
        gameBoard[cellNumber - 1] = 1;
      } else {
        button.textContent = "O";
        gameBoard[cellNumber - 1] = 2;
      }
      jogador1 = !jogador1; // Alternar o jogador da vez
      checkWinner(); // Verificar se há um vencedor após cada jogada
    } else {
      alert("Essa casa já está ocupada. Por favor, escolha outra casa.");
    }
  }
}

function checkWinner() {
  for (var i = 0; i < jogadasVencedoras.length; i++) {
    var a = jogadasVencedoras[i][0];
    var b = jogadasVencedoras[i][1];
    var c = jogadasVencedoras[i][2];
    if (gameBoard[a] !== 0 && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      vencedor = true;
      document.getElementById(buttonIds[a]).classList.add("winning-cell");
      document.getElementById(buttonIds[b]).classList.add("winning-cell");
      document.getElementById(buttonIds[c]).classList.add("winning-cell");
      break;
    }
  }
}