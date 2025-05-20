![image](https://github.com/user-attachments/assets/4743dcec-d554-4e99-a531-4a0a26d21229)# Cadastro de Pessoas - React com Hooks

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
```
```text
src/
├── api/
│   ├── cepApi.js
│   └── cpfApi.js
├── components/
│   ├── styles/
│   │   ├── FormPessoa.css
│   │   ├── ListaPessoas.css
│   │   ├── PessoaItem.css
│   ├── CampoInput.jsx
│   ├── ContatoFields.jsx
│   ├── EnderecoFields.jsx
│   ├── FormPessoa.jsx
│   ├── ListaPessoas.jsx
│   ├── PessoaFields.jsx
│   ├── PessoaItem.jsx
├── config/
│   └── cpfApi.js
├── data/  # (caso tenha dados simulados)
│   └── pessoas.js
├── App.css
├── App.jsx
├── index.css
├── index.js
.env
.gitignore
package-lock.json
package.json
```

```

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
![image](https://github.com/user-attachments/assets/f767ad1d-d8dd-40a5-ad5e-aaba3bfbd5e0)

```
