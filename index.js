var playerOne = document.querySelector('#player1')
var playerTwo = document.querySelector('#player2')
var bottomRestart = document.querySelector('#bottonRestart')
var mZero = document.querySelector('#m0')
var mOne = document.querySelector('#m1')
var mTwo = document.querySelector('#m2')
var mThree = document.querySelector('#m3')
var mFour = document.querySelector('#m4')
var mFive = document.querySelector('#m5')
var mSix = document.querySelector('#m6')
var mSeven = document.querySelector('#m7')
var mEight = document.querySelector('#m8')
var start = 0
var win = 0
var matrix = [];
for(var i=0; i<9; i++) {
    matrix[i] = 0;
}
var p1= ""
var p2= ""

//Ao Clicar no botão de Restart
bottomRestart.addEventListener("click",function(){
  //As imagens voltam ao Normal
  mZero.innerHTML='<class="top"></td>';
  mOne.innerHTML='<class="top"></td>';
  mTwo.innerHTML='<class="top"></td>';
  mThree.innerHTML='<class="top"></td>';
  mFour.innerHTML='<class="top"></td>';
  mFive.innerHTML='<class="top"></td>';
  mSix.innerHTML='<class="top"></td>';
  mSeven.innerHTML='<class="top"></td>';
  mEight.innerHTML='<class="top"></td>';
  // a matriz do jogo é iniciada
  for(var i=0; i<9; i++) {
      matrix[i] = 0;
  }
  //Jogadores escolhem o nome
  let playernames = playername();
  p1 = playernames[0], p2 = playernames[1];
  // O nome é dado aos jogadores
  playerOne.textContent = p1;
  playerTwo.textContent = p2;
  // O jogador 1 começa
  playerOne.disabled = false;
  playerTwo.disabled = true;
  player_to_game = 1;
  // O jogo começa
  start = 1;
  win = 0;
})
//Inicio do Jogo

mZero.addEventListener("click", function(){
  matrix[0] = play(mZero, 0, matrix, p1, p2)
})

mOne.addEventListener("click", function(){
  matrix[1] = play(mOne, 1, matrix, p1, p2)
})

mTwo.addEventListener("click", function(){
  matrix[2] = play(mTwo, 2, matrix, p1, p2)
})

mThree.addEventListener("click", function(){
  matrix[3] = play(mThree, 3, matrix, p1, p2)
})

mFour.addEventListener("click", function(){
  matrix[4] = play(mFour, 4, matrix, p1, p2)
})

mFive.addEventListener("click", function(){
  matrix[5] = play(mFive, 5, matrix, p1, p2)
})

mSix.addEventListener("click", function(){
  matrix[6] = play(mSix, 6, matrix, p1, p2)
})

mSeven.addEventListener("click", function(){
  matrix[7] = play(mSeven, 7, matrix, p1, p2)
})

mEight.addEventListener("click", function(){
  matrix[8] = play(mEight, 8, matrix, p1, p2)
})
