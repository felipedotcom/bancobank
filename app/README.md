### inicializando o projeto

Abra o terminal e dentro da pasta `app` digite o comando `npm install` para instalarmos todas as dependências do projeto, certifique-se de ter as versões `npm 10.1.0` ou maior e `node v20.9.0` ou maior

### rodando os cases

Abra o terminal e dentro da pasta `app` do projeto use o comando.
```
npm run start < cases/case7.json
````

### testes

Dentro da pasta do projeto use o comando 

```
npm test -- src/adapters/OperationPresenter.test.js
```
 
para rodar teste de cada arquivo, ou, 

```
npm test 
```
para rodar todos os testes