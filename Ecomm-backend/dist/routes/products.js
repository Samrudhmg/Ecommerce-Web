import express from 'express';
import { deleteProduct, getAdminProducts, getAllcategories, getAllproducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from '../controllers/product.js';
import { singleUpload } from '../middlewares/multer.js';
import { adminOnly } from '../middlewares/auth.js';
const app = express.Router();
app.post("/new", adminOnly, singleUpload, newProduct);
app.get("/all", getAllproducts);
app.get("/latest", getlatestProducts);
app.get("/categories", getAllcategories);
app.get("/admin-products", getAdminProducts);
app.route("/:id").get(getSingleProduct).put(adminOnly, singleUpload, updateProduct).delete(adminOnly, deleteProduct);
export default app;
