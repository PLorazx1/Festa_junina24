var produto, preco, quantidade;
var pedidos = [];
/* TENTATIVA POR ID
function testing(id){
    
    var teste = document.querySelector(`#${id}`);
    alert(id);
    
};*/

//TENTATIVA POR LISTAS
const valores = [2.0, 3.5, 4];
const produtos = ['tacaca', 'vatapa', 'bolo'];

function comprar(cod){
    preco = valores[cod];
    produto = produtos[cod];
    window.location.href = 'confirmacao.html';
};

function cancelar(){
    preco = undefined;
    produto = undefined;
    window.location.href = 'index.html';
};

function confirmar(){
    quantidade = document.querySelector('input_quant');
    console.log(produto);
};