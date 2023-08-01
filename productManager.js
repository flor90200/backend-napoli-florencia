class productManager {
  
    constructor (){
        this.products= []
        this.events = []

    }
static id = 0

addProduct(title, Descripción, price, image, code, stock) {

    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].code === code) {
            console.log (`El codigo ${code} esta repetido `);
            break;
        }
    }

    const newProduct ={
        title, Descripción, price, image, code, stock, 
    }
if(!Object.values(newProduct).includes(undefined)){
       productManager.id++
this.products.push({
    ...newProduct,
     id:productManager.id,
});    
}else{
    console.log('Todos los campos son requeridos')
}
}

getProduct(){
    return this.products;
}
existe (id){
    return this.products.find((producto) => producto.id === id)
}

getProductById(id){
    !this.existe(id) ?  console.log('Not Found') : console.log(this.existe(id));
    }
}


const productos = new productManager;
console.log(productos.getProduct());
productos.addProduct('pestañas', 'description', 3500, 'imgagen', 'abdc', '5');
productos.addProduct('pestañas', 'description2', 4200, 'imgagen', 'abd', '10');

//segunda llamada
console.log(productos.getProduct());

//validacion de code repetido
productos.addProduct('pestañas', 'description2', 4200, 'imgagen', 'abd4', '10');

//busqueda de producto por id 
(productos.getProductById(1))

//busqueda por id no encontrado 
productos.getProductById(4);