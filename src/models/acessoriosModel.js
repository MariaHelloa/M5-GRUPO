import bd from "../infra/bd.js";

const acessoriosModel = {
  modelar: (obj) => {
    return {
      id: obj.id,
      nome: obj.nome,
      tipo: obj.tipo,
      descricao: obj.descricao,
      preco: obj.preco,
    };
  },
  };
  
  
export default acessoriosModel;