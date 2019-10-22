// repetições usando while e do while
var c = 1
while(c <= 6) {
    console.log(`Teste while: ${c}`)
    c++
}

// do while 1º o bloco depois a condição
var d = 1
do {
    console.log(`Teste do while: ${d}`)
    d++
} while(d <=6)

// usando o for para repetição mesma função do while
console.log('Vai começar...')
for(var e = 1; e <= 5; e++) {
    console.log(e)
}
console.log('FIM!!!')