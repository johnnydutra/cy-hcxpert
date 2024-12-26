# Desafio HCXpert

Desafio de automação em Cypress com cenário web em Cucumber e cenário de API.

## Stack utilizada

**Ferramentas:** Cypress e Cucumber

**Linguagens** JavaScript e Gherkin

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/johnnydutra/cy-hcxpert.git
```

Instale as dependências

```bash
  npm install
```

Inicie a execução

```bash
  npm start
```

## Variáveis de Ambiente

Os testes estão parametrizados para utilizar valores padrão. Não é mandatório alterá-las para proceder com a execução. Caso haja necessidade, estas podem ser modificadas no arquivo cypress.config.js:

`defaultEmail: endereço de email utilizado para fazer login na aplicação web`

`defaultName: nome do usuário dono do email utilizado para cadastro`

`defaultPassword: senha para login na aplicação web`
