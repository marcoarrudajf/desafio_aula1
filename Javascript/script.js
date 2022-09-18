//pegar numero digitado
const setarNum = document.getElementById("num");
const pegarNum = document.getElementById("inp");
const btn = document.getElementById("btn");
const membro = document.getElementById("membro");
const comeco = document.getElementById("btn_com");

var valor;

comeco.addEventListener("click", () => {
  membro.classList.toggle("ativo") ? (comeco.innerHTML = "Parar"): (comeco.innerHTML = "Jogar");
  valor = Math.floor(Math.random() * 10);
});

btn.addEventListener("click", () => {
  if (valor == pegarNum.value) {
    setarNum.textContent = "Parabéns! Você acertou. " + valor;
  } else if (valor > pegarNum.value) {
    setarNum.innerText = "Número é Maior";
  } else if (valor < pegarNum.value) {
    setarNum.innerText = "Número é Menor";
  }
});
