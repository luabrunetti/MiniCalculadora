
document.getElementById("somarbutton").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var soma = valor1 + valor2; 
    resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Soma: " + soma;
})

document.getElementById("subtrairbutton").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var subtrair = valor1 - valor2; 
    resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Subtração: " + subtrair; 
})


document.getElementById("multiplicarbutton").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var multiplicar = valor1 * valor2;
    resultadoElement = document.getElementById("resultado"); 
    resultadoElement.textContent = "Multiplicação: " + multiplicar; 
})

document.getElementById("divisaobutton").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var dividir = valor1 / valor2; 
    resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Divisão: " + dividir; 
})