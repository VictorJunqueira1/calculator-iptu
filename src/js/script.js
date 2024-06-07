function calcularIPTU(event) {
    event.preventDefault();

    var valorTotal = parseFloat(document.getElementById("valorTotal").value);
    var mesesFaltantes = parseInt(document.getElementById("mesesFaltantes").value);

    if (isNaN(valorTotal) || isNaN(mesesFaltantes)) {
        alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }

    var iptuMensal = valorTotal / 12;
    var valorDevido = iptuMensal * mesesFaltantes;

    document.getElementById("resultado").innerHTML = "Resultado final: " + `<strong>R$ ${valorDevido.toFixed(2)}</strong>`;
}