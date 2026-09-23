const express = require('express');

const _ = require('lodash');

const app = express();

const operacoesRoutes = require('./operacoes');

app.use(express.json());

app.use('/operacoes', operacoesRoutes);

app.listen(3000, () => {
  console.log('Servidor executando');
}); 

console.log(_.random(1, 30));