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
    el.innerHTML = `<h3>Você deseja comprar ticketes para <strong>${produtos[cod]}</strong>.</h3>`;
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

function comandar(){
    var super_total = 0;
    for(var j=0; j<(Number(localStorage.getItem('i'))); j++){
        var el = document.getElementById('comanda');
        var produto = localStorage.getItem(`produto_${j}`);
        var quant = localStorage.getItem(`quant_${j}`);
        var preco = localStorage.getItem(`valor_${j}`);
        var total = quant * preco;
        super_total += total;
        var linhaNova = document.createElement('tr');
        // var colunaNova = document.createElement('td');
        var td_produto = document.createElement('td').appendChild(document.createTextNode(`${produto}`));
        linhaNova.appendChild(td_produto);
        var td_quant = document.createElement('td').appendChild(document.createTextNode(`${quant}`));
        linhaNova.appendChild(td_quant);
        var td_preco = document.createElement('td').appendChild(document.createTextNode(`${preco}`));
        linhaNova.appendChild(td_preco);
        var td_total = document.createElement('td').appendChild(document.createTextNode(`${total}`));
        linhaNova.appendChild(td_total);
        el.append(linhaNova);
        // linhaNova.innerHTML = `
        // <td>${produto}</td>
        // <td>${quant}</td>
        // <td>${preco}</td>
        // <td>${total}</td>`;
    }
    var el = document.getElementById('super_total');
    var ult_linha = `<tr>
    <td>----</td>
    <td>----</td>
    <td>Total:</td>
    <td>${super_total}</td>
    </tr>`;
    el.innerHTML = ult_linha;
}

function limpar(){
    localStorage.clear();
    window.location.href = 'index.html';
}