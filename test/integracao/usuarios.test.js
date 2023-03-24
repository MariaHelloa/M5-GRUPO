import app from "../../src/app.js";
import request from "supertest";

const testar = () => {
  describe("Teste de rota deploy", () => {
    test("Rota GET", async () => {
      const resposta = await request(app).get("/testedeploy");
      expect(resposta.status).toBe(200);
    });
  });
};

testar()