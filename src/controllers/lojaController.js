import lojaModel from "../models/lojaModel.js";
import lojaDAO from "../DAO/lojaDAO.js";


    const lojaController = (app) => {
    app.get("/loja", async (req, res) => {
      const resposta = await lojaDAO.mostrarTodos();
      res.status(resposta.status).send(resposta.dados);
    });
    app.get("/loja/id/:id", async (req, res) => {
      const resposta = await lojaDAO.mostrarUm(req.params.id);
      res.status(resposta.status).send(resposta.dados);
    });
    app.post("/loja", async (req, res) => {
      const modelado = lojaModel.modelar(req.body)
      const resposta = await lojaDAO.inserir(modelado)
      res.status(resposta.status).send(resposta.dados);
    });

    app.delete("/loja/id/:id", async(req, res) => {
      const resposta = await lojaDAO.deletar(req.params.id,req.body)
      res.status(resposta.status).send(resposta.dados)
    });
    app.put("/loja/id/:id", async (req, res) => {
      const resposta = await lojaDAO.atualizar(req.params.id, req.body);
      res.status(resposta.status).send(resposta.dados);
    });
  };

  export default lojaController;
