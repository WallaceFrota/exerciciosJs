// exemplos objetos
let amigo = {
nome: 'Wallace', 
sexo: 'M', 
peso: 64.5,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
// chamando a função dentro do objeto variavel
amigo.engordar(2)
// mostrando em tela
console.log(`${amigo.nome} pesa ${amigo.peso}`)