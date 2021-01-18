## eh preciso registrar apos o import do componente:
        export default {
        components: {
            Post
            }
        };

## Posso passar via props, usando v-bind ou : para se tornar dinamico. Exemplo:

<Component :titulo="'Componentes no Vue'" />

## Pra customizar o componente, posso usar <SLOT> para usar html puro