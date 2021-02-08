## criando a API.

primeiramente, criando um arquivo package.json para trabalhar com json server. Para simular um caso real.
Dentro do arquivo foi passado para no script start: "npx json-server db.json --watch --port 3000" sendo: rodar o json server, usando o arquiivo db.json como fonte de dados, fazendo o json server ouvir na porta 3000

## instalando pacote axios.

Axios eh repsonsavel por fazer as chamadas http. tambem chamado de ajax.

## requisicao para o site

* é usado o axios para trazer os dados do lado do servidor, pra dentro do site. Criando uma pasta config dentro de src. Dentro do arquivo config, eu seto a URL que vai ser a api

* importo a config dentro do tarefas lista. 

* usando lifecycle do vue, chamado created. e precisamos importar o axios para poder fazer a requiscao

* usando promisses dentro do created. Usando then.

* Agora, eu pego a resposta que esta vindo do servidor e atribuo dentro do array tarefas, que no servidor, esta vendo dentro de response.data.

## Json server e o axios.

O json server eh apenas pra subir o servidor, mas as requisicoes sao feitas pelo axios. No configjs, a porta devera ser a mesma do jsonserver.