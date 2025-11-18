# Swag-Labs-test

Este repositório contém um conjunto de testes E2E em Cypress para o site de prática "Sauce Demo" (https://www.saucedemo.com). Os testes foram criados para exercitar automação e demonstrar fluxos de login, navegação por produtos, adição ao carrinho e checkout.

## Índice

-   Sobre
-   Pré-requisitos
-   Instalação
-   Scripts / Comandos
-   Fixtures
-   Comandos customizados (Cypress)
-   Relatórios
-   Bugs encontrados (problemas do site de prática)
-   Observações sobre testes que falham
-   Como contribuir / Notas

## Sobre

Projetos de teste para praticar automação com Cypress. Alguns testes podem falhar por problemas (bugs) intencionais no site de prática — esses casos estão descritos na seção de Bugs.

## Pré-requisitos

-   Node.js (recomendo v16+)
-   npm ou yarn

## Instalação

1. Clone o repositório
2. Instale dependências:

```bash
npm install
```

> Este projeto usa o Cypress (versão declarada em `package.json`) e `cypress-mochawesome-reporter` para relatórios.

## Scripts / Comandos úteis

-   Executar todos os testes (headless):

```bash
npm test
# que executa: cypress run
```

-   Abrir o Cypress Test Runner (modo interativo):

```bash
npx cypress open
```

-   Executar um spec específico (ex.: `login.cy.js`):

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

-   Executar com relatório mochawesome (já configurado no `cypress.config.js`):

```bash
npx cypress run
# após execução, veja os relatórios em cypress/reports/html
```

## Fixtures

Os arquivos de fixtures estão em `cypress/fixtures`:

-   `example.json` — fixture de exemplo (geralmente gerado por template inicial)
-   `produtos.json` — dados de produtos usados nos testes

Use `cy.fixture('produtos.json')` nos testes para carregar esses dados.

## Comandos customizados (Cypress)

Arquivos de comandos estão em `cypress/support/commands.js` que importa:

-   `cypress/support/commands/login.js`

    -   `fazerLoginValido()` — realiza login com usuário `problem_user` / `secret_sauce`.
    -   `loginComCredenciaisInvalidas(username, password)` — tenta login com credenciais passadas.
    -   `mensagemDeErro(mensagem)` — valida mensagem de erro na tela de login.

-   `cypress/support/commands/produtos.js`

    -   `acessarProduto(seletor)` — clica no seletor do produto para abrir página de detalhes.
    -   `adicionarProduto(seletor)` — clica no seletor para adicionar ao carrinho.
    -   `removerProduto(seletor)` — clica no seletor para remover do carrinho.
    -   `validarNomeProduto(nome)` — valida o nome do produto em detalhes.
    -   `carrinhoTemItens()` — valida que o ícone do carrinho mostra quantidade > 0.
    -   `carrinhoVazio()` — valida que não existe badge de quantidade no carrinho.
    -   `selecionarFiltro(value)` — seleciona uma opção no seletor de ordenação de produtos.

-   `cypress/support/commands/compra.js`
    -   `fazerCompra()` — fluxo simples de comprar: abre produto, adiciona, vai ao carrinho, preenche informações e prossegue.

Esses comandos são usados pelos testes em `cypress/e2e`.

## Relatórios

O projeto já configura o `cypress-mochawesome-reporter` no `cypress.config.js`. Após `npx cypress run` os relatórios HTML/JSON são gerados em `cypress/reports/html`.

Abra `cypress/reports/html/index.html` no navegador para ver o relatório com screenshots e logs.

## Bugs encontrados (problemas do site de prática)

Os testes foram executados e alguns falharam devido a problemas (bugs) no site de prática — estes foram observados e documentados para referência:

1. Fotos não correspondem ao produto — a imagem exibida não bate com o produto listado.
2. Os filtros de produtos não funcionam — selecionar ordenação não altera a ordem dos itens.
3. Descrição dos produtos com erros — por exemplo, aparece código/função dentro da descrição (texto inválido).
4. Título de um dos produtos está com o nome de uma função — o texto do título é uma função em vez do nome do produto.
5. Links dos produtos não redirecionam para a página correta — o link do produto não leva à página correspondente ao nome.
6. Em algumas páginas de produto o botão "Add to cart" não funciona — clicar não adiciona o item.
7. Na página com todos os produtos o botão "Add to cart" não funciona; em outros casos adiciona mas o botão "Remove" não remove o produto corretamente.
8. Na área de Checkout → Your Information: o campo Last Name envia a digitação para o campo First Name com apenas uma letra aparecendo, impedindo finalizar a compra.

> Observação: muitos desses problemas parecem ser comportamentos intencionais do site de prática para testar robustez dos scripts de automação. Por isso os testes podem falhar; esses casos foram capturados nos relatórios.

## Observações sobre testes que falham

-   Se um teste falha, verifique o relatório em `cypress/reports/html` e as screenshots em `cypress/screenshots` para entender se é um problema do teste (seletores/código) ou um bug do site.
-   Para testes que dependem de filtros, imagens ou links corretos, marcar como "expected failure" (ou ajustar assertions) pode ser uma abordagem temporária até que o site seja corrigido.
-   Anotei os bugs acima; quando for reportar issues ou enviar PRs, inclua prints e steps para reproduzir (há screenshots em `cypress/screenshots`).

## Como contribuir / Notas

-   Para adicionar/ajustar testes, abra uma branch e crie PR com descrição do que foi alterado.
-   Para debug rápido, rode `npx cypress open` e execute o spec que deseja em modo interativo.

## Contato / Issues

Crie issues no repositório: https://github.com/Portella10/Swag-Labs-test/issues

## Licença

Este projeto segue a licença no `package.json` (ISC).

---

Arquivo gerado automaticamente com resumo dos comandos/fixtures e dos bugs observados durante a execução dos testes.
