// verificações de idade voto condições aninhadas
var idade = 18
console.log(`Você tem: ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

// hora do dia condição de cumprimentos pegando hora do sistema
var agora = new Date()
var hora = agora.getHours()
if(hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}