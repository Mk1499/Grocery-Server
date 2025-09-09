import express from "express";
import cors from "cors";
import { mongooseConnection } from "./utils/dbConn.js";

import productRouter from "./routes/products.routes.js";
import categoryRouter from "./routes/categories.routes.js";

const app = express();
const port = 3000;
app.use(cors());

mongooseConnection();

app.use(express.json());
app.use("/product", productRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
