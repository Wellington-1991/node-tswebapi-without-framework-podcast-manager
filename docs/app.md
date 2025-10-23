# Nome do Aplicativo
Podcast Menager.

## Descrição
Um app ao estilo netflix, onde eu possa centralizar diferentes episódios de podcasts separados por categoria.

## Domínio
Podcasts feitos em vídeos.

## Features
- Listar os podcasts em sessões de categorias
 - [ saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como?

### Feature:
Listar os podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em um API Rest o nome do podcast, nome do episódio (json), imagem da capa, link.

GET: retorna lista de episódios

Response

```js
[
    {
        // imagem normal hqdefault.jpg, alta definição maxresdefault.jpg

        PodcatsName: 'flow',
        episode: 'RODRIGO SILVA - Flow #500',
        videoId: '_Ouu7r4BljM'
        cover: 'https://i.ytimg.com/vi/_Ouu7r4BljM/maxresdefault.jpg? sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCuRbhqFzC-X36oo4s3kzc2YCrhIQ', 
        link: 'https://www.youtube.com/watch?v=_Ouu7r4BljM',
        categories: ['Religiosidade']
    },
    {
        PodcatsName: 'flow',
        episode: 'COMO FIZ PRA PERDER 30KG',
        videoId: 'u7geGyu_O8s'
        cover: 'https://i.ytimg.com/vi/u7geGyu_O8s/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAZir83yqEAcMW7YL5B3H__enooPQ',
        link: 'https://www.youtube.com/watch?v=u7geGyu_O8s',
        categories: ['Saúde','Esporte']
    }
]

```

Get: retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast.