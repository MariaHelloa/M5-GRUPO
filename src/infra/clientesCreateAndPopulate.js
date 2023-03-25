import database from "./bd.js";

database.connection.connect();

database.connection.query(
  "CREATE TABLE `test`.`clientes` (`idclientes` INT NULL,`nome` VARCHAR(45) NULL,`email` VARCHAR(45),`senha` VARCHAR(45) NULL,`celular` VARCHAR(12) NULL,  PRIMARY KEY(`idclientes`));",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("tabela clientes criada com sucesso");
    }
  }
);
database.connection.query(
    "INSERT INTO clientes (idclientes, nome, email,senha,celular) VALUES ( 1, 'Janete Silva' , 'janete@gmail.com','olam','219655173' ), ( 2, 'Marinete Camargo' , 'camargo@yahoo.com','olamund','21981345173' ) , ( 3, 'Fernando Sousa' , 'sousa2@gmail.com','olamundo','21981345173' );",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela clientes populada com sucesso");
      }
    }
  );

database.connection.end();
