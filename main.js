// Boton de pregunta si a la persona le gusta los gatos
// const addMensajeCat = document.querySelectorAll('.preguntaGatito');
// addMensajeCat.forEach((addToCartButton) => {
//     addToCartButton.addEventListener('click', () => addToClickedGatito;
// });



// const btnAskGatunaContainer = document.querySelector(
//     '.btnAskGatuna'
// );



// Funcion para escuchar click de agreagar 
// Aqui uso query para extraer todas las clases con agregarAlCarrito
const addToShoppingButton = document.querySelectorAll('.agregarAlCarrito');

addToShoppingButton.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

// Utilizo query para selecionar el contenedor del carrito
const carritoContainer = document.querySelector(
    '.containerCartProducts' 
);


function addToCartClicked(event) {
    const button = event.target;
    const product = button.closest('.product');

    // Utilizo query para traer los elementos que usare para enviar al carrito
    const itemTitle = product.querySelector('.item-title').textContent;
    const itemPrecio = product.querySelector('.item-precio').textContent;
    const itemIMG = product.querySelector('.item-img').src;

    addItemToShoppingCart(itemTitle,itemPrecio, itemIMG);

}

function addItemToShoppingCart(itemTitle,itemPrecio, itemIMG) {
    const carritoContainerRow = document.createElement('div');
    const shoppingCartContent = `
        <div class="item-Selecionado">
            <img src=${itemIMG} alt="${itemTitle}" class="imagen-en-el-carrito">
            <h5 class="titulo-en-el-carrito">${itemTitle}</h5>
            <p class="precio-en-el-carrito">${itemPrecio}</p>
        </div>
    `

    carritoContainerRow.innerHTML = shoppingCartContent;
    carritoContainer.append(carritoContainerRow);

}