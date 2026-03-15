import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes); // use the product routes for any requests to /api/products 
 
app.listen(PORT, () => {
    connectDB(); // connect to the database when the server starts
    console.log("Server started at http://localhost:" + PORT);
});

