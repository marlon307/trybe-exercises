const express = require('express');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

module.exports = app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const readFileResult = await fs.readFile('./talker.json', 'utf-8').catch(() => {
    res.status(200).json([]);
  });

  const parseJson = JSON.parse(readFileResult);
  const result = parseJson.find((element) => element.id === Number(id));

  if (result === undefined) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }

  res.status(200).json(result);
});
