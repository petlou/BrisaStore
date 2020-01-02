import express from 'express';
import mongoose from 'mongoose';
import requireDir from 'require-dir';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb://localhost:27017/store',
  { useNewUrlParser: true }
);

requireDir('./models');

app.use('/', require('./routes'));

const port = 3000;

app.listen(port, () => {console.log(`O programa está sendo executado na porta ${port}`)});