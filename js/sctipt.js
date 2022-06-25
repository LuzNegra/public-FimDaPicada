let cep = document.getElementById("cep");
const popup = document.querySelector('.popup-wrapper');

cep.addEventListener("keyup", async (target, t) => {
  if (cep.value.length == 8) {
    await pesquisarCep();
  }
});

const limpaendereco = (endereco) => {
  document.getElementById("estado").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("rua").value = "";
  document.getElementById("complemento").value = "";
};

const preencherendereco = (endereco) => {
  document.getElementById("estado").value = endereco.uf;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("rua").value = endereco.logradouro;
  document.getElementById("complemento").value = endereco.complemento;
};

const pesquisarCep = async () => {
  limpaendereco();
  const cep = document.getElementById("cep").value;
  const url = "https://viacep.com.br/ws/" + cep + "/json/";

  const dados = await fetch(url);
  const endereco = await dados.json();

  if (endereco.hasOwnProperty("erro")) {
    alert("Cep não existe");
  } else {
    preencherendereco(endereco);
  }
};

popup.addEventListener('click', event => {
  const classCliked = event.target.classList[0];
  const popupClassNome = ['popup-close', 'popup-wrapper'];
  const condicaoClosePopup = popupClassNome.some(popupClassNome => popupClassNome === classCliked);
  if(condicaoClosePopup){
    popup.style.display = 'none';
    window.location.href = "../index.html"
  }
})

function abrir() {
  alert("Denúncia anônima efetuada com sucesso");
  window.location.href = "../index.html";
}
