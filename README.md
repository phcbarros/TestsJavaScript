# TestsJavascript

##Configuração do ambiente

### Plugins
1. Instalação do karma - npm install karma --save-dev
1. Instalação dos plugins - npm install karma-jasmine karma-chrome-launcher --save-dev;
1. Instalação do jasmine - npm install jasmine --save-dev
1. Instalação do karma-cli - npm install karma-cli -g

### Configurando o karma
Execute o comando karma init nome-arquivo (ex: karma init karma.config.js). O karma irá gerar o arquivo de configuração, apenas clique em enter em todas as opções. 
Abra o arquivo e na parte de files insira quais arquivos o karma deverá carregar ao ser executado.

### Executando os testes
Para executar os testes execute o comando karma start e o nome do arquivo de configuração (ex: karma start karma.config.js)