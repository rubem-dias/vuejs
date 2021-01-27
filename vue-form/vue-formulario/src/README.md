## usando v-model para fazer 2way data bind.

usando v-model eh possivel ligar os dados dos inputs.

## v-model.number

para casos como a idade, o valor inicial vai ser numero, porem se alterar o valor numero, por padrao o valor ira virar uma string. sera preciso usar v-model.number para poder alterar o numero e continuar
sendo numerico e nao string.

## v-model.trim

barra de espaco nao sao contabilizados no input

## v-model.lazy

o input nao eh atualizado em tempo real, apenas quando o foco eh tirado do input.

## <pre>

posso usar essa tag para respeitar a quebra de linha no template

## atributo "name" 

englobando o mesmo escopo do mesmo input, por exemplo o input que faz escolher o genero, deverar ter o mesmo name pra ambos radio buttons

## v-model no genero

posso usar o v-model dentro do genero, usando exatamente o mesmo valor do value no input

## checkbox

geralmente o uso do checkbox redondo, eh para selecionar apenas um, ja o quadrado, podendo ser vrios.


## armazenar valor dos checkboxs em array

apenas adiciono v-model nos inputs, referenciando a instancia do array vazio que esta em desenvolvedor.tecnologias. Assim o vue sabera que quero agrupar uma lista com os checkbox.


## Select e option

intero usando v-model tambem, no campo do value, é colocado a ocupacao que está sendo interada naquele momento, é possivel usar ":selected="nome do valor"

## submetendo o formulario.

Dentro do metodo, exsite a funcao enviar que esta recebendo um evento dentro do parametro, pq eh um onClick.

## resetando o form

 por padrao, o type="reset", reseta os campos, mas a alteração não é refletida para a fonte de dados.
