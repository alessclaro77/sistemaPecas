//Peso das peças
let pesoPeca = 50

if(pesoPeca > 100) {
   console.log("Peso maior que 100g, pode cadastrar a peça!")    
} else {
    console.log("Peso menor que 100g, não é possivél cadastrar a peça!")
} 

//quantidade de peças
let numeropecas = 9
if(numeropecas < 10) {
    console.log("Número de peças menordo que dez, cadastro permitido")
} else {
    console.log("capacidade máxima na caixa,cadastro não permitido")
}

//quantidade de caracteres das peças
let nomepeca = "disco"
if(nomepeca.length < 3) {
    console.log("Nome da peça muito curto, não é possivél cadastrar!!")
} else {
    console.log("Nome da peça adequado, pode cadastrar!!")
}
