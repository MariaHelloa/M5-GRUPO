import database from "./bd.js";

database.connection.connect();

database.connection.query(
  "CREATE TABLE `test`.`clientes` (`idclientes` INT NULL,`nome` VARCHAR(11) NULL,`email` VARCHAR(12) NULL,PRIMARY KEY(`idclientes`));",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("tabela clientes criada com sucesso");
    }
  }
);
database.connection.query(
    "INSERT INTO clientes (idclientes, nome, email) VALUES ( 1, 'Janete Silva' , 'janete@gmail.com' ), ( 2, 'Marinete Camargo' , 'camargo@yahoo.com' ) , ( 3, 'Fernando Sousa' , 'sousa2@gmail.com' );",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela clientes populada com sucesso");
      }
    }
  );

database.connection.end();
