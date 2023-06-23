### Projeto de Listagem de Produtos - README
Este projeto consiste em uma aplicação web para listagem, adição, edição e remoção de produtos. O frontend foi desenvolvido utilizando a biblioteca React.js e o backend foi implementado em Node.js, com um banco de dados MySQL para armazenar as informações dos produtos.

### Funcionalidades
Listagem de produtos: Os produtos são exibidos em uma tabela, mostrando o ID, nome, descrição, preço e disponibilidade para compra. É possível visualizar todos os produtos cadastrados.

Adição de produtos: Através de um modal, é possível adicionar novos produtos. Os campos necessários são ID, nome, descrição, preço e disponibilidade. Ao adicionar um produto, ele é persistido no banco de dados e exibido na listagem.

Edição de produtos: Cada produto da listagem possui um botão "Editar" que abre um modal preenchido com os dados do produto selecionado. É possível realizar alterações nos campos e salvar as atualizações. Os dados são atualizados no banco de dados e na listagem.

Remoção de produtos: Cada produto da listagem possui um botão "Remover" que remove o produto tanto do banco de dados quanto da listagem.

### Tecnologias utilizadas
React.js: Biblioteca JavaScript para a construção da interface do usuário.
Node.js: Ambiente de execução JavaScript server-side.
MySQL: Banco de dados relacional utilizado para armazenar as informações dos produtos.
### Configuração do projeto
Clone o repositório para a sua máquina local.
Certifique-se de ter o Node.js instalado.
No diretório raiz do projeto, instale as dependências executando o comando: npm install.
Configure as informações de conexão com o banco de dados MySQL no arquivo server.js.
Execute o comando npm start para iniciar o servidor backend.
No diretório client, execute o comando npm install para instalar as dependências do frontend.
Execute o comando npm start para iniciar o servidor de desenvolvimento do frontend.
A aplicação estará disponível em http://localhost:3000 e você poderá acessá-la através do seu navegador.

### Considerações finais
Este projeto é um exemplo básico de uma aplicação de listagem de produtos com funcionalidades de adição, edição e remoção. Ele pode ser expandido e personalizado de acordo com as necessidades do seu próprio projeto. Fique à vontade para modificar, adicionar recursos e estilizar a aplicação de acordo com as suas preferências.

Lembre-se de garantir que as configurações do banco de dados estejam corretas para que a aplicação funcione adequadamente. Além disso, certifique-se de ter as permissões necessárias para executar o servidor backend na porta desejada.

Espero que este projeto seja útil como ponto de partida e que possa auxiliá-lo em seus futuros desenvolvimentos!