const valores = [2.0, 3.5, 4];
const produtos = ['tacaca', 'vatapa', 'bolo'];
if(localStorage.length == 0) localStorage.setItem('i', 0);

function comprar(cod){
    window.location.href = `confirmacao.html?cod=${cod}`;
}

function proc_produto(){
    const urlParams = new URLSearchParams(window.location.search);
    const cod = urlParams.get('cod');
    var el = document.getElementById('interativo');
    el.innerHTML = `<h3>Você deseja comprar ticketes para ${produtos[cod]}.</h3>`;
}

function cancelar(){
    window.location.href = 'index.html';
}

function confirmar(){
    const urlParams = new URLSearchParams(window.location.search);
    const cod = urlParams.get('cod');
    var quant = document.getElementById('input_quant');
    localStorage.setItem(`produto_${localStorage.getItem('i')}`, produtos[cod]);
    localStorage.setItem(`valor_${localStorage.getItem('i')}`, valores[cod]);
    localStorage.setItem(`quant_${localStorage.getItem('i')}`, quant.value);
    localStorage.setItem('i', (Number(localStorage.getItem('i')) + 1));
    window.location.href = 'index.html';
}

function proc_valor(prod){
    for(var i=0; i<produtos.length; i++){
        if(produtos[i]===prod) return valores[i];
    }
    return null;
}

function comandar(){
    var super_total = 0;
    var el = document.getElementById('comanda');
    for(var j=0; j<((localStorage.length - 1)/3); j++){
        var produto = localStorage.getItem(`produto_${j}`);
        var quant = localStorage.getItem(`quant_${j}`);
        var preco = proc_valor(produto);
        var total = quant * preco;
        var linha = `
        <tr>
            <td>${produto}</td>
            <td>${quant}</td>
            <td>${preco}</td>
            <td>${total}</td>
        </tr>`;
        super_total += total;
        el.innerHTML = linha;
    }
    var ult_linha = `
    <tr>
        <td>----</td>
        <td>----</td>
        <td>Total:</td>
        <td>${super_total}</td>
    </tr>`;
    el.innerHTML = ult_linha;
}