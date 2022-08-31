// Variables
const formulario = document.querySelector('#formulario');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnFormulario = document.querySelector('#button');

// console.log(formulario)
// console.log(email)
// console.log(password)
// console.log(btnFormulario)

eventListener();

function eventListener(){
  document.addEventListener('DOMContentLoaded', iniciarApp);

  email.addEventListener('blur'  , validarCampo);
  password.addEventListener('blur'  , validarCampo);
}

function iniciarApp(){
  btnFormulario.disabled = true;
  btnFormulario.classList.add('o-1');
}

function validarCampo(e){

  if(e.target.value.length > 0){
    removeError(e.target.id);
  }else{
  // console.log('Ingrese Datos por favor');
    addError(e.target.id);
  }

  if(email !== '' && password !== ''){
    btnFormulario.disabled = false;
    btnFormulario.classList.remove('o-1')
  }
}

function removeError(campo){
  const small = formulario[campo].parentNode.querySelector('small');
  // console.log(small)

  small.style.display = 'none'
}
function addError(campo){
  const small = formulario[campo].parentNode.querySelector('small');
  // console.log(small)
  small.style.display = 'flex'

}