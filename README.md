# 🍔 API Hamburgueria

Projeto feito para uma atividade da faculdade, usando Node.js, Express e Sequelize.

A ideia é simular uma API de uma hamburgueria, onde dá pra cadastrar produtos, pedidos, entregas e também fazer avaliação dos pedidos.

---

## 💻 Tecnologias usadas

* Node.js
* Express
* Sequelize
* MySQL

---

## 📌 O que o projeto faz

* CRUD de categorias
* CRUD de produtos
* CRUD de pedidos
* CRUD de entregas
* CRUD de avaliações

---

## ⭐ Avaliação de pedidos

Foi criada uma funcionalidade onde o usuário pode avaliar um pedido com nota de 1 a 5.

A avaliação está ligada ao pedido por uma chave estrangeira (pedidoId).

---

## 🔗 Relacionamentos

* Um pedido tem uma entrega
* Um pedido pode ter várias avaliações
* Uma categoria pode ter vários produtos

---

## ⚡ Eager Loading

Nos pedidos:

* já retorna a entrega
* já retorna as avaliações

Nas categorias:

* já retorna os produtos

---

## 📁 Estrutura do projeto

controllers → lógica da aplicação
models → tabelas do banco
routes → rotas da API
migrations → criação das tabelas

---

## ⚙️ Como rodar o projeto

### 1. Clonar

```bash
git clone https://github.com/kauanmatheustrindade-spec/hamburguer.git
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Configurar banco

Editar o arquivo:

```
config/config.json
```

Colocar seu usuário e senha do MySQL.

---

### 4. Rodar migrations

```bash
npx sequelize-cli db:migrate
```

---

### 5. Rodar o projeto

```bash
npm start
```

---

## 📌 Exemplo de avaliação

```json
{
  "nota": 5,
  "pedidoId": 1
}
```

---

## 👨‍💻 Autor

Kauan Matheus Trindade Nascimento

---

## 📄 Observação

Projeto feito para fins de estudo.
