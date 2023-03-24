import lojaModel from "../models/lojaModel.js";
import lojaDAO from "../DAO/lojaDAO.js";


    const lojaController = (app) => {
    app.get("/loja", async (req, res) => {
      const resposta = await clientesDAO.mostrarTodos();
      res.status(resposta.status).send(resposta.dados);
    });
    app.get("/loja/email/:email", async (req, res) => {
      const resposta = await clientesDAO.mostrarUm(req.params.email);
      res.status(resposta.status).send(resposta.dados);
    });
    app.post("/loja", async (req, res) => {
      const modelado = clientes.modelar(req.body)
      const resposta = await clientesDAO.inserir(modelado)
      res.status(resposta.status).send(resposta.dados);
    });
  };

  export default lojaController;