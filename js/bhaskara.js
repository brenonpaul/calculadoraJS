import { bhaskara } from './calculadora.js'

function imprimir(){
    const a = document.getElementById("a").value
    const b = document.getElementById("b").value
    const c = document.getElementById("c").value
    
    const result = bhaskara(a, b, c)
    document.getElementById("res").innerHTML = "<h2><b>S = </b>{"+(typeof(result.x1) == "number"? result.x1.toFixed(2): result.x1 )+ ", "+(typeof(result.x2) == "number"?result.x2.toFixed(2): result.x2)+"}</h2>"
}

document.getElementById("botao").addEventListener("click", imprimir);