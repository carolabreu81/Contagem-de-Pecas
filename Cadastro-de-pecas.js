// Autora: Carolina Abreu | Dia: 29/09/2021 | Contagem de peças

// definição de variáveis
var ListaDePeca = ['Porta', 'Gaveta', 'Puxador', 'Parafuso', 'Pé'] // Array para armazenar todas as peças e seus respectivos pesos


console.log("Quantidade de peças: " + ListaDePeca.length + "\n Peças já cadastradas para contagem: " + ListaDePeca)


for (var i = 0; i < ListaDePeca.length; i ++) {
    var PecaAtual = ListaDePeca[i];
    var peso = prompt('Digite o peso em gramas para a peça "' + PecaAtual + '" : ');
    if(peso >=100){
        console.log("Peso da peça '" + PecaAtual + "' válido, peso: " + peso)
        if(PecaAtual.length < 4) {
            console.log(PecaAtual + ' Esta peça possui nome inferior a 4 caracteres! ')
        } else {
            console.log(PecaAtual + ' Está peça podera! Ser Cadastrada, peso: ' + peso)
        }
    } else {
        console.log("Peso da peça '" + PecaAtual + "'inválido, peso: " + peso)
    }
}