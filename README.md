# Web Pokedex (Baseworks)

- Meu nome é Victor, estou participando do processo seletivo da Baseworks e o projeto proposto para o teste ténico foi uma web pokedex com algumas funcionalidades de pesquisa e filtragem, além de mostrar os dados individuais de cada pokemon.

- Meu pensamento para o desafio principal da aplicação em relação ao probloma proposto (na minha visão foi o sistema de busca e filtragem), foi que a api não tem uma forma de fazer essa pesquisa por conta própria e não fazia muito sentido por performance buscar dos dados dos pokemons ao montar a tela do usuário, minha estratégia foi baixar somente os pokemons que o usuário já tiver acessado e colocar eles em localstorage e buscar nesses dados guardados as informações de busca e filtragem, então ir baixando os pokemons por demanda até que ele tenha todos no storage.

- Atenção: quando for fazer o teste com o mobile, se fizer ele usando o computador com as ferramentas de desenvolvedor, atualiza a página após mudar para o formato de telefone, estou usando algumas variaveis que são constantes dependendo do tamanho do dispositivo para definir a quantidade de pokemons deve aperecer e paginar para mobile e desktop, caso contrario ele vai renderizar 9 pokemons por vez e paginar como se fosse desktop.
## Instalação

```sh
npm install
```

### Compilação para desenvolvimento

```sh
npm run dev
```

### Compilação para produção

```sh
npm run build
```

### Testes unitários

```sh
npm run test:unit
```