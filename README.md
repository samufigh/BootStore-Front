# BootStore-Front

Este é o repositório front-end para o BootStore, uma aplicação de comércio eletrônico desenvolvido como parte de um projeto maior. Este front-end é construído utilizando React, e é destinado a interagir com o back-end correspondente disponível em 

## Pré-requisitos

Antes de começar, certifique-se de ter instalado as seguintes ferramentas:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/samufigh/BootStore-Front.git

2. Navegue até o diretório do projeto:

   ```bash
    cd BootStore-Front
3. Instale as dependências
    ```bash
    npm install

## Configuração
Antes de iniciar a aplicação, deve-se configurar as seguintes variáveis de ambiente:

- `REACT_API_BASE_URL`: https://github.com/samufigh/BootStore-Back

Pode-se configurar essas variáveis em um arquivo `.env` na raiz do projeto.

# Rotas

A seguir estão as principais rotas fornecidas para este front end para interagir com o back end correspondente. Certifique-se de ter configurado o back-end corretamente as variáveis de ammbiente mencionadas na seção de `Configuração`.

## Rotas Públicas

### Página Inicial
- **Rota:** `/`
- **Descrição:** Exibe a página inicial da aplicação.

### Catálogo de Produtos
- **Rota:** `/products`
- **Descrição:** Exibe uma lista de produtos disponíveis para compra.

### Detalhes do Produto
- **Rota:** `/products/:productId`
- **Descrição:** Exibe detalhes específicos de um produto com base no ID do produto.

## Rotas Protegidas

### Carrinho de Compras
- **Rota:** `/cart`
- **Descrição:** Exibe o carrinho de compras com os itens selecionados pelo usuário.

### Página do Usuário
- **Rota:** `/user`
- **Descrição:** Exibe informações do usuário e histórico de pedidos. Requer autenticação.

## Rotas de Autenticação

### Login
- **Rota:** `/login`
- **Descrição:** Permite que o usuário faça login na aplicação.

### Registro
- **Rota:** `/register`
- **Descrição:** Permite que novos usuários se registrem na aplicação.

### Logout
- **Rota:** `/logout`
- **Descrição:** Realiza o logout do usuário autenticado.

## Exemplo de Uso

### Obter Lista de Produtos

```bash
curl http://localhost:3000/products