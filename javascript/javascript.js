function formatCurrency(value) {
    value = value.replace(/\D/g, ""); // Remove tudo que não for dígito
    value = (value / 100).toFixed(2) + ""; // Divide por 100 e fixa 2 casas decimais
    value = value.replace(".", ","); // Substitui ponto por vírgula
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // Adiciona os pontos de milhar
    return value;
}

function applyMask(input) {
    input.value = formatCurrency(input.value);
}