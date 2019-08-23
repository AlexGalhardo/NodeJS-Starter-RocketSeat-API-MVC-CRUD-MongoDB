#### https://skylab.rocketseat.com.br/node/curso-node-js

- Iniciando Projeto
   - $ npm init -y
   - $ npm install express
   - package-lock.json serve apenas para cache
   - $ node server.js
   - nodemon serve para reiniciar o servidor automaticamente
   - $ npm install --save-dev nodemon OU $ npm install -D nodemon
   - devdependencias são dependencias que são utilizadas apenas em ambiente de desenvolvimento
   - $ npm run dev -> executa scripts dentro do package.json

- Instalar docker com mongodb
   - https://docs.docker.com/install/linux/docker-ce/ubuntu/
   - baixar container do mongodb
      - $ sudo docker pull mongo
   - mongodb usa a porta padrão 27017
   - bandeira -p significa redireionamento de porta do mongodb dentro do docker
   - -d = que imagem eu quero utilizar, que é a imagem que nós baixamos no pull
   - desligar mongodb local
      - $ sudo service mongodb stop
      - $ sudo /etc/init.d/mongodb stop
   - $ docker run --name mongodb -p 27017:27017 -d mongo
   $ docker ps
      - mostra que imagens do docker estão rodando
   - testar se mongodb esta funcionando
      - Ir para localhost:27017 ~ it looks like you are trying...
   - baixar software: https://robomongo.org/
      - robot3t

- Ver imagens docker 
   - $ docker ps -a
   - iniciar imagem docker
      - $ docker start 'nome da imagem'
      - $ docker start mongobd

- $ npm install mongoose
   - mongoose é um ORM
   - ao inves de usar a linguagem de dados, VAI FAZER UM OBJECT RELATIONAL MAPING (ORM)


- $ npm install require-dir
- $ sudo snap install insomnia
   - $ insomnia -> manage environments
   ```json
   {
      "base_url": "http://localhost:3001/api"
   }
   ```
   - base_url/products


- $ npm install mongoose-paginate
   - http://localhost:3001/api/products?page=4

- $ npm install cors
   - Cross-Origin Resource Sharing = permite que nossa api seja acessado por outros domínios