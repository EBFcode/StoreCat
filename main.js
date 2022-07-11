
// Utilizando Fetch (Esta api esta en mi GitHub para pintar los productos)
const contenedorProductos = document.getElementById('contenedorProductos');


fetch('https://imcod3r.github.io/CatStoreApi/api.json')
    .then( (res) => res.json() )
    .then( (data) => {
        console.log(data)
        data.forEach(post => {
            const product =  document.createElement('div');
            product.innerHTML = ` 

                <div class="product">
                    <img class="item-img" src=${post.url} alt="fotoProduct">
                    <div class="detalles-producto">
                        <h3 class="item-title">${post.titulo}</h3>
                        <br>
                        <h4 class="item-precio">$${post.precio}</h4>
                    </div>
                    <button class="agregarAlCarrito">Agregar al carrito</button>
                </div>
            ` 

            contenedorProductos.append(product)
        });
    } );



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