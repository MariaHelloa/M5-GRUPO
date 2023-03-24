import database from "../infra/bd.js";

class InstrumentosDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM  instrumentos");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM instrumentos WHERE id = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO instrumentos (idinstrumentos, nome,  tipo , descrição ,preço) VALUES (?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: " instrumentos inserido com sucesso na tabela instrumentos" },
      status: 201,
    };
  }
}

export default InstrumentosDAO;