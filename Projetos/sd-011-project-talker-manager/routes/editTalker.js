const express = require('express');
const fs = require('fs').promises;

const app = express();
// https://www.regextester.com/99555
const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

app.use(express.json());

function validToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token não encontrado' });
  if (token.length !== 16) return res.status(401).json({ message: 'Token inválido' });
  next();
}

function validName(req, res, next) {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
}

function validAge(req, res, next) {
  const { age } = req.body;
  if (age === '' || age === undefined) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
}

function validTalke(req, res, next) {
  const { talk } = req.body;
  const { watchedAt, rate } = talk;

  if (!regexDate.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  if (Number(rate) < 1 || Number(rate) > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
}

function objectTalkExists(req, res, next) {
  const { talk } = req.body;

  if (talk === undefined) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  next();
}

function contentObjectTalkExists(req, res, next) {
  const { talk } = req.body;
  const { watchedAt, rate } = talk;

  if (watchedAt === undefined || watchedAt === '' || rate === undefined || rate === '') {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  next();
}

module.exports = app.put('/talker/:id',
  validToken, validName, validAge, objectTalkExists,
  contentObjectTalkExists, validTalke, async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const readFile = await fs.readFile('./talker.json');
    const parseJson = await JSON.parse(readFile);
    const getObjectID = parseJson.findIndex((object) => object.id === Number(id));
    parseJson[getObjectID] = {
      name,
      age,
      id: Number(id),
      talk: {
        ...talk,
      },
    };
    await fs.writeFile('./talker.json', JSON.stringify(parseJson));
    return res.status(200).json(parseJson[getObjectID]);
  });
