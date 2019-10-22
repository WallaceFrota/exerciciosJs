// arrays
let num = [5,3,8] // variavel composta array/vetor
num[3] = 6 // adicionando valor a variavel composta na posição 3
num.push(9) // adicionando valor na ultima posição
num.length // tamanho do vetor numero de elementos
num.sort() // ordena todos os dados dos array em ordem crescente
console.log(`Nosso vetor é: ${num} o tamanho da variável é: ${num.length}`)

// exibir vetor com todos seus elementos de uma vez formatado
for (var pos=0; pos<num.length; pos++) {
    console.log(num[pos]) // exibindo elementos
}

// for para variaveis compostas metodo simples do for acima
for(var pos in num) { // para cada posição em num mostrar a var composta
    console.log(num[pos]) // exibindo elementos
}

// buscar valores dentro de um vetor = usar o indexOf(valor)
var valor = num.indexOf(8)
// verificando se o valor é encontrado -1
if(valor == -1) {
    console.log('O valor não foi encontrado no vetor.')
} else {
    console.log(`O valor 3 está na posição ${valor}`)
}