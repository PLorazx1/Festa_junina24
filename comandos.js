const valores = [15, 10, 5, 8, 8, 8, 5, 3, 5, 5, 5, 5, 3, 5];
const produtos = [
'tacacá', 'vatapá', 'churrasco', 'arroz com galinha', 'hot dog', 'caldo de galinha', 
'mingual de milho branco', 'pipoca','bolo', 'sucos', 'refrigerante', 'cerveja', 'água', 'jogos'
];
if(localStorage.length == 0) localStorage.setItem('i', 0);

function comprar(cod){
    window.location.href = `confirmacao.html?cod=${cod}`;
}

function proc_produto(){
    const urlParams = new URLSearchParams(window.location.search);
    const cod = urlParams.get('cod');
    var el = document.getElementById('interativo');
    el.innerHTML = `<h3>Você deseja comprar ticketes para <strong>${produtos[cod]}</strong>.</h3>`;
}

function cancelar(){
    window.location.href = 'index.html';
}

function confirmar(){
    const urlParams = new URLSearchParams(window.location.search);
    const cod = urlParams.get('cod');
    var quant = document.getElementById('input_quant');
    if (quant.value > 0){
        localStorage.setItem(`produto_${localStorage.getItem('i')}`, produtos[cod]);
        localStorage.setItem(`valor_${localStorage.getItem('i')}`, valores[cod]);
        localStorage.setItem(`quant_${localStorage.getItem('i')}`, quant.value);
        localStorage.setItem('i', (Number(localStorage.getItem('i')) + 1));
        window.location.href = 'index.html';
    }
    else {
        cancelar();
    }
}

function comandar(){
    var super_total = 0;
    for(var j=0; j<(Number(localStorage.getItem('i'))); j++){
        var el = document.getElementById('comanda');
        var produto = localStorage.getItem(`produto_${j}`);
        var quant = localStorage.getItem(`quant_${j}`);
        var preco = localStorage.getItem(`valor_${j}`);
        var total = quant * preco;
        super_total += total;
        var linhas = `<tr>
                <td>${produto}</td>
                <td>${quant}</td>
                <td>${preco},00</td>
                <td>${total},00</td>
            </tr>`
        el.insertAdjacentHTML('beforeend', linhas);
    }
    var el = document.getElementById('super_total');
    var ult_linha = `<tr>
    <td>----</td>
    <td>----</td>
    <td>Total:</td>
    <td>${super_total},00</td>
    </tr>`;
    el.innerHTML = ult_linha;
}

function limpar(){
    localStorage.clear();
    window.location.href = 'index.html';
}