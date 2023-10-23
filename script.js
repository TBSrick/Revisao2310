const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const calcularSomaBtn = document.getElementById('calcularSoma');
const resultadoSoma = document.getElementById('resultadoSoma');
const historicoSomas = document.getElementById('historicoSomas');
const limparHistoricoBtn = document.getElementById('limparHistorico');
 
window.onload = function() {
    const somasSalvas = JSON.parse(localStorage.getItem('historicoSomas')) || [];
    somasSalvas.forEach(soma => {
        const listItem = document.createElement('li');
        listItem.textContent = soma;
        historicoSomas.appendChild(listItem);
    });
};
 
calcularSomaBtn.addEventListener('click', function() {
    const valorNum1 = parseFloat(num1.value);
    const valorNum2 = parseFloat(num2.value);
    const soma = valorNum1 + valorNum2;
 
    resultadoSoma.textContent = "Resultado: " + soma;
 
    // Salva a soma no histórico no localStorage
    const textoSoma = `${valorNum1} + ${valorNum2} = ${soma}`;
    const somasSalvas = JSON.parse(localStorage.getItem('historicoSomas')) || [];
    somasSalvas.push(textoSoma);
    localStorage.setItem('historicoSomas', JSON.stringify(somasSalvas));
 
    // Adiciona a nova soma à lista de histórico na página
    const listItem = document.createElement('li');
    listItem.textContent = textoSoma;
    historicoSomas.appendChild(listItem);
});
 
limparHistoricoBtn.addEventListener('click', function() {
    localStorage.removeItem('historicoSomas'); // Remove o histórico do localStorage
    historicoSomas.innerHTML = ''; // Limpa o histórico na página
});