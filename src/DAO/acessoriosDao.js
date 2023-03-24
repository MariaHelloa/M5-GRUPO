import database from "../infra/bd.js";

class AcessoriosDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM acessorios");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM acessorios WHERE id = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO acessorios (idacessorios, nome, tipo ,descrição, preço) VALUES (?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "acessorios inserido com sucesso na tabela acessorios" },
      status: 201,
    };
  }
}

export default AcessoriosDAO;