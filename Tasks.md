# Filtragem dinamica

Ter uma filtragem local dos tipos e/ou nomes abordados, a partir dos dados recebidos com paginação da API.

## Regras

- Manter a referência de tamanho da paginação máxima por referência.

## Lógica

- Salvar no Zustand todos os pokemons que forem baixados por ordem de execução, nas posições deles verdadeiras, ao filtrar por nome, caso não tenha pokemons o suficiente para apresentar os 12, ele baixa uma paginação nova e esse processo se repete até que ele baixe todas ou tenha os 12.

- O download da informação se faz através da paginação comum, filtros por tipo e pela própria pesquisa.

- Todo dado baixado pode ser armazenado no Zustand através do persist como uma forma de cache para acesso rápido melhorando a performance futura.
