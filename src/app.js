import express from "express";
import clientesController from "./controllers/clientesController.js";
import lojaController from "./controllers/lojaController.js";
import instrumentosController from "./controllers/instrumentosController.js";
import acessoriosController from "./controllers/acessoriosController.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/testedeploy", (req, res) => {
  res.status(200).send({ msg: "Api sendo acessada remotamente" });
});


clientesController(app);
lojaController(app);
instrumentosController(app);
acessoriosController(app);


export default app;
