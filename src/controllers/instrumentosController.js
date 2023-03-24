import instrumentosModel from "../models/instrumentosModel.js";
import instrumentosDAO from "../DAO/instrumentosDAO.js";


    const instrumentosController = (app) => {
    app.get("/instrumentos", async (req, res) => {
      const resposta = await clientesDAO.mostrarTodos();
      res.status(resposta.status).send(resposta.dados);
    });
    app.get("/instrumentos/email/:email", async (req, res) => {
      const resposta = await clientesDAO.mostrarUm(req.params.email);
      res.status(resposta.status).send(resposta.dados);
    });
    app.post("/instrumentos", async (req, res) => {
      const modelado = clientes.modelar(req.body)
      const resposta = await clientesDAO.inserir(modelado)
      res.status(resposta.status).send(resposta.dados);
    });
  };

  export default instrumentosController;