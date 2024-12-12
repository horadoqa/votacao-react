const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();
// console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI) // Acessar MONGO_URI através do process.env
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err));

// Definindo o modelo de dados
const Result = mongoose.model('Result', {
  framework: String,
  votos: { type: Number, default: 0 },
});

app.use(cors());
app.use(express.json());

// Rota para enviar votos
app.post('/enquete', async (req, res) => {
  const { framework } = req.body;
  try {
    const result = await Result.findOne({ framework });
    if (result) {
      result.votos += 1;
      await result.save();
    } else {
      const newResult = new Result({ framework, votos: 1 });
      await newResult.save();
    }
    res.status(200).send('Voto registrado');
  } catch (error) {
    res.status(500).send('Erro ao registrar o voto');
  }
});

// Rota para obter os resultados
app.get('/resultados', async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.status(500).send('Erro ao carregar resultados');
  }
});

app.listen(5000, () => {
  console.log('Backend rodando na porta 5000');
});
