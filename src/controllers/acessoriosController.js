import acessoriosModel from "../models/acessoriosModel.js"
import acessoriosDAO from "../DAO/acessoriosDAO.js";


    const acessoriosController = (app) => {
    app.get("/acessorios", async (req, res) => {
      const resposta = await clientesDAO.mostrarTodos();
      res.status(resposta.status).send(resposta.dados);
    });
    app.get("/acessorios/email/:email", async (req, res) => {
      const resposta = await clientesDAO.mostrarUm(req.params.email);
      res.status(resposta.status).send(resposta.dados);
    });
    app.post("/acessorios", async (req, res) => {
      const modelado = clientes.modelar(req.body)
      const resposta = await clientesDAO.inserir(modelado)
      res.status(resposta.status).send(resposta.dados);
    });
  };

  export default acessoriosController;