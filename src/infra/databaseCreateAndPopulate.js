import database from "./bd.js";

database.connection.connect();

database.connection.query(
"CREATE TABLE `test`.`clientes` (`idclientes` INT NULL,`nome` VARCHAR(45) NULL,`email` VARCHAR(45),`senha` VARCHAR(45) NULL,`celular` VARCHAR(12) NULL,  PRIMARY KEY(`idclientes`); CREATE TABLE `test`.`instrumentos`(`idinstrumentos` INT NULL,`nome` VARCHAR(99) NULL,`tipo`VARCHAR(99) NULL,`descricao`VARCHAR(900) NULL, `preco` FLOAT NULL, PRIMARY KEY(`idinstrumentos`); CREATE TABLE `test`.`acessorios` (`idacessorios` INT NULL,`nome` VARCHAR(10) NULL,`tipo` VARCHAR(99),`descrição` VARCHAR(50) NULL,`preço` FLOAT,  PRIMARY KEY(`idacessorios`)CREATE TABLE `test`.`loja` (`idloja` INT NULL,`nome` VARCHAR(10) NULL,`cnpj` VARCHAR(50),`funcionarios` VARCHAR(50) NULL,`distribuidora` VARCHAR(50),  PRIMARY KEY(`idloja`);",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("tabela clientes criada com sucesso");
      console.log("tabela instrumentos criada com sucesso");
      console.log("tabela acessorios criada com sucesso");
      console.log("tabela loja criada com sucesso");
    }
  }
);
database.connection.query(
    "INSERT INTO clientes (idclientes, nome, email, senha, celular) VALUES ( 1, 'Janete Silva' , 'janete@gmail.com','olam','219655173' ), ( 2, 'Marinete Camargo', 'camargo@yahoo.com', 'olamund', '21981345173' ) , ( 3, 'Fernando Sousa' , 'sousa2@gmail.com','olamundo','21981345173' ); INSERT INTO instrumentos  (idinstrumentos, nome, tipo, descricao, preco) VALUES (1,'Violino', 'Cordas', 'aa','700') INSERT INTO acessorios  (idacessorios, nome, tipo, descricao, preço) VALUES (1,'Violino', 'Espaleira', 'bb','86') INSERT INTO loja  (idloja, nome, cnpj, funcionarios, distribudoras) VALUES (1,'Tech Music Instrumentos','34.466.523/0001-40' ,'Melissa Alburquerque, Antonio da Silva, Miguel Pereira', ' Takamine,  Tagima Jet Blues, Yamaha',)",

    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela clientes populada com sucesso");
        console.log("tabela instrumentos populada com sucesso");
        console.log("tabela acessorios poupulada com sucesso");
        console.log("tabela loja poupulada com sucesso");
      }
    }
  );

database.connection.end();
