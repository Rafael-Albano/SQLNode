yarn init -y // Inicia um projeto com todos os requisitos já setados.

yarn sequelize -h // Mostra todos os comandos do sequelize cli.

*** COM O SEQUELIZE CLI INSTALADO.
yarn sequelize db:create // Cria o banco de dados se o arquivo sequelize.rc(que guarda as credênciais de acessso(ou o caminho a elas) estiver criado).

//Criando minha tabela a partir de migrations
yarn sequelize migration:create --name=nome_tabela.

//Rodar as migrations criada
yarn sequelize db:migrate

//Desfaz (rollback) a ultima vez que eu rodei o comando db:migrate.
yarn sequelize db:migrate:undo

*** OBSERVAÇÃO: NÃO É POSSÍVEL DAR ROLLBACK EM MIGRATION EM AMBIENTE DE PRODUÇÃO.
CASO SEJE NECESSÁRIO ALTERAR A NOSSA MIGRATION DEVEMOS CRIAR UMA NOVA MIGRATION NOMEANDO A AÇÃO QUE QUEREMOS FAZER NA NOSSA  TABELA E DEPOIS FAZEMOS AS ALTERAÇÕES DENTRO DA NOVA MIGRATION CRIANDO ELA E DANDO UM ROLLBACK.
