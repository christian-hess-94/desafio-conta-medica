Este projeto foi criado em [ReactJS](https://reactjs.org) por meio da biblioteca [Create React App](https://github.com/facebook/create-react-app).

## Funcionalidades
Abaixo estão citadas as funcionalidades presentes no projeto.

1. Autenticação - Autenticação feita com os serviços do [Firebase](https://console.firebase.google.com/) (email + password)
2. Persistência de dados - Persistencia feita com os serviços do Firebase Firestore (carrinho)
3. Roteamento - Roteamento e troca de páginas
4. Listagem - Listagem de quadrinhos no formato infinite loading
5. Detalhes - Detalhamento de cada quadrinho
6. Carrinho - Adicionar quadrinhos em um carrinho
7. Checkout - Checkout do quadrinho com preço total e outras informações
8. Hosting - O projeto está hosteado nos servidores Firebase Hosting (link)

##Inicialiazação
Abaixo estão citados os processos necessários para instalar e inicializar o projeto

### `npm install`
Com o [NodeJS](http://nodejs.org) instalado no computador, execute o comando `npm install --save` no root do projeto para instalar todas as dependencias listadas na seção "Dependências" deste projeto

### `npm start`
Após executado o comando `npm install --save`, executar o comando `npm start` para iniciar o projeto. A porta 3000 do computador deve estar liberada para que o projeto seja inicializados sem problemas.
Pode ser que seja necessário dar permissão de administrador, e liberação no Firewall do Windows, ao NodeJS.

### `localhost`
Após o serviço ser inicializado, acessar http://localhost:3000 em qualquer navegador para visualizar o projeto.

### Redux Dev Tools
Este projeto foi desenvolvido com ajuda do Redux Dev Tools, uma ferramentas para auxiliar no desenvolvimento de aplicações que usem o Redux para gerenciar o estado da aplicação. Essa funcionalidade deve estar desabilitada em casos de testes mas caso interfira na execução do projeto, siga os passos abaixo:

Caso o projeto seja inicializado porém com tela branca, o navegador não possui o Redux Dev Tools instalado. Nesse caso o Redux Dev Tools deve ser instalado no navegador ou desabilitado do projeto.

Para instalar o Redux Dev Tools no seu navegador, siga o link apropriado:
[Google Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR)
[Mozilla Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/reduxdevtools/)

Para desabilitar do projeto siga os seguintes passos:

1. Abra o arquivo `src\helpers\redux\Store.js`
2. Comente ou remova a linha 15: `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Configuração do Redux DevTools para Google Chrome`
3. Salve o arquivo e espere o projeto recarregar

## Dependências
Abaixo estão citadas e brevemente explicadas as dependencias de desenvolvimento do projeto:

1. [Axios](https://www.npmjs.com/package/axios) - Biblioteca para realizar requisições HTTP
2. [@Material-UI/core](https://www.npmjs.com/package/@material-ui/core) - Biblioteca de estilos no formato Material Design da Google
3. [Firebase](https://www.npmjs.com/package/firebase), [Firebase-tools](https://www.npmjs.com/package/firebase-tools) - Biblioteca de conexão com o serviço Firebase da Google para persistencia de dados e autenticação
4. [Redux](https://www.npmjs.com/package/redux) - Responsável por criar estado global da aplicação para persistencia de dados entre telas
5. [Redux-Forms](https://www.npmjs.com/package/redux-forms) - Biblioteca para gerenciar o estado de formulários através da metodologia do Redux
6. [React-redux](https://www.npmjs.com/package/react-redux) - Biblioteca para integrar o ReactJS ao Redux
7. [React-router](https://www.npmjs.com/package/react-router), [React-router-dom](https://www.npmjs.com/package/react-router-dom) - Biblioteca usada para realizar o roteamento entre as páginas do projeto
