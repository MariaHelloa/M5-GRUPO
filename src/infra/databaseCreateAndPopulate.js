import database from "./bd.js";

database.connection.connect();

database.connection.query(
"CREATE TABLE `test`.`clientes` (`idclientes` INT NULL,`nome` VARCHAR(45) NULL,`email` VARCHAR(45),`senha` VARCHAR(45) NULL,`celular` VARCHAR(12) NULL,  PRIMARY KEY(`idclientes`); CREATE TABLE `test`.`instrumentos`(`idinstrumentos` INT NULL,`nome` VARCHAR(99) NULL,`tipo`VARCHAR(99) NULL,`descricao`VARCHAR(900) NULL, `preco` FLOAT NULL, PRIMARY KEY(`idinstrumentos`);",


  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("tabela clientes criada com sucesso");
      console.log("tabela instrumentos criada com sucesso");
    }
  }
);
database.connection.query(
    "INSERT INTO clientes (idclientes, nome, email, senha, celular) VALUES ( 1, 'Janete Silva' , 'janete@gmail.com','olam','219655173' ), ( 2, 'Marinete Camargo', 'camargo@yahoo.com', 'olamund', '21981345173' ) , ( 3, 'Fernando Sousa' , 'sousa2@gmail.com','olamundo','21981345173' ); INSERT INTO instrumentos  (idinstrumentos, nome, tipo, descricao, preco) VALUES (1,'Violino', 'Cordas', 'aa','700')",

    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela clientes populada com sucesso");
        console.log("tabela instrumentos populada com sucesso");
      }
    }
  );

database.connection.end();
