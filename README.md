# Cadastro de Pessoas - React com Hooks

Aplicação React criada com Create React App (CRA), utilizando componentes funcionais com Hooks para realizar o cadastro de pessoas.

## ✨ Funcionalidades

- Cadastro de pessoas com os campos: nome, sobrenome, idade, e-mail, telefone, CPF e endereço completo.
- Máscaras de entrada para CPF, telefone e CEP.
- Preenchimento automático de endereço via API do [ViaCEP](https://viacep.com.br/).
- Validação de CPF usando a API pública do [CpfHub.io](https://www.cpfhub.io/) *(chave deve ser configurada no `.env`)*.
- Separação dos componentes por responsabilidade.

## 🛠️ Tecnologias

- React + Hooks
- Axios
- Expressões Regulares (Regex)
- API ViaCEP (CEP)
- API CPFHub.io (validação de CPF)

## 📁 Estrutura de Pastas

src/
├── api/ # Integração com APIs externas (CEP, CPF)
├── components/ # Componentes reutilizáveis do formulário
│ ├── styles/ # Estilização separada por componente
├── config/ # Configurações de integração (ex: cpfApi.js)
├── data/ # Dados simulados (se aplicável)


## 📦 Instalação

1. Clone o repositório:

git clone https://github.com/marcanogc/cadastro.git

Instale as dependências:

npm install

Crie um arquivo .env na raiz do projeto:

REACT_APP_CPF_API_KEY=YOUR_API_KEY_AQUI

Inicie o projeto:

npm start

🚫 Aviso
Certifique-se de que o arquivo .env não seja enviado ao GitHub. O mesmo está listado no .gitignore para evitar vazamentos de chaves.

📷 Demonstração

