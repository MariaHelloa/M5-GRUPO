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
  static async atualizar(id, obj) {
    try {
      if (!obj) {
        return {
          dados: { msg: "Objeto de atualização não fornecido" },
          status: 400,
        };
      }     
      await database.query("UPDATE loja SET nome = ?, cnpj = ?, funcionarios = ?, distribuidores = ? WHERE id = ?", [
        obj.nome,
        obj.cnpj,
        obj.funcionarios,
        obj.distribuidores,
        id,
      ]);
    } catch (error) {
      console.log(error);
      return {
        dados: { msg: "Erro ao atualizar a loja", error: error.message },
        status: 500,
      };
    }
    
    return {
      dados: { msg: "Loja atualizado com sucesso na tabela Loja" },
      status: 200,
    };
  }

  static async deletar(id) {
    try {
      await database.query("DELETE FROM loja WHERE id = ?", [id]);
    } catch (error) {
      console.log(error);
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Loja deletada com sucesso da tabela Loja" },
      status: 200,
    };
  }
}

export default lojaDAO;
