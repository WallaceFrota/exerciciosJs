// funções com parametros 01
function parimp(n) {
    if(n%2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}
// chamada da funçao repassando parametro
var res = parimp(11) // n = 11
// mostrando resultado
console.log(res)

// função com parametros 02
function soma(n1,n2) {
    return n1 + n2
}
// mostrando em tela
console.log(soma(2,5))

// função dentro de uma variavel
 var dob = function(x) {
     return x * 2
 }
 // mostrando resultado da variavel
 console.log(dob(5))

 // função calculo do fatorial
 function fatorial(n) {
     var fat = 1
     for(var c = n; c > 1; c--) {
         fat = fat * c
     }
     return fat
 }
 console.log(fatorial(7))

 // função fatorial RECURSIVIDADE
 function fato(n) {
     if (n == 1) {
         return 1
     } else {
         return n * fato(n-1)
     }
 }
 console.log(fato(7))
 