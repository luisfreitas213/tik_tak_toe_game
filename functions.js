

//Função Principal
function play(cel, matr, matrix){
  // Validar se algum jogador já jogou aqui
  if (matrix[matr] == 0){
    // Validar se o jogo já começou
    if (start == 0){
      //Caso nao tenha começado, pedir para começar
      alert("Please Click in Restart to Begin the Game!")
    }else{
      //IMagem do Player
      if (player_to_game == 1){
        cel.innerHTML = '<img src="https://content.mycutegraphics.com/graphics/alphabet/green-alphabet-letter-x.png"  width="200" height="200" alt="">'
      }else{
        cel.innerHTML = '<img src="https://iconsplace.com/wp-content/uploads/_icons/000000/256/png/letter-o-icon-256.png" width="200" height="200" alt="">'
      }
      //Caso tenha começado e nenhum jogador jogou aqui, então fazer a jogada
      matrix[matr] = game(matrix[matr], playerOne, playerTwo);
      //Verificar se o jogo terminou
      win = endgame(matrix)
      if (win == 3){
        alert(p1 + " WON !")
        start = 0
      }else if (win == 6){
        alert(p2 + " WON !")
        start = 0
      }
    }
  }else{
    //Caso alguem ja tenha jogado aqui
    alert("Is not possible to Click here!")
  }
  return matrix[matr]
}

// Função para os jogadores escreverem o seu nome (ativada no botão Restart)
function playername(){
  player1 = prompt("Nome do Jogador 1: ")
  if (player1 == "" || player1 == null){
    player1 = "Player 1"
  }
  player2 = prompt("Nome do Jogador 2: ")
  if (player2 == "" || player2 == null){
    player2 = "Player 2"
  }
  return [player1, player2]
}

// Função de jogo (Quado se escolhe uma casa)
function game(position, playerOne, playerTwo){
  //Se for o jogador 1
  if (player_to_game == 1){
    //trocam as cores dos botões
    playerOne.disabled = true;
    playerTwo.disabled = false;
    // a posição da matriz é selecionada
    position = 1;
    //é o jogador 2 a jogar
    player_to_game = 2;
    //se for o jogador 2
  }else{
    playerOne.disabled = false;
    playerTwo.disabled = true;
    position = 2;
    player_to_game = 1;
  }
  return position
}

function endgame(matrix){

  //Análise da linha de cima
  w1 = endgame_aux(matrix[0],matrix[1],matrix[2]);
  //Análise a linha do meio
  w2 = endgame_aux(matrix[3],matrix[4],matrix[5]);
  //Análise a linha de baixo
  w3 = endgame_aux(matrix[6],matrix[7],matrix[8]);
  //Análise a coluna de esquerda
  w4 = endgame_aux(matrix[0],matrix[3],matrix[6]);
  //Análise a coluna do meio
  w5 = endgame_aux(matrix[1],matrix[4],matrix[7]);
  //Análise a coluna da direita
  w6 = endgame_aux(matrix[2],matrix[5],matrix[8]);
  //Análise da diagonal de cima para baixo
  w7 = endgame_aux(matrix[0],matrix[4],matrix[8]);
  //Análise da diagonal de baixo para cima
  w8 = endgame_aux(matrix[2],matrix[4],matrix[6]);
  return w1+w2+w3+w4+w5+w6+w7+w8
}

function endgame_aux(a1, a2, a3){
  //Se os 3 valores forem iguais devolve a soma
  if (a1==a2 && a1==a3){
    if (a1+a2+a3 > 0){
      return a1+a2+a3
    }else{
      return 0
    }
    // senão devolve 0
  }else{
    return 0
  }
}
