import bd from "../infra/bd.js";

const lojaModel = {
  modelar: (obj) => {
    return {
      id: obj.id,
      nome: obj.nome,
      cnpj: obj.cnpj,
      funcionarios: obj.funcionarios,
      distribuidoras: obj.distribuidoras
    };
  },
  };
  
  
export default lojaModel;