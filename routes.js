const express = require('express');
const router = express.Router();
const controller = require('./controller/gamesController')

router.get('/game', controller.findAll);

router.get('/game/:id', controller.findOne);

router.put('/game/:id', controller.update);

router.post('/game', controller.create);

router.delete('/game/:id', controller.delete);



module.exports = router;
