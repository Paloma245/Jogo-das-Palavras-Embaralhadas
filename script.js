const palavras = [
    "macaco", "elefante", "baleia", "cachorro"
];


let palavra = "";
let resposta = document.getElementById("ipPalavraResposta");
let tentativas = 3;
let tr = true;
let qtTent = document.getElementById("spQuantTentativas");
qtTent.innerText = tentativas;
let btnVeri = document.getElementById("btnVerificarPalavra");
let pontos = 0;
let placar = document.getElementById("spPlacar");
placar.innerText = pontos;
let btnNova = document.getElementById("btnNovaPalavra");





function sorteioPalavras(){
resetTentativas();
palavra = Math.floor(Math.random()*palavras.length);
btnVeri.disabled = false;
let situacao = document.getElementById("spSituacao").innerText= " ";
resposta.value = null;
embaralhar()
}


function embaralhar(){
let palaEmb = palavras[palavra].split("");
palaEmb.sort();
palaEmb= palaEmb.join()
showPlv = document.getElementById("showPlv").innerHTML = palaEmb;
}


function ValidarResposta (){
validarTentativas();
if (tr == true){  
if(resposta.value == palavras[palavra]) {
situacaoAcertou();
travarIterface();
placarJog();  
}else{
 situacaoErrou();
 atualizarTentativas(); 
}}else{
travarIterface()
}}


function atualizarTentativas(){
tentativas = tentativas - 1;
qtTent.innerText= tentativas;
pontos += 1;
placar.innerText = pontos;  
}




function validarTentativas(){
if (tentativas == 0){
tr = false

}else{
  tr = true;
}
}


function travarIterface(){
btnVeri.disabled = true;
  
}

function placarJog(){
pontos = pontos +3;
placar.innerText = +pontos;

}

function resetTentativas(){
tentativas = 3;
qtTent.innerText = tentativas 
  
}

function situacaoAcertou(){
let situacao= document.getElementById("spSituacao").innerText= " Parabéns, Você acertou";

  
}
  




function situacaoErrou(){
let situacao = document.getElementById("spSituacao").innerText= "Que pena, Você errou";
}