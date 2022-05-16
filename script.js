const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const buttonSubmit = document.getElementById('button');
const buttonSend = document.getElementById('submit-btn');
const enableBox = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const forms = document.getElementById('evaluation-form');

function login() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
function enable() {
  if (enableBox.checked) {
    buttonSend.disabled = false;
  } else {
    buttonSend.disabled = true;
  }
}
function contador() {
  const decrement = (500 - (textArea.value.length));
  counter.innerText = decrement;
}
/* function subjectCheck() {
  const checked = document.querySelectorAll('input[name="subjects"]:checked.value')
  const arrayChecked = [];
  for (index = 0; checked.length; index += 1){
    arrayChecked.push(checked[index].value)
  }
  return arrayChecked.join(', ')
} */

function subjectCheck() {
  const itens = [];
  const checked = document.querySelectorAll('input[name=subjects]:checked');
  for (let index = 0; index < checked.length; index += 1) {
    itens.push(checked[index].value);
  }
  return itens.join(', '); // https://ichi.pro/pt/como-transformar-um-array-em-uma-string-sem-virgulas-em-javascript-39675175306571
}

function stores(event) { // https://www.guj.com.br/t/como-passar-dados-de-um-form-para-outra-tela-em-html/374350/4
  event.preventDefault();
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name=family]:checked').value;
  const avaliacao = document.querySelector('input[name=rate]:checked').value;
  const observacao = document.getElementById('textarea').value;

  forms.innerHTML = `Nome: ${nome} ${sobrenome} <br>
  Email: ${email} <br>
  Casa: ${casa} <br>
  Família: ${familia} <br>
  Avaliação: ${avaliacao} <br>
  Matérias: ${subjectCheck()}  <br>
  Observações: ${observacao}`;
}
//

buttonSubmit.addEventListener('click', login);
enableBox.addEventListener('click', enable);
textArea.addEventListener('keyup', contador);
forms.addEventListener('submit', stores);
