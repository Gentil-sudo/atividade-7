var total_gasto = 0
var renda = Number(prompt("Digite sua renda mensal: "))
while (isNaN(renda)) {
  renda = Number(prompt("Valor inválido!\nDigite um número:"))
}

var nome = prompt("Digite seu nome: ")
console.log("nome:", nome)
console.log("renda:", renda)

var despesas = Number(prompt("Digite o numero de despesas: "))
while (isNaN(despesas)) {
  despesas = Number(prompt("Valor inválido!\nDigite um número:"))
}
if (despesas >= 5) {
    despesas = 5
}
else if (despesas <= 1) {
    despesas = 1
}
for (let i = 1; i <= despesas; i++) {
  gasto = Number(prompt(`Digite o gasto ${i}:`))
  while (isNaN(gasto)) {
    gasto = Number(prompt(`Digite o gasto ${i}:`))
  }
  total_gasto += gasto
}

console.log("total gasto:", total_gasto)
var sobra = renda - total_gasto 
console.log("O que sobrou:", sobra)

if (total_gasto > renda) {
  alert("⚠️ Atenção: Você gastou a mais do que ganhou!")
  console.log("⚠️ Atenção: Você gastou a mais do que ganhou!.")
}
else if (renda - (renda * 0.3)>total_gasto){
  alert("✅ Ótimo: Excelente margem!.")
  console.log("✅ Ótimo: Excelente margem!.")
}
else{
  alert("🙂 Ok: Podemos melhorar!.")
  console.log("🙂 Ok: Podemos melhorar!.")
}