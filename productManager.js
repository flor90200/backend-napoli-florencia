import { promises as fs} from "fs"



class productManager {
  
    constructor (){
        this.patch = "./productos.txt";
        this.products = []

    }

static id = 0


addProduct = async ( title, description, price, imagen, code, stock) => {
   
   productManager.id++;
    let newProduct = {
        title,
        description,
        price,
        imagen,
        code,
        stock,
        id: productManager.id
    };

    this.products.push(newProduct)

    await fs.writeFile(this.patch, JSON.stringify(this.products));
};

readProducts = async () => {
    let respuesta = await fs.readFile(this.patch, "utf-8")
    return JSON.parse(respuesta)
}

getProducts = async () => {
    let respuesta2 = await this.readProducts()

return console.log(respuesta2)
}

getProductsById = async (id) => {
let respuesta3 = await this.readProducts()
if(!respuesta3.find(product => product.id === id)){
    console.log("Producto no encontrado")
} else {
    console.log(respuesta3.find(product => product.id === id))
}
};

deleteProductsById = async (id) => {

    let respuesta3 = await this.readProducts();
    let productFilter = respuesta3.filter(products => products.id != id)
    await fs.writeFile(this.patch, JSON.stringify(productFilter));
    console.log("Producto eliminado")
};

updateProducts = async ({ id, ...producto}) => {
    await this.deleteProductsById(id);
    let productOld = await this.readProducts();
    console.log(productOld);
    let productsModif = [{ ...producto, id }, ...productOld];
    await fs.writeFile(this.patch, JSON.stringify(productsModif));
};

}

const productos = new productManager();
//productos.addProduct("Clasicas", "descripcion", 3500, "img", "hola", 20)
//productos.addProduct("Vol Bajo", "descripcion1", 3800, "img1", "hola1", 21)
//productos.addProduct("Vol Medio", "descripcion2", 4200, "img2", "hola2", 18)
//productos.addProduct("Vol Ruso", "descripcion3", 5000, "img3", "hola3", 12)
//productos.addProduct("Mega Volumen", "descripcion4", 6000, "img4", "hola4", 4)

//productos.getProducts()

//productos.getProductsById(3)

//productos.deleteProductsById(2)

productos.updateProducts({
    title: "Vol Medio",
    description: "descripcion2",
    price: 4500,
    imagen: "imagen2",
    code:"hola2",
    stock: 18, 
    id: 3,
});