# votacao-react

Sistema de votação utilizando **React** para o frontend e **Node.js** com **MongoDB** para o backend. Este projeto permite que os usuários votem em diferentes frameworks, e as informações são armazenadas em um banco de dados MongoDB, com os resultados sendo exibidos em tempo real.

## Estrutura do Projeto

- **Backend (Node.js + Express + MongoDB)**: Responsável por processar os votos e armazenar os resultados.
- **Frontend (React)**: Interface do usuário onde os usuários podem votar e visualizar os resultados.

---

## Como Executar o Projeto

### 1. Configuração do Backend

O backend é responsável por gerenciar a lógica de votos e interagir com o banco de dados MongoDB.

Estrutura do backend:

```bash

/backend
  ├── node_modules/  <-- Pasta de dependências do backend
  ├── package.json   <-- Definição de dependências do backend
  ├── server.js      <-- Código do backend
  ├── .env           <-- Variáveis de ambiente (ex: MONGO_URI)
  └── ...
```

#### Passos para executar o Backend:

1. Navegue até o diretório `backend`:

   ```bash
   cd backend
   ```

2. Instale as dependências do backend:

   ```bash
   npm install
   ```

3. Certifique-se de que o arquivo `.env` está configurado corretamente com a variável `MONGO_URI` para conectar ao banco de dados MongoDB.

   Exemplo do conteúdo do arquivo `.env`:

   ```env
   MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/enquete?retryWrites=true&w=majority
   ```

4. Inicie o servidor backend:

   ```bash
   node server.js
   ```

   O servidor estará rodando na porta `5000` por padrão.

5. Consultando o backend

```bash
curl -s http://localhost:5000/resultados | jq
```
<details><summary><i>Lista com os votos</i></summary>

```json
[
  {
    "_id": "675af15b0bdbbc91c9273ea2",
    "framework": "Robot Framework",
    "votos": 5,
    "__v": 0
  },
  {
    "_id": "675af1640bdbbc91c9273eaf",
    "framework": "Selenium",
    "votos": 5,
    "__v": 0
  },
  {
    "_id": "675af16a0bdbbc91c9273eb9",
    "framework": "Cypress",
    "votos": 5,
    "__v": 0
  },
  {
    "_id": "675af16e0bdbbc91c9273ec1",
    "framework": "Playwright",
    "votos": 5,
    "__v": 0
  }
]

```

</details>

---

### 2. Configuração do Frontend

O frontend é desenvolvido com **React** e exibe a interface de votação e os resultados em tempo real.

Estrutura do frontend:

```bash
/frontend
  ├── node_modules/  <-- Pasta de dependências do frontend
  ├── package.json   <-- Definição de dependências do frontend
  ├── public/        <-- Arquivos públicos (index.html, etc.)
  ├── src/           <-- Código-fonte do React
  └── ...
```

#### Passos para executar o Frontend:

1. Navegue até o diretório `frontend`:

   ```bash
   cd frontend
   ```

2. Instale as dependências do frontend:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do React:

   ```bash
   npm start
   ```

   O frontend estará disponível em [http://localhost:3000](http://localhost:3000).

---

### 3. Utilizando o Docker Compose

Se você deseja executar tanto o backend quanto o frontend em containers Docker, você pode usar o Docker Compose para facilitar o processo.

#### Passos para utilizar o Docker Compose:

1. Na raiz do projeto, onde está o arquivo `docker-compose.yml`, execute o seguinte comando para construir e iniciar os containers:

   ```bash
   docker-compose up --build
   ```

2. O Docker Compose irá construir os containers necessários para o frontend e backend, e ambos estarão disponíveis em:

   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend**: [http://localhost:5000](http://localhost:5000)

---

## Estrutura do Código

### Backend (`backend/`):

- **server.js**: Configuração e lógica do servidor Node.js.
- **.env**: Configuração das variáveis de ambiente (como `MONGO_URI`).
- **models/Result.js**: Modelo de dados para armazenar os votos.

### Frontend (`frontend/`):

- **App.js**: Componente principal do React, gerencia o envio de votos e exibe os resultados.
- **App.css**: Estilos do frontend.
- **assets/**: Contém imagens e outros recursos estáticos.

---

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **Node.js**: Plataforma JavaScript no servidor.
- **Express**: Framework para Node.js utilizado no backend.
- **MongoDB**: Banco de dados NoSQL para armazenar os votos.
- **Docker**: Ferramenta para contêinerização e execução de aplicativos.
- **Docker Compose**: Ferramenta para definir e rodar multi-contêineres Docker.

---

## Contribuições

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma *pull request* ou relatar problemas. Qualquer ajuda é bem-vinda!

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

