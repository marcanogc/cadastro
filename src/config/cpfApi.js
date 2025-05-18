export const CPF_API_CONFIG = {
  BASE_URL: 'https://api.cpfhub.io/cpf',
  API_KEY: process.env.REACT_APP_CPF_API_KEY // Para testar, você pode colocar sua chave aqui diretamente.
};

 /*
    ⚠️ ATENÇÃO:
    Essa abordagem com a chave no código é apenas para testes locais rápidos.
    O ideal é que você **coloque sua chave da API em um arquivo .env** na raiz do projeto.
    
    Exemplo de uso seguro:
    
    1. Crie um arquivo chamado `.env` na raiz do projeto.
    2. Insira o conteúdo abaixo com sua própria chave:

       REACT_APP_CPF_API_KEY=4llkfkkvhcjh23jkv4h2j4hkjh4kjh23kjv4h23jk4h

    3. No seu código, troque a linha da chave para:

       API_KEY: process.env.REACT_APP_CPF_API_KEY

    4. Salve e reinicie o servidor de desenvolvimento com `npm start`.

    ✔️ Isso protege sua chave e segue as boas práticas de segurança.
  */
