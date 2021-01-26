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