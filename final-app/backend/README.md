## 1 - Instalando o docker
 
* Com o docker, posso fazer de conta que é um mini sistema operacional rodando varios containers simultaneamente para se comunicar, como por exemplo o servidor prsima com o database postgres.

* Precisamos usar o docker e o docker compose, porque toda a infraestrutura do prisma eh baseado no docker.

## 2 - Docker Compose

  o Docker compose é responsavel por manipular todos esses containers para tabalharem juntos

## 3 - Arquivo docker-compose

* Criando este arquivo, defino os serviços que são os containers. Temos dois serviços: [Postgres] e [Prisma].


* [Postgres]

  Dentro do [Postgres] tenho as indentacoes de configuracao.
  Em [image] x que especifica a versao do "mini sistema operacional";
  [Volumes] : na minha maquina local ha um diretorio setado para o volume, que serve para armazenar alguns dados do container como o banco de dados.

* [Prisma]

  Há uma key chamada ports, nesse caso seria: [HOST:CONTAINER] que significa, quando eu acessar na minha maquina a porta 4466, Eu irei acessar o container PRISMA na porta 4466

## 4 - Rodando os containers

* Agora docker-compose up -d para subir os containers ( -d indica que quero rodar o comando em background mode, de grosso modo, nao aparecera o log dos containers )

## 5 - Instalando o prisma CLI

* npm i -g prisma na versao @1.28. (npm i -g prisma@1.28)
* iniciando com prisma init --endpoint na porta local
* e agora ausando prisma deploy para gerar o deploy desse servico para o prisma server

* rodando o comando: prisma init --endpoint http://localhost:4466; cria dois novos arquivos chamados (prisma.yml, datamodel.prisma)
 dentro o arquivo datamodel, sera mapeado para um tipo de tabela de dados.
 
 rodando o comando prisma deploy para fazer isso e entao teremos acesso ao playground do graphql

 ## 6 - Modelando dados com o datamodel do prisma

 * Ele define o schema do banco de dados ( os tipos serao mapeados para a tabela e base para o CRUD )

 * dentro do prisma.yml, esta referenciado o datamodel => datamodel: datamodel.prisma

  ## 7 - User

 * o type User {} pode ser entendido que o User eh uma tabela.

 * no campo id, ele eh unico e obrigatorio.

 ## 8 - Account.

 * no campo user, a tabela account vai se relacionar a tabela User 

 ## 9 - Enum

 * o Enum nao sera mapeado para uma tabela, apenas foi feito para referenciar
