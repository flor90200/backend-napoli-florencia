import express from "express";
import productManager from "./components/productManager.js";

const app = express();
app.use(express.urlencoded({ extended : true }));

const productos = new productManager();
const readProducts = productos.readProducts();

app.get("/products", async (req,res) => {
    let limit = parseInt (req.query.limit);
   if(!limit) return res.send(await readProducts)
   let allProducts = await readProducts
   let ProductLimit = allProducts.slice(0, limit)
res.send(ProductLimit);
});

app.get("/products/:id", async (req, res) => {
    let id = parseInt (req.params.id);
    let allProducts = await readProducts
    let ProductById = allProducts.find(product => product.id === id);
    res.send(ProductById)
})
;
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log (`Express por Local Host ${server.address().port}`)
});
server.on('error', (error) => console.log (`Error del servidor ${error}`))