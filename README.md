### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe

# Boas vindas ao repositório do projeto TryBeer!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Como desenvolver](#como-desenvolver)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Linter](#linter)
  - [Execução de testes de requisito](#execução-de-testes-de-requisito)
  - [Lista de requisitos](#lista-de-requisitos)

    `Requisitos Entrega 1:`
    - [1 - Crie uma página de login](#1---crie-uma-página-de-login)
    - [2 - Crie uma página de registro de usuários](#2---crie-uma-página-de-registro-de-usuários)
    - [3 - Crie o menu top e o menu side bar](#3---crie-o-menu-top-e-o-menu-side-bar)

    - [4 - Criar tela de perfil do cliente](#4---criar-tela-de-perfil-do-cliente)
    - [5 - Criar Tela de Produtos](#5---criar-tela-de-produtos)

    `Requisitos Entrega 2:`
    - [6 - Criar Tela de Checkout](#6---criar-tela-de-checkout)
    - [7 - Criar Tela de Meus Pedidos](#7---criar-tela-de-meus-pedidos)
    - [8 - Criar Tela de Detalhes Pedidos](#8---criar-tela-de-detalhes-pedidos)
    - [9 - Criar menu side bar para Administrador](#9---criar-menu-side-bar-para-administrador)
    - [10 - Criar tela de perfil de Administrador](#10---criar-tela-de-perfil-de-administrador)
    - [11 - Criar tela de pedidos de admin](#11---criar-tela-de-pedidos-de-admin)
    - [12 - Criar tela de Detalhes de admin](#12---criar-tela-de-detalhes-de-admin)

    `Bônus:`
    - [13 - Cobertura de testes unitários](#13---cobertura-de-testes-unitários)
- [Avisos Finais](#avisos-finais)

---

# Habilidades

Nesse projeto, você será capaz de:

- Aderência do código à especificação. Seu programa deve se comportar como especificado no repositório e no protótipo;
- Organização do seu código e a arquitetura geral da aplicação (tanto da API quando do front-end);
- Aderência ao padrão REST na API;
- Cobertura de testes. Seu código deve ser testável , e deve possuir uma suíte de testes robusta e com alta cobertura.

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Esse será o projeto mais desafiador até agora! Você será responsável por criar uma aplicação de ponta a ponta!

Isso significa que a API, o banco de dados e o front-end serão escritos por você. 😁

O projeto em si é super divertido! Você vai criar uma plataforma de delivery de cerveja. 🍻

Para facilitar o entendimento, dá para dividirmos a aplicação em três partes:

- Front-end do **cliente**, onde nossos clientes vão comprar cerveja;

- Front-end do **admin**, onde o estabelecimento controlará os pedidos feitos;

- API, que será compartilhada entre cliente e admin.

O banco de dados utilizado será o `MySQL`!

Você pode acessar um protótipo do front-end [aqui](https://www.figma.com/file/tzP4txu6Uy0qCxVZWdWMBO/TryBeer?node-id=0%3A1).

Para servir arquivos estáticos como imagens no back-end, utilize o seguinte path: `/images` para manter de acordo com os caminhos da imagem que são salvas com os produtos no `script.sql`.


##### ⚠️ Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI. Contudo, respeite os atributos `data-testid`, pois eles serão usados na correção do projeto.

Você pode ler mais sobre os atributos que serão utilizados para testes [neste link](https://www.eduardopedroso.com.br/?p=494).

##### ⚠️ Para ver os comentários sobre cada componente, basta clicar no ícone de comentários no Figma (lado esquerdo superior).

![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)

---

## Desenvolvimento

Esse repositório contém duas pastas, `back-end` e `front-end`, onde você deve desenvolver o front-end e o back-end da aplicação. Ambas as pastas contêm um projeto iniciado com as configurações básicas necessárias. Após clonar o projeto e instalar as dependências, sinta-se livre para escolher usar Redux ou ContextAPI + React Hooks. Saiba avaliar as vantagens/desvantagens de cada um na hora da escolha.

Para o banco de dados, você deverá utilizar o `MySQL`. Já existe um script, na raiz do seu app. O nome do script é `script.sql`.

##### Você também deve **escrever testes unitários que devem cobrir pelo menos 90% do projeto**. Na [documentação do Jest CLI](https://jestjs.io/docs/en/cli) é possível ver como essa cobertura é coletada.

Para que seu projeto seja corretamente avaliado, siga as orientações a seguir:

- Sua aplicação deve ter um admin padrão com o nome de usuário `Tryber Admin` e senha `123456`.

- Sua aplicação deve ter, no mínimo, os produtos abaixo cadastrados. O arquivo `images.tar.gz`, na raiz do projeto, contém imagens para estes produtos.

  - Skol Lata 250ml, R$ 2.20;
  - Heineken 600ml, R$ 7.50;
  - Antarctica Pilsen 300ml, R$ 2.49;
  - Brahma 600ml, R$ 7.50;
  - Skol 269ml, R$ 2.19;
  - Skol Beats Senses 313ml, R$ 4.49;
  - Becks 330ml, R$ 4.99;
  - Brahma Duplo Malte 350ml, R$ 2.79;
  - Becks 600ml, R$ 8.89;
  - Skol Beats Senses 269ml, R$ 3.57;
  - Stella Artois 275ml, R$ 3.49.

- O front-end deve ser iniciado com `npm start` na pasta `front-end` e escutar a porta `3000`. A API deve ser iniciada com `npm start` dentro da pasta `back-end` e escutar a porta `3001`.

- O uso de `localStorage` é necessário para que as informações não se percam caso o usuário atualize a página.

- No `localStorage` do navegador:

  - A chave `user` deve conter a seguinte estrutura:

    ```json
    {
      "name": "Taylor Swift",
      "email": "taylorswift@email.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4(...)",
      "role": "client"
    }
    ```

  - Ao deslogar, remova completamente a chave `user` do `localStorage`.

### Data de Entrega

Data de entrega para avaliação final do projeto: `31/03/2021 - 14:00h`.

# Instruções para entregar seu projeto

## Antes de começar a desenvolver

1. Clone o repositório

- `git clone https://github.com/tryber/sd-06-trybeer.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-06-trybeer`

2. Instale as dependências [**Caso existam**]

- `npm install`

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-sd-06-trybeer`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-06-trybeer`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-06-trybeer/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-06-trybeer/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

## Depois de terminar o desenvolvimento (opcional)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-06`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

## Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

---

# Como desenvolver

#### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos!

#### ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

Vamos pedir que você adicione `data-testid` em alguns elementos, além de algumas tags e textos especificos. Siga à risca o que iremos pedir nos requisitos, para que o corretor automatizado possa avaliar o seu projeto corretamente.

O não cumprimento de um requisito, total ou parcialmente, impactará na sua avaliação.

⚠️ Lembre-se de que o seu projeto só será avaliado se estiver passando pelos _checks_ do **ESLint** e se estiver, também, seguindo corretamente os padrões REST para rotas e MSC para o back-end.

⚠️ A criação dos endpoints da API, a modelagem do banco e a estrutura geral do projeto é livre, desde que os requisitos especificados na seção `Requisitos Gerais` sejam cumpridos.

O intuito desse app é que uma pessoa possa pedir uma cerveja no aplicativo e outra pessoa possa aceitar esse pedido no **admin**.

##### O projeto será composto por duas entregas, cada uma especificada abaixo com seus respectivos requisitos e o prazo decidido com a facilitação.

### 👀Observações importantes:

Haverá um arquivo chamado `script.sql` onde já contém a criação de do banco e alguns inserts.

Para rodar o arquivo basta rodar o comando:

`mysql -u root -p`

Isso fará com que abra o terminal do MySQL se abra. Depois, basta executar o comando:

`source pasta_do_projeto/script.sql`

Assim já irá criar o banco e terá alguns dados inseridos. **É essencial seguir esses passos!**

Haverá um arquivo no caminho: `sd-06-trybeer/cypress/plugins/index.js`. Neste arquivo, na linha 17, Haverá a seguinte comando:

`const connection = my.createConnection({host: process.env.HOSTNAME, user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD});`

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivos:**

`sd-06-trybeer/config/config.js`

```
module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": 'Trybeer',
    "host": process.env.HOSTNAME,
    "dialect": 'mysql',
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": 'Trybeer',
    "host": process.env.HOSTNAME,
    "dialect": "mysql",
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": 'Trybeer',
    "host": process.env.HOSTNAME,
    "dialect": 'mysql',
  },
};
```

**(Neste arquivo é obrigatório deixar o nome do database como `"database": 'Trybeer'`)**

`sd-06-trybeer/back-end/models/connection.js`

```
const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer'
};
```

(esse arquivo você irá criar e configurar quando programar a conexão com banco).

**É essencial usar essas 3 variávies nos três arquivos acima:**

Variáveis:

`host: process.env.HOSTNAME`
`user: process.env.MYSQL_USER`
`password: process.env.MYSQL_PASSWORD`

**Com elas que iremos conseguir conectar ao banco do avaliador automático**

# Requisitos do projeto

### Linter

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

- `sd-06-trybeer/back-end/package.json`
- `sd-06-trybeer/front-end/package.json`

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Devido ao fato de as configurações das regras do `ESLint` dos projetos de front e back **serem diferentes**, **é preciso executar o `ESLint` em cada projeto**.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

---

Usaremos também o [StyleLint](https://stylelint.io/) para fazer a análise estática do seu código.

**O Stylelint é aplicável _APENAS_ no frontend**

Para poder rodar o `StyleLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint:styles`. Se a análise do `StyleLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

### Execução de testes de requisito

Para o projeto ser validado, todos os testes de comportamento devem passar. É possível testar isso local rodando `npm run cy`. Esse comando roda a suite de testes do Cypress que valida se o fluxo geral e os requisitos funcionais estão funcionando como deveriam. Você pode também executar o comando `npm run cy:open` para ter um resultado visual dos testes executados.

Esses testes não consideram o layout de maneira geral, mas sim os atributos e informações corretas, então preste atenção nisso! Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

**Atenção:** Sua aplicação deve estar rodando para o Cypress no terminal poder testar.

#### Além dos testes da avaliação automatizada, o requisito bônus do projeto se baseia em **escrever testes unitários que cubram pelo menos 90% do projeto**. Na [documentação do Jest CLI](https://jestjs.io/docs/en/cli) é possível ver como essa cobertura é coletada.

### Requisitos Gerais

- Os `endpoints` da API devem ser criados utilizando o padrão REST;

- O back-end deve utilizar o banco de dados `MySQL`;

- O back-end deve ser construído seguindo o padrão arquitetural `MSC`;

- Rode um script SQL na raiz do projeto com comandos para a criação do banco de dados, das tabelas, inserção dos dados iniciais e criação do admin padrão. O script é `script.sql`.

## Lista de requisitos

### Requisitos Entrega 1

### 1 - Crie uma página de login

Esta tela possui o nome `Login` no protótipo.

- Todos os elementos da tela devem respeitar os atributos descritos no protótipo;

- A rota da tela deve ser `/login`;

- A rota `/` da aplicação deve redirecionar para a rota `/login`;

- A pessoa deve conseguir escrever seu email no input de email;

- A pessoa deve conseguir escrever sua senha (letras ou números) no input de senha;

- O formulário só fica válido após um email válido e uma senha de, no mínimo, 6 números serem preenchidos. Um email válido possui a forma `<nome>@<domínio>`. Caso o formulário esteja inválido, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

- Após a submissão bem sucedida do formulário, o token que identifica o usuário recebido na resposta deve ser salvo no `localStorage`. Esse token deve ser utilizado para futuras requisições à API;

- Após a submissão bem sucedida do formulário, se o usuário for do tipo `administrador`, a pessoa deve ser redirecionada para a página **Admin - Home**;

- Após a submissão bem sucedida do formulário, se o usuário for do tipo `cliente`, a pessoa deve ser redirecionada para a página **Cliente - Produtos**;

- Deve existir um botão para o usuário se registrar com o texto `"Ainda não tenho conta"`. Ao ser clicado, a pessoa deve ser redirecionada para a página **Registro**.

#### Página de Login:

- O campo input 'Email' deverá conter a tag `data-testid="email-input"`

- O campo input 'Senha' deverá conter a tag `data-testid="password-input"`

- O botão 'Entrar' deverá conter a tag `data-testid="signin-btn"`

- O campo link/botão 'Ainda nao tenho conta' deverá conter a tag `data-testid="no-account-btn"`

![Tela de login](./public/login.png)

O que será verificado:
```
- Será validado que é possível acessar a home

- Será validado que a tela login contém os atributos descritos no protótipo

- Será validado que não é possível fazer login com um email inválido

- Será validado que não é possível fazer login com uma senha em branco

- Será validado que não é possível fazer login com uma senha com menos de 6 caracteres

- Será validado que é possível fazer login com um cliente e ser redirecionado para tela de cliente

- Será validado que é possível fazer login com um admin e ser redirecionado para tela de admin

- Será validado que é possível clicar no botão "Ainda não tenho conta" e ser redirecionado para tela de registro
```

### 2 - Crie uma página de registro de usuários

Esta tela possui o nome `Registro` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota da tela deve ser `/register`;

- A tela deve mostrar um formulário com os seguintes campos:

  - **nome** - deve conter, no mínimo, 12 letras, sem números ou caracteres especiais;

  - **email** - deve conter um email válido. Um email válido possui o formato `<nome>@<domínio>`;

  - **senha** - composta por, no mínimo, 6 caracteres;

  - **quero vender** - um checkbox opcional, desmarcado por padrão.

- Caso a opção `Quero vender` esteja marcada, o usuário deve ser cadastrado com um papel de **admin**. Caso contrário, será um **client**;

- Caso os dados inseridos no formulário sejam inválidos, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado;

- Caso a opção `Quero vender` esteja marcada, ao clicar no botão `"Cadastrar"`, a pessoa deve ser redirecionada para a página **Admin - Home**. Caso contrario, deve ser redirecionada para a página de **Cliente - Produtos**.

#### Página de Registro

- O campo input 'name' deverá conter a tag `data-testid="signup-name"`

- O campo input 'email' deverá conter a tag `data-testid="signup-email"`

- O campo input 'Senha' deverá conter a tag `data-testid="signup-password"`

- O campo checkbox 'Quero vender' deverá conter a tag `data-testid="signup-seller"`

- O botão 'Cadastrar' deverá conter a tag `data-testid="signup-btn"`

![Tela de cadastro](./public/cadastro.png)

O que será verificado:
```
- Será validado que é possível acessar a tela de registro

- Será validado que contém os atributos descritos no protótipo

- Será validado que não é possível fazer o registro com um nome com menos de 12 letras

- Será validado que não é possível fazer o registro com um nome com caracteres especiais

- Será validado que não é possível fazer o registro com um nome com números

- Será validado que não é possível fazer login com um email inválido

- Será validado que não é possível fazer login com um email já existente

- Será validado que não é possível fazer login com uma senha em branco

- Será validado que não é possível fazer login com uma senha com menos de 6 caracteres

- Será validado que é possível fazer cadastro de um admin com sucesso e ser redirecionado para tela do admin

- Será validado que é possível fazer cadastro de um cliente com sucesso e ser redirecionado para tela do cliente
```

### Cliente

### 3 - Crie o menu top e o menu side bar

- Todos os elementos devem respeitar os atributos descritos no protótipo para o menu superior;

- O menu superior deve sempre ser exibido em todas as telas;

- O título correspondente à tela em que o usuário se encontra deve ser mostrado, confome protótipos;

- Deve haver um ícone do tipo "hambúrguer" no canto superior esquerdo do menu superior. Quando clicado, caso o menu lateral esteja oculto, deve ser mostrado. Caso contrário, o menu lateral deve ser escondido.

- Todos os elementos devem respeitar os atributos descritos no protótipo para o menu lateral;

- Deve conter quatro itens: `"Produtos"`, `"Meus pedidos"`, `"Meu Perfil"` e `"Sair"`;

- Ao clicar no item `"Produtos"`, a pessoa deve ser redirecionada para a tela **Cliente - Produtos**;

- Ao clicar no item `"Meus pedidos"`, a pessoa deve ser redirecionada para a tela **Cliente - Meus Pedidos**;

- Ao clicar no item `"Meu Perfil"`, a pessoa deve ser redirecionada para tela **Cliente - Meu Perfil**;

- Ao clicar no item `"Sair"`, a pessoa deve ser redirecionada para a tela **Login** e ser deslogada.

#### Menu superior

- O título do top 'Trybeer' deverá conter a tag `data-testid="top-title"`

- O botão 'Hamburguer' deverá conter a tag `data-testid="top-hamburguer"`

![Menu Superior](./public/menusuperior.png)

#### Menu lateral

- O componente sidebar deverá conter a seguinte classe `class="side-menu-container"`

- O botão 'Produtos' deverá conter a tag `data-testid="side-menu-item-products"`

- O botão 'Meus Pedidos' deverá conter a tag `data-testid="side-menu-item-my-orders"`

- O botão 'Meu Perfil' deverá conter a tag `data-testid="side-menu-item-my-profile"`

- O botão 'Sair' deverá conter a tag `data-testid="side-menu-item-logout"`

![Menu Lateral](./public/menulateral.png)

O que será verificado:
```
- Será validado que os atributos do top menu devem ser mostrados confome protótipos

- Será validado que ao clicar no componente hamburguer o sidebar deve ficar visível

- Será validado que os atributos do side menu devem ser mostrados confome protótipos

- Será validado que ao clicar no botão "produtos" será redirecionado para tela de produtos

- Será validado que ao clicar no botão "meus pedidos" será redirecionado para tela de meus pedidos

- Será validado que ao clicar no botão "meu perfil" será redirecionado para tela de meu perfil

- Será validado que ao clicar no botão "sair" será redirecionado para tela home
```

### 4 - Criar tela de perfil do cliente

Esta tela possui o nome `Cliente - Meu Perfil` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota da tela deve ser `/profile`;

- Deve ter dois campos de texto: um para o `email` e o outro para o `name`. Apenas o `name` pode ser alterado. Dessa forma, o campo `email` deve ser `read-only`;

- Deve ter um botão `"Salvar"`". Caso o usuário tenha editado o nome, o botão deve ser habilitado. Caso contrário, o botão deve estar desabilitado;

- Ao clicar no botão `"Salvar"`, uma requisição deve ser feita à API e o nome da pessoa deve ser atualizado no banco de dados;

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

#### Tela de perfil

- O título do top 'Meu perfil' deverá conter a tag `data-testid="top-title"`

- O campo input 'Name' deverá conter a tag `data-testid="profile-name-input"`

- O campo input 'Email' deverá conter a tag `data-testid="profile-email-input"`

- O botão 'Salvar' deverá conter a tag `data-testid="profile-save-btn"`

![Tela do perfil do cliente](./public/perfilcliente.png)

O que será verificado:
```
- Será validado que é possível acessar a tela de perfil do cliente

- Será validado que contém os atributos descritos no protótipo

- Será validado que campo email está como readonly

- Será validado que o botão salvar fique desabilitado caso não altere o nome

- Será validado que o botão salvar fique habilitado caso altere o nome

- Será validado que é possível alterar o nome com sucesso
```

### 5 - Criar Tela de Produtos

Esta tela possui o nome `Cliente - Produtos` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de produtos;

- A rota da tela deve ser `/products`;

- Nessa tela, os produtos devem ser organizados em "cards", e deve haver um card para cada produto;

- Os cards devem conter os seguintes dados do produto:

  - Foto;

  - Nome do produto;

  - Preço unitário;

  - Quantidade atual inserida no carrinho;

  - Botão de adicionar (`+`) e de remover (`-`) uma unidade do produto no carrinho.

- Ao clicar no botão `+`, a quantidade do produto deve aumentar em 1;

- Ao clicar no botão `-`, a quantidade do produto deve diminuir em 1, limitado a 0;

- Caso a pessoa atualize o browser, o carrinho deve ser mantido;

- O preço unitário deve seguir o padrão `R$ 00,00`;

- Quando a quantidade mostrada no card do produto chegar a 0, o produto deve ser removido do carrinho;

- Deve ter um botão `"Ver carrinho"`. Esse botão também deve exibir o **valor total** dos produtos no carrinho;

- O **valor total** mostrado no botão `"Ver carrinho"` deve ser alterado dinamicamente, ou seja, ao adicionar ou remover um produto no carrinho, o valor total deve ser atualizado;

- Ao clicar no botão `"Ver carrinho"`, a pessoa deve ser redirecionada para a página **Cliente - Checkout**.

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

#### Tela de produtos

- O valor do produto 'R$ 2,20' deverá conter a tag `data-testid="0-product-price"`

- A imagem do produto deverá conter a tag `data-testid="0-product-img"`

- O nome do produto 'Skoll..' deverá conter a tag `data-testid="0-product-name"`

- O botão 'Mais' deverá conter a tag `data-testid="0-product-plus"`

- O botão 'Menos' deverá conter a tag `data-testid="0-product-minus"`

- A quantidade de produtos deverá conter a tag `data-testid="0-product-qtd"`

- O botão 'Ver Carrinho' deverá conter a tag `data-testid="checkout-bottom-btn"`

- O valor total do carrinho deverá conter a tag `data-testid="checkout-bottom-btn-value"`

**[OBS: os campos data-testid deverão ser implementado um index para cada produto sempre comecando pelo index 0, para cada um dessas tags veja os exemplo abaixo:]**

Produto 1:

data-testid="0-product-price"

Produto 2:

data-testid="1-product-price"

Produto 3:

data-testid="2-product-price"

Deverá ser alterado para os seguintes data-testid listados abaixo:

data-testid="0-product-price"

data-testid="0-product-img"

data-testid="0-product-name"

data-testid="0-product-plus"

data-testid="0-product-minus"

data-testid="0-product-qtd"

![Tela do perfil do cliente](./public/produtos.png)

O que será verificado:
```
- Será validado que existe um produto na tela de produtos

- Será validado que existe todos os produtos na tela de produtos

- Será validado que é possíve clicar no botão "+" e atualizar o produto para 1

- Será validado que é possível clicar no botão "-"e atualizar o produto para 0

- Será validado que não é possível clicar no botão "-" e atualizar o produto para menor que zero

- Será validado que é possível visualizar o botão "Ver Carrinho"

- Será validado que é possível atualizar o valor do carrinho ao adicionar um produto

- Será validado que é possível atualizar o valor do carrinho ao remover um produto

- Será validado que ao atualizar a tela continuará na tela de produtos e carrinho com o mesmo valor

- Será validado que é possível adicionar um produto e clicar no botão "Ver Carrinho" e ser redirecionado para tela de carrinho

- Será validado que o botão "Ver Carrinho" fique desabilitado caso não adicione nenhum produto

- Será validado que não é possível acessar a tela de produtos sem estar logado e será redirecionado para tela de login

```
---

### Requisitos Entrega 2

### 6 - Criar Tela de Checkout

Esta tela possui o nome `Cliente - Checkout` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela;

- A rota da tela deve ser `/checkout`;

- Caso a pessoa atualize o browser, o carrinho deve ser mantido;

- Deve ter uma lista dos produtos selecionados com a seguinte estrutura: `quantidade do produto -- nome do produto -- valor total do produto`, sendo o valor total calculado por **quantidade \* preço unitário**;

- Ao lado de cada produto deve haver um botão que, quando clicado, exclui este produto do carrinho;

- Abaixo da lista, mostre o **valor total do pedido**, no seguinte formato: `Total: R$ 0,00`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**;

- Deve existir um formulário para a pessoa digitar o endereço de entrega dos produtos. O formulário deve conter dois campos de texto: um para a **rua** e o outro para o **número da casa**;

- Deve ter um botão `"Finalizar Pedido"`. O botão deve estar habilitado **apenas** se o valor total do pedido for **maior que zero** e o endereço de entrega estiver preenchido;

- Ao clicar em "`Finalizar pedido`", caso a operação dê certo, uma mensagem de sucesso deve ser exibida por **2 segundos** e em seguida a pessoa deve ser redirecionada para a página **Cliente - Produtos**. Caso contrário, deve ser exibido uma mensagem de erro;

- Quando um pedido for finalizado, o carrinho deve ser esvaziado;

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

#### Tela de Checkout

- O título do top 'Finalizar Pedido' deverá conter a tag `data-testid="top-title"`

- A quantidade do produto deverá conter a tag `data-testid="0-product-qtd-input"`

- O nome do produto deverá conter a tag `data-testid="0-product-name"`

- O valor do produto deverá conter a tag `data-testid="0-product-total-value"`

- O preço unitário do produto deverá conter a tag `data-testid="0-product-unit-price"`

- O botão de remover um produto deverá conter a tag `data-testid="0-removal-button"`

- O valor total do carrinho deverá conter a tag `data-testid="order-total-value"`

- O campo input 'Rua' deverá conter a tag `data-testid="checkout-street-input"`

- O campo input 'Número da casa' deverá conter a tag `data-testid="checkout-house-number-input"`

- O botão 'Finalizar Pedido' deverá conter a tag `data-testid="checkout-finish-btn"`

**[OBS: os campos data-testid deverão ser implementado um index para cada produto sempre comecando pelo index 0, para cada um dessas tags veja os exemplo abaixo:]**

Produto 1:

data-testid="0-product-price"

Produto 2:

data-testid="1-product-price"

Produto 3:

data-testid="2-product-price"

Deverá ser alterado para os seguintes data-testid listados abaixo:

data-testid="0-product-qtd-input"

data-testid="0-product-name"

data-testid="0-product-total-value"

data-testid="0-product-unit-price"

data-testid="0-removal-button"

![Tela do checkout](./public/checkout.png)

O que será verificado:
```
- Será validado que é possível acessar a tela de checkout

- Será validado que contém atributos descritos no protótipo

- Será validado que é possível ver que o produto tem quantidade, nome e valor total do produto

- Será validado que é possível a lista mostrar o valor total do carrinho

- Será validado que é possível fazer refresh da tela e os dados continuarem na tela

- Será validado que é possível excluir um produto no checkout

- Será validado que ao excluir os produtos aparecerá uma mensagem na tela de:
  `Não há produtos no carrinho` como na imagem abaixo:
```
![Checkout sem produtos](./public/naohaprodutos.png)
```
- Será validado que é possível o botão finalizar pedido ficar habilitado apenas quando tiver produto maior que zero e rua e numero preenchidos]**

- Será validado que é possível fazer a compra de um produto e ao finalizar ver a mensagem de sucesso e ser redirecionado para tela de produtos

- Será validado que ao fazer a compra com sucesso a mensagem de sucesso "Compra realizada com sucesso!" irá aparecer na tela.

- Será validado que não é possível acessar o checkout sem estar logado e será redirecionado para tela de login
```

### 7 - Criar Tela de Meus Pedidos

Esta tela possui o nome `Cliente - Meus Pedidos` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de meus pedidos;

- A rota da tela deve ser `/orders`;

- Deve conter uma lista de cards, onde cada card é um pedido. Cada card deve conter as seguintes informações: `número do pedido`, `data de realização` e `valor total do pedido`. Para a data de realização do pedido, mostre apenas o dia e o mês;

- A listagem deve mostrar os pedidos ordenados por id;

- Ao clicar no card, a pessoa deve ser redirecionada para a página **Cliente - Detalhes do Pedido**.

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

#### Tela de Meus Pedidos

- O título do top 'Meus Pedidos' deverá conter a tag `data-testid="top-title"`

- O card do pedido deverá conter a tag `data-testid="0-order-card-container"`

- O número do pedido deverá conter a tag `data-testid="0-order-number"`

- A data do pedido deverá conter a tag `data-testid="0-order-date"`

- O valor do pedido deverá conter a tag `data-testid="0-order-total-value"`

**[OBS: os campos data-testid deverão ser implementado um index para cada produto sempre comecando pelo index 0, para cada um dessas tags veja os exemplo abaixo:]**

Produto 1:

data-testid="0-product-price"

Produto 2:

data-testid="1-product-price"

Produto 3:

data-testid="2-product-price"

Deverá ser alterado para os seguintes data-testid listados abaixo:

data-testid="0-order-number"

data-testid="0-order-date"

data-testid="0-order-total-value"

data-testid="0-order-card-container"

![Meus Pedidos](./public/meuspedidos.png)

O que será verificado:
```
- Será validado que é possível acessar a tela de meus pedidos

- Será validado que contém os atributos descritos no protótipo

- Será validado que é possível ver que o produto tem quantidade, nome, valor total e a data da compra

- Será validado que é possível clicar no card e ser redirecionado para tela do detalhe do produto

- Será validado que não é possível acessar a tela de meus pedidos sem estar logado e será redirecionado para tela de login
```

### 8 - Criar Tela de Detalhes Pedidos

Esta tela possui o nome `Cliente - Detalhes de Pedido` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes do pedido;

- A rota da página deve ser `/orders/:numero-do-pedido`;

- Mostre o `número do pedido` e a `data de realização`. Para a data de realização do pedido, mostre apenas o dia e o mês;

- Deve ter uma lista dos produtos selecionados com a seguinte estrutura: `quantidade do produto -- nome do produto -- valor total do produto`. Sendo o valor total calculado por **quantidade \* preço unitário**;

- Abaixo da lista, mostre o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**.

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

titulo - data-testid="top-title" - Detalhes de Pedido
numero do pedido - data-testid="order-number" - Pedido 1
data do pedido - data-testid="order-date" - 03/09
quantidade do produto - data-testid="0-product-qtd" - 1
nome do produto - data-testid="0-product-name" - Skol Lata 250ml
valor do produto - data-testid="0-product-total-value" - R$ 2,20
valor total da compra - data-testid="order-total-value" - Total: R$ 2,20
url - http://localhost:3000/orders/1

#### Tela de detalhes de pedido

- O título do top 'Detalhes de Pedido' deverá conter a tag `data-testid="top-title"`

- O número do pedido deverá conter a tag `data-testid="order-number"`

- A data do pedido deverá conter a tag `data-testid="order-date"`

- A quantidade do produto deverá conter a tag `data-testid="0-product-qtd"`

- O nome do produto deverá conter a tag `data-testid="0-product-name"`

- O valor total do produto deverá conter a tag `data-testid="0-product-total-value"`

- O valor total da compra deverá conter a tag `data-testid="order-total-value"`

**[OBS: os campos data-testid deverão ser implementado um index para cada produto sempre comecando pelo index 0, para cada um dessas tags veja os exemplo abaixo:]**

Produto 1:

data-testid="0-product-price"

Produto 2:

data-testid="1-product-price"

Produto 3:

data-testid="2-product-price"

Deverá ser alterado para os seguintes data-testid listados abaixo:

data-testid="0-product-qtd"

data-testid="0-product-name"

data-testid="0-product-total-value"

![Detalhes do Pedido](./public/detalhesdopedido.png)

O que será verificado:
```
- Será validado que é possível acessar a tela do detalhe do pedido

- Será validado que contém os atributos descritos no protótipo

- Será validado que é possível ver que tem numero do pedido e a data da compra

- Será validado que é possível ver que o produto tem quantidade, nome e valor total do produto

- Será validado que é possível ver o valor total do pedido

- Será validado que não é possível acessar a tela de meus pedidos sem estar logado e será redirecionado para tela de login
```

### Administrador

### 9 - Criar menu side bar para Administrador

- Todos os elementos devem respeitar os atributos descritos no protótipo para o menu lateral;

- Deve conter três itens: `"Pedidos"`", `"Perfil"`" e "`Sair`";

- Ao clicar no item `"Pedidos"`, a pessoa deve ser redirecionada para a tela **Admin - Home**;

- Ao clicar no item `"Perfil"`, a pessoa deve ser redirecionada para tela **Admin - Perfil**;

- Ao clicar no item `"Sair"`, a pessoa deve ser redirecionada para a tela **Login** e ser deslogada.

#### Menu lateral Administrador

- O componente sidebar deverá conter a seguinte classe `class="admin-side-bar-container"`

- O botão 'Meus Pedidos' deverá conter a tag `data-testid="side-menu-item-orders"`

- O botão 'Meu Perfil' deverá conter a tag `data-testid="side-menu-item-profile"`

- O botão 'Sair' deverá conter a tag `data-testid="side-menu-item-logout"`

![SideBar Admin](./public/sidebaradmin.png)

O que será verificado:
```
- Será validado que o sidebar devem ser mostrados, conforme protótipos

- Será validado que ao clicar no menu meus pedidos será redirecionado para tela de meus pedidos'

- Será validado que ao clicar no menu Perfil será redirecionado para tela de Perfil

- Será validado que ao clicar no menu sair será redirecionado para tela home
```

### 10 - Criar tela de perfil de Administrador

Esta tela possui o nome `Admin - Perfil` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de perfil;

- A rota da página deve ser `/admin/profile`;

- Mostrar o `email` e o `nome` do usuário. Não permita que o usuário edite os dados;

- Ao entrar na tela, se o usuário não estiver logado, deve ser redirecionado para a tela **Login**.

#### Tela de perfil Administrador

- O nome deverá conter a seguinte classe `data-testid="profile-name"`

- O email deverá conter a seguinte classe `data-testid="profile-email"`

![Perfil Admin](./public/perfiladmin.png)

O que será verificado:
```
- Será validado que é possível acessar a tela do perfil do administrador

- Será validado que a tela de perfil contém os atributos descritos no protótipo

- Será validado que a tela de perfil contém o email e nome do administrador

- Será validado que não é possível acessar a tela sem estar autenticado e ser redirecionado para tela de login
```

### 11 - Criar tela de pedidos de admin

Esta tela possui o nome `Admin - Pedidos` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de pedidos;

- A rota da página deve ser `/admin/orders`;

- Essa tela deve mostrar todos os pedidos feitos;

- Os pedidos pendentes devem ter o label `Pendentes`, ao passo que os pedidos entregues devem ter o label `Entregue`;

- Os "cards" dos pedidos devem conter as informações:

  - Número do pedido;

  - Endereço para entrega;

  - Valor total do pedido.

- Ao clicar em qualquer parte do card do pedido, a pessoa deve ser redirecionada para a tela `Admin - Detalhe de Pedido`.

#### Tela de Pedidos

- O numero do pedido deverá conter a seguinte classe `data-testid="0-order-number"`

- O endereço deverá conter a seguinte classe `data-testid="0-order-address"`

- O valor total do pedido deverá conter a seguinte classe `data-testid="0-order-total-value"`

- O valor total do pedido deverá conter a seguinte classe `data-testid="0-order-status"`

**[OBS: os campos data-testid deverão ser implementado um index para cada produto sempre comecando pelo index 0, para cada um dessas tags veja os exemplo abaixo:]**

Produto 1:

data-testid="0-product-price"

Produto 2:

data-testid="1-product-price"

Produto 3:

data-testid="2-product-price"

Deverá ser alterado para os seguintes data-testid listados abaixo:

data-testid="0-order-number"

data-testid="0-order-address"

data-testid="0-order-total-value"

data-testid="0-order-status"

![Pedidos Admin](./public/pedidosadmin.png)

O que será verificado:
```
- Será validado que é possível acessar a tela do pedidos do administrador

- Será validado que a tela de pedidos contém os atributos descritos no protótipo

- Será validado que os dados do card estão corretos

- Será validado que é possível clicar no card do produto e ser redirecionado para tela de detalhes do produto
```

### 12 - Criar tela de Detalhes de admin

Essa página corresponde às páginas `Admin - Detalhes de Pedido - Pendente` e `Admin - Detalhes de Pedido - Entregue` no protótipo.

- Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes do pedido;

- A rota da página deve ser `/admin/orders/:id`;

- No cabeçalho, mostre o `número do pedido` e o `status` atual - Pendente ou Entregue;

- Deve ter uma listagem com os produtos do pedido, onde cada linha deve conter:

  - Quantidade;

  - Nome do produto;

  - Valor total do produto.

- O `preço total` do produto é calculado usando **quantidade \* preço unitário**;

- Mostre também o `valor total do pedido`. O valor total do pedido é calculado a partir da **soma de todos os valores totais dos produtos**;

- Caso o status do pedido seja **pendente**, um botão para marcar o pedido como entregue deve ser exibido. Caso contrário, não exiba o botão;

- Ao clicar no botão `"Marcar pedido como entregue"`, o status desse pedido deve mudar para `Entregue` e o botão deve desaparecer.

#### Tela de Detalhes de Pedido

- O numero do pedido deverá conter a seguinte classe `data-testid="order-number"`

- O status do pedido deverá conter a seguinte classe `data-testid="order-status"`

- A quantidade do produto deverá conter a seguinte classe `data-testid="0-product-qtd"`

- O nome do produto deverá conter a seguinte classe `data-testid="0-product-name"`

- O valor total do produto deverá conter a seguinte classe `data-testid="0-product-total-value"`

- O preço unitário do produto deverá conter a seguinte classe `data-testid="0-order-unit-price"`

- O valor total do pedido deverá conter a seguinte classe `data-testid="order-total-value"`

- O botão 'Marcar como entregue' deverá conter a seguinte classe `data-testid="mark-as-delivered-btn"`

**[OBS: os campos data-testid deverão ser implementado um index para cada produto sempre comecando pelo index 0, para cada um dessas tags veja os exemplo abaixo:]**

Produto 1:

data-testid="0-product-price"

Produto 2:

data-testid="1-product-price"

Produto 3:

data-testid="2-product-price"

Deverá ser alterado para os seguintes data-testid listados abaixo:

data-testid="0-product-qtd"

data-testid="0-product-name"

data-testid="0-product-total-value"

data-testid="0-order-unit-price"

![Detalhes pedidos Admin](./public/detalhespedidosadmin.png)

O que será verificado:
```
- Será validado que é possível acessar a tela do detalhe do pedido do administrador

- Será validado que contém os atributos descritos no protótipo

- Será validado que o pedido contém nome e status do pedido

- Será validado que o pedido contém todos os detalhes do pedido

- Será validado que o pedido com status pendente irá apresentar na tela o botão "Marcar como entregue"

- Será validado que o pedido ao marcar como entregue o status mude para entregue" e o botão nao esteja mais visível

- Será validado que o status do pedido fica marcado como entregue como na imagem abaixo:
```
![Entregue](./public/entregue.png)
```

- Será validado que o pedido ao marcar como entregue o status mude para entregue" na tela de pedidos admin

- Será validado que o status do pedido fica marcado como entregue como na imagem abaixo:
```
![Entregue](./public/pedidoentregue.png)

### Bônus

### 13 - Cobertura de testes unitários

- Escreva testes unitários com cobertura de, no mínimo, 90%, considerando front-end e back-end;

---

# Avisos finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

#VQV

---

### IMPORTANTE ⚠️

* O projeto TryBeer é a base para o desenvolvimento do projeto TryBeer **v2**;

* Portanto, **o cumprimento de 100% dos requisitos obrigatórios desse projeto** (TryBeer) é um pré-requisito para o projeto **TryBeer v2**;

* O grupo precisa estar ciente que a não realização de todos os requisitos _(mesmo que o cumprimento pelo menos 80% dos requisitos obrigatórios para garantir a aprovação antes do prazo para entrar em recuperação, ou 90% dos requisitos totais depois do prazo)_, impactará na entrega do **TryBeer v2**;

* O prazo disponível para esse projeto contempla o tempo previsto para atingir o objetivo de concluir 100% dos requisitos obrigatórios;

* Dessa forma, o grupo terá todas as condições para chegar ao projeto **TryBeer v2** com o código preparado _(100% dos requisitos obrigatórios deste projeto)_ para iniciar o desenvolvimento dos seus requisitos.

* O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

