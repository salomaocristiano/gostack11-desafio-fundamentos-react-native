![header](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-fundamentos-react-native/master/assets/header-desafios.png)

<h3 align="center">
  Desafio 08: Fundamentos do React Native
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/salomaocristiano/gostack11-desafio-fundamentos-react-native.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/salomaocristiano/gostack11-desafio-fundamentos-react-native.svg">

  <a href="https://www.codacy.com/app/salomaocristiano/gostack11-desafio-fundamentos-react-native?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=salomaocristiano/gostack11-desafio-fundamentos-react-native&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/04db4b43120b4d05b9b39c9d2da97300.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/salomaocristiano/gostack11-desafio-fundamentos-react-native.svg">
  <a href="https://github.com/salomaocristiano/gostack11-desafio-fundamentos-react-native/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/salomaocristiano/gostack11-desafio-fundamentos-react-native.svg">
  </a>

  <a href="https://github.com/salomaocristiano/gostack11-desafio-fundamentos-react-native/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/salomaocristiano/gostack11-desafio-fundamentos-react-native.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/salomaocristiano/gostack11-desafio-fundamentos-react-native.svg">
</p>

## Screenshot

<p align="center">

![image-example](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-fundamentos-react-native/master/assets/bootcamp.jpg)

</p>

<p align="center">

![image-example](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-fundamentos-react-native/master/assets/test.jpg)

</p>

## :rocket: Sobre o desafio

Aplicação GoMarketplace que irá através React Native, junto com TypeScript, utilizando rotas, Async Storage e a Context API.

### Funcionalidades da aplicação

- **`Listar os produtos da fake API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem através de uma tabela, com o campo `title`, `image_url` e `price`.

- **`Adicionar itens ao carrinho`**: Em toda sua aplicação, você deve utilizar o Contexto chamado `cart` que deixamos disponível. Você vai precisar completar as funcionalidades dentro de `hooks/cart.tsx` para que você consiga adicionar itens ao carrinho.

- **`Exibir itens do carrinho`**: Na página `Cart` você deve exibir todos os itens do carrinho, junto com a quantidade, valor único, valor subtotal dos itens e total de todos os items.

- **`Aumentar quantidade de itens do carrinho`**: Na página `Cart` você deve permitir que o usuário aumente a quantidade de itens do mesmo produto, para isso você pode utilizar a função `increment` dentro do seu contexto em `/src/hooks/cart.tsx`.

- **`Diminuir quantidade de um item do carrinho`**: Na página `Cart` você deve permitir que o usuário decremente a quantidade de itens do mesmo produto, para isso você pode utilizar a função `decrement` dentro do seu contexto em `/src/hooks/cart.tsx`.

- **`Exibir valor total dos itens no carrinho`**: Tanto na página `Dashboard`, tanto na página `Cart` você deve exibir o valor total de todos os itens que estão no seu carrinho.

### Específicação dos testes

Para esse desafio, temos os seguintes testes:

- **`should be able to list the products`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua tela `Dashboard`, toda os produtos que são retornadas do Fake API. Essa listagem deve exibir o `title` e o `price` que deve ser formatado utilizando a função `Intl`.

- **`should be able to add a product to the cart`**: Para que esse teste passe, você deve permitir que seja possível adicionar produtos da sua `Dashboard` ao carrinho, utilizando o contexto de `cart` disponibilizado.

- **`should be able to list the products on the cart`**: Para que esse teste passe, você deve permitir que seja possível listar os produtos que estão salvos no contexto do seu carrinho na página `Cart`, nessa página exiba o nome do produto, o subtotal total de cada produto (price \* quantity).

- **`should be able to calculate the cart total`**: Para que esse teste passe, tanto na página `Dashboard`, tanto na página `Cart` você deve exibir o valor total de todos os itens que estão no seu carrinho.

- **`should be able to show the total quantity of itens in the cart`**: Para que esse teste passe, tanto na página `Dashboard`, tanto na página `Cart` você deve exibir o número total de itens que estão no seu carrinho.

- **`should be able to increment product quantity on the cart`**: Para que esse teste passe, você deve permitir que seja possível incrementar a quantidade de um produto do seu carrinho, utilizando o contexto de `cart` disponibilizado.

- **`should be able to decrement product quantity on the cart`**: Para que esse teste passe, você deve permitir que seja possível decrementar a quantidade de um produto do seu carrinho, utilizando o contexto de `cart` disponibilizado.

- **`should be able to navigate to the cart`**: Para que esse teste passe, no seu componente `FloatingCart` na Dashboard, você deve permitir que ao clicar no botão de carrinho com o testID de `navigate-to-cart-button`, o usuário seja redirecionado para a página `Cart`.

- **`should be able to add products to the cart`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função `addToCart` adicione um novo item ao carrinho.

- **`should be able to increment quantity`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função `decrement` altere incremente em `1` unidade a quantidade de um item que está armazenado no contexto.

- **`should be able to decrement quantity`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função `decrement` altere decremente em `1` unidade a quantidade de um item que está armazenado no contexto.

- **`should store products in AsyncStorage while adding, incrementing and decrementing`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho você deve permitir que todas as atualizações que você fizer no carrinho, sejam salvar no AsyncStorage. Por exemplo, ao adicionar um item ao carrinho, adicione-o também no AsyncStorage. Lembre de também atualizar o valor do AsyncStorage quando você incrementar ou decrementar a quantidade de um item.

- **`should load products from AsyncStorage`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que todos os produtos que foram adicionados sejam buscados do AsyncStorage.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
