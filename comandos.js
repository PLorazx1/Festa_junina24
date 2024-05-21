const valores = [2.0, 3.5, 4];
const produtos = ['tacaca', 'vatapa', 'bolo'];

function comprar(cod){
    localStorage.setItem(`produto_${cod}`, produtos[cod]);
    localStorage.setItem(`valor_${cod}`, valores[cod]);
    window.location.href = `confirmacao.html?cod=${cod}`;
}

function proc_produto(){
    const urlParams = new URLSearchParams(window.location.search);
    const cod = urlParams.get('cod');
    var el = document.getElementById('interativo');
    el.innerHTML(`<h3>Você deseja comprar ticketes para <strong>${produtos[cod]}</strong>.</h3>`)
}

function cancelar(){
    const urlParams = new URLSearchParams(window.location.search);
    const cod = urlParams.get('cod');
    localStorage.removeItem(`produto_${cod}`);
    localStorage.removeItem(`valor_${cod}`);
    window.location.href = 'index.html';
}

function confirmar(){
    const urlParams = new URLSearchParams(window.location.search);
    const cod = urlParams.get('cod');
    var quant = document.getElementById('input_quant');
    localStorage.setItem(`quant_${cod}`, quant.value);
}