// refinar funcionalidade e concertar bugs
let refeicao = document.getElementById("refeicao");
let calorias = document.getElementById("calorias");
let quantCal = 0;

function adicionarRef(){
    let opcaoEscolhida = document.getElementById("opcao");
    let quantidade = document.getElementById("quantidade").value;
    let selectedOption = opcaoEscolhida.options[opcaoEscolhida.selectedIndex];
    let label = selectedOption.text; 
    let calculoCals = quantidade * opcaoEscolhida.value;
    quantCal = quantCal + calculoCals;
    calorias.textContent = `calorias: ${parseInt(quantCal)}`;
    refeicao.textContent = refeicao.textContent + " " + label;
}

