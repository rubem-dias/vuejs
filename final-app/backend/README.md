## 1 - Criando o prisma server.

* Precisamos usar o docker e o docker compose, porque toda a infraestrutura do prisma eh baseado no docker.
* é necessário criar o arquivo docker-compose para o docker entender os containers que vou querer usar.
* rodando docker-compose up -d

## 2 - Instalando o prisma CLI

* npm i -g prisma na versao @1.28.
* iniciando com prisma init --endpoint na porta local
* e agora ausando prisma deploy para gerar o deploy desse servico para o prisma server

* rodando o comando: prisma init --endpoint http://localhost:4466; cria dois novos arquivos chamados (prisma.yml, datamodel.prisma)
 dentro o arquivo datamodel, sera mapeado para um tipo de tabela de dados.
 
 rodando o comando prisma deploy para fazer isso e entao teremos acesso ao playground do graphql

 ## 3 - Modelando dados com o datamodel do prisma

 * Ele define o schema do banco de dados ( os tipos serao mapeados para a tabela e base para o CRUD )