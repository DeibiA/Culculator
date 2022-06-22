const resultado = document.querySelector(".result");
const btnAc = document.querySelector(".ac");
const back  = document.querySelector('.neg')

function insert(valor) {
    resultado.value += valor;

}

function clean() {
    resultado.value = "";
}

function backspace() {
    resultado.value = resultado.value.slice(0, -1);
}

function confirma() {
    try{
        resultado.value = eval(resultado.value);
    }
    catch (err){
        alert('[ERRO]')
    }
}