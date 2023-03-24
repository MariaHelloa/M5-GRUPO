import database from "../infra/bd.js";

class lojaDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM  loja");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM loja WHERE id = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO loja (idloja, nome, cnpj , funcionarios ,distribuidoras) VALUES (?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: " loja inserido com sucesso na tabela loja" },
      status: 201,
    };
  }
}

export default lojaDAO;