// adicionar quantidade ao lado dos alimentos
// atualizar html - interface bonita e mais eficiente e adicionar title "alimentos"
let refeicao = document.getElementById("refeicao");
let calorias = document.getElementById("calorias");
let quantCal = 0;

function adicionarRef(){
    let quantidade = document.getElementById("quantidade").value;
    if(quantidade <= 0){
        alert("ERRO - quantidade invalida");
    } else {
    let opcaoEscolhida = document.getElementById("opcao");
    let selectedOption = opcaoEscolhida.options[opcaoEscolhida.selectedIndex];
    let label = selectedOption.text; 
    let calculoCals = quantidade * opcaoEscolhida.value;
    quantCal = quantCal + calculoCals;
    calorias.textContent = `calorias: ${parseInt(quantCal)}`;
    refeicao.textContent = refeicao.textContent + " " + label;
}
}
