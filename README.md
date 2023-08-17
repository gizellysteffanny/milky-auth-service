# 🔐 Milky Auth Service

O Milky Auth Service é um microserviço dedicado à autenticação de usuários para o aplicativo Milky Taskscape.

## 🛠️ Tecnologias Utilizadas

- Linguagem de Programação: Node.js
- Framework: Express.js
- Banco de Dados: PostgreSQL

## 🚀 Funcionalidades

- Registro de Usuários
- Login de Usuários
- Geração e Gerenciamento de Tokens de Autenticação

## ✅ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de prosseguir:

- Node.js
- Docker (para configurar o ambiente com Docker Compose)

## 📦 Instalação

1. Clone este repositório para a sua máquina local.
2. Execute `npm install` para instalar as dependências.
3. Configure as variáveis de ambiente no arquivo `.env` para conexão com o banco de dados.
4. Execute `npm start` para iniciar o microserviço.
5. Configure o banco de dados PostgreSQL com Docker Compose:
   - Abra um terminal na pasta raiz do projeto e execute o comando:
   ```sh
   npm docker:start
   ```

## 🌐 Endpoints

- `POST /register` - Registrar um novo usuário.
- `POST /login` - Fazer login e obter um token de autenticação.
- `GET /profile` - Buscar informações do usuário logado.

## 🔒 Segurança

Este microserviço segue práticas recomendadas de segurança, como armazenamento seguro de senhas e uso de tokens JWT para
autenticação.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests.

## 📄 Licença

Este projeto está licenciado sob a [licença MIT](LICENSE).

---

**Importante:** Este microserviço é parte do aplicativo Milky Taskscape. Certifique-se de que você também tem o
microserviço de gerenciamento de tarefas configurado corretamente para uma experiência completa do aplicativo.
