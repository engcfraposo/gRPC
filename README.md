# engcfraposo/gRPC
***

## Requisitos
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install)

## Clonagem e Instalação
```bash
$ git clone https://github.com/engcfraposo/gRPC.git
```
por fim execute o comando para entrar na pasta que foi criada e instalar as dependencias do projeto:
`install api`
```bash
$ cd api
$ yarn install
```

`install zeus`
```bash
$ cd api
$ yarn install
```

`install odin`
```bash
$ cd api
$ yarn install
```

## Comandos

Para iniciar a aplicação em ambiente de desenvolvimento basta executar o comando: `yarn dev` <br>Todavia existe alguns comandos que podem lhe ajudar a realizar outras tarefas como testes de integração, testes unitários, etc. Uma lista completa sobre os comandos de inicialização pode ser vista abaixo:

Comandos  | Tarefa a ser realizada
------------- | -------------
`yarn dev:server` | Inicializa o serviço em ambiente de desenvolvimento<br>Esse modo de inicialização permite que serviço seja reiniciado sempre que houver uma mudança nos arquivo do projeto
`yarn typeorm migrate:create -n NomeDaMigration` | Cria uma nova migration
`yarn typeorm migrate:run` | Migra todas as migrações baseado no models para o banco de dados
`yarn typeorm migrate:revert` | Desfaz todas as migrações do banco de dados
`yarn lint` | Monstrar os possíveis erros de linting
`yarn lint:fix` | Tenta corrigir os possíveis erros de linting

## Autores

👤 **Cláudio Rapôso <engcfraposo@gmail.com>** <br>

