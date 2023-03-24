import bd from "../infra/bd.js";

const clientesModel = {
  modelar: (obj) => {
    return {
      id: obj.id,
      nome: obj.nome,
      email: obj.email
    };
  },
  };
  
  
export default clientesModel;
