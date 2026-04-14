
function mostrarvista(vista){
document.getElementById("view-home").classList.remove("active");
document.getElementById("view-menu").classList.remove("active");
document.getElementById("view-contact").classList.remove("active");

document.getElementById("view-" + vista).classList.add("active");
}


// const persona = [
// {
//     id: 1,
//     nombre: "carlos",
//     apellido: "guzman",
//     edad: 21,
// },
// {
//     id: 1,
//     nombre: "carlos",
//     apellido: "guzman",
//     edad: 21,
// },

// ];


const productos = [
    {
        id:1,
        nombre: "cafe",
        descripcion: "cafe clasico",
        precio: 12,
    },
    {
        id:2,
        nombre: "brownie",
        descripcion: "masa de chocolate",
        precio: 8,
    },
    {
        id:3,
        nombre: "capuccino",
        descripcion: "expreso con leche",
        precio: 18,
    },
    {
        id:4,
        nombre: "cuernito",
        descripcion: "masa con relleno con queso",
        precio: 10,
    },
    {
        id:4,
        nombre: "cuernito",
        descripcion: "masa con relleno con queso",
        precio: 10,
    },
    {
        id:4,
        nombre: "cuernito",
        descripcion: "masa con relleno con queso",
        precio: 10,
    },
    {
        id:4,
        nombre: "cuernito",
        descripcion: "masa con relleno con queso",
        precio: 10,
    },

];

// console.log(productos[1].nombre)


function renderizarproducto() {
const contenedor = document.getElementById("products-container");

contenedor.innerHTML ="";

productos.forEach(function (producto) {
contenedor.innerHTML += `<div class = "product-card">
<h3>${producto.nombre}</h3>
<p>${producto.descripcion}</p>
<span>${producto.precio}</span>
</div>`;
});

}

renderizarproducto();
