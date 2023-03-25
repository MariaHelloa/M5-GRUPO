import database from "../infra/bd.js";

class ClientesDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM clientes ");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM clientes WHERE email = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO clientes (idclientes, nome, email,senha,celular) VALUES (?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: " clientes inserido com sucesso na tabela clientes" },
      status: 201,
    };
  }
}

export default ClientesDAO;
