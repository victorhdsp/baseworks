<template>
  <main>
    <div class="about">
      <h1>Pokedex (Baseworks)</h1>
      <p>Meu nome é Victor, estou participando do processo seletivo da Baseworks e o projeto proposto para o teste ténico foi uma web pokedex com algumas funcionalidades de pesquisa e filtragem, além de mostrar os dados individuais de cada pokemon.</p>
      <p>Meu pensamento para o desafio principal da aplicação em relação ao probloma proposto (na minha visão foi o sistema de busca e filtragem), foi que a api não tem uma forma de fazer essa pesquisa por conta própria e não fazia muito sentido por performance buscar dos dados dos pokemons ao montar a tela do usuário, minha estratégia foi baixar somente os pokemons que o usuário já tiver acessado e colocar eles em localstorage e buscar nesses dados guardados as informações de busca e filtragem, então ir baixando os pokemons por demanda até que ele tenha todos no storage.</p>
      <h2>O Desafio (Recebido)</h2>
      <p><b>Objetivo</b>: Desenvolver uma aplicação web que funcione como uma <b>Pokédex</b>, permitindo aos usuários pesquisar, visualizar e filtrar informações sobre os Pokémon, utilizando a <b>PokeAPI</b>.</p>
      <p><b>Design</b>: Embora não forneçamos um protótipo específico, esperamos que você crie um design intuitivo e atraente. <b>O layout é por sua conta, seja criativo.</b> Utilize princípios de <b>UI/UX</b> para construir uma interface amigável. (Dica: no Behance ou Dribble você encontra alguns protótipos para se inspirar.)</p>
      <h2>Contato</h2>
      <a href="https://www.linkedin.com/in/victorhdsp/">LinkedIn: https://www.linkedin.com/in/victorhdsp/</a>
      <a href="https://github.com/victorhdsp">Github: https://github.com/victorhdsp</a>
    </div>
  </main>
</template>

<style>
.about {
  @apply min-h-screen;
  @apply flex flex-col gap-2;
  @apply container;

  h2 {
    @apply pt-4;
  }
}
</style>
