
// Inicio da lista de compras

var $lista = document.querySelector ('ul');
var $produto = document.querySelector ('#produto');
var $botao = document.querySelector ('#btn');


$botao.addEventListener('click', addProduto); 


function addProduto() {

    var item = '<li>' + $produto.value + '</li>';
    $lista.innerHTML += item;
    $produto.value = '';
    $produto.focus();

}


$produto.addEventListener ('Keyup', function(e){

if (e.keyCode === 13) {
    addProduto ()

}

})


// fim da lista de compras