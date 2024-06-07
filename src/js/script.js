document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculateButton").addEventListener("click", calcularIPTU);
});

function calcularIPTU(event) {
    event.preventDefault();

    const valorTotal = parseFloat(document.getElementById("valorTotal").value);
    const mesesFaltantes = parseInt(document.getElementById("mesesFaltantes").value);
    const mensagemErro = document.getElementById("mensagemErro");
    const resultado = document.getElementById("resultado");

    mensagemErro.textContent = "";
    resultado.textContent = "";

    if (isNaN(valorTotal) || isNaN(mesesFaltantes)) {
        mensagemErro.textContent = "Por favor, preencha todos os campos com valores numéricos.";
        return;
    }

    const iptuMensal = valorTotal / 12;
    const valorDevido = iptuMensal * mesesFaltantes;

    resultado.innerHTML = `Resultado final: <strong>R$ ${valorDevido.toFixed(2)}</strong>`;
}

function handlePrint() {
    const anotacoes = document.getElementById("anotacoes").value.trim();

    if (!anotacoes) {
        document.getElementById("anotacoes").classList.add("hidden-on-print");
    } else {
        document.getElementById("anotacoes").classList.remove("hidden-on-print");
    }

    window.print();
}