import GeraCPF from './modules/GeraCPF'
import ValidaCPF from './modules/ValidaCPF';


import './assets/css/style.css'

const CPF = document.querySelector('.text-cpf')

const botaoGerar = document.querySelector('.botao-gerar');
botaoGerar.addEventListener('click', e=>{
    e.preventDefault();
    const gera = new GeraCPF();
    document.querySelector('.text-cpf').value = gera.geraNovoCpf()
})

const botaoValidar = document.querySelector('.botao-validar');
botaoValidar.addEventListener('click', e=>{
    e.preventDefault();
    const cpf = new ValidaCPF (CPF.value)
    if(cpf.valida()){
        const cpfValido = document.querySelector('.cpf-valido')
        cpfValido.innerHTML = 'CPF VALIDO'
    }else{
        const cpfInvalido = document.querySelector('.cpf-valido')
        cpfInvalido.innerHTML = 'CPF INVALIDO'
    }
})