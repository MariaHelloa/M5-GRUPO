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
  static async atualizar(id, obj) {
    try {
      if (!obj) {
        return {
          dados: { msg: "Objeto de atualização não fornecido" },
          status: 400,
        };
      }     
      await database.query("UPDATE acessorios SET nome = ?, tipo = ?, descricao = ?, preco = ? WHERE id = ?", [
        obj.nome,
        obj.tipo,
        obj.descricao,
        obj.preco,
        id,
      ]);
    } catch (error) {
      console.log(error);
      return {
        dados: { msg: "Erro ao atualizar o acessorio", error: error.message },
        status: 500,
      };
    }
    
    return {
      dados: { msg: "Acessorio atualizado com sucesso na tabela Acessorio" },
      status: 200,
    };
  }

  static async deletar(id) {
    try {
      await database.query("DELETE FROM acessorios WHERE id = ?", [id]);
    } catch (error) {
      console.log(error);
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Acessorio deletado com sucesso da tabela Acessorio" },
      status: 200,
    };
  }
}

export default AcessoriosDAO;
