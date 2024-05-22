const valores = [2.0, 3.5, 4];
const produtos = ['tacaca', 'vatapa', 'bolo'];

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
    localStorage.setItem(`produto_${cod}`, produtos[cod]);
    localStorage.setItem(`valor_${cod}`, valores[cod]);
    localStorage.setItem(`quant_${cod}`, quant.value);
    window.location.href = 'index.html';
}

function comandar(){
    var el = document.getElementById('comanda');
    for(var i=0; i<localStorage.length; i+=3){
        var linha = `
        <tr>
            <td>${localStorage.key(i)}</td>
            <td>${localStorage.key(i+1)}</td>
            <td>5,50</td>
            <td>16,50</td>
        </tr>`;
    }
}