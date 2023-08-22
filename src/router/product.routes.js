import { Router } from "express";
import productManager from "../controllers/productManager.js";
const ProductRouter = Router()
const product = new productManager();


ProductRouter.get("/", async (req, res) => {
    res.send(await product.getproducts());
})

ProductRouter.get("/:id", async (req, res) => {
    let id = req.params.id;
    res.send(await product.getproductsById(id));
})
ProductRouter.post("/", async (req, res)=>{
      let newProduct = req.body;
      res.send(await product.addProducts(newProduct)); 
});

ProductRouter.delete("/:id", async (req, res)=>{
    let id = req.params.id;
    res.send(await product.deleteProducts(id));
})

ProductRouter.put("/:id", async (req, res)=>{
    let id  = req.params.id;
    let UpdateProducts = req.body;
    res.send(await product.UpdateProducts(id, UpdateProducts));

});


export default ProductRouter;