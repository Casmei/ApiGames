var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();

///==================================================================
let db = {
    games: [
        {
            id:10,
            name: 'Valorant',
            year: 2020,
            price: 0
        },
        {
            id:11,
            name: 'Minecraft',
            year: 2008,
            price: 50
        },
        {
            id:12,
            name: 'CS:GO',
            year: 2014,
            price: 26
        },
    ]
}
///==================================================================

// List
router.get('/games', )

// Show
router.get('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id)
        let game = db.games.find(game => game.id == id)
        if(game != undefined){
            res.sendStatus = 200
            res.json(game)
        }else{
            res.sendStatus(404)
        }
    }
})

// Create
router.post('/game', (req, res) => {
    let {name, year, price} = req.body;

    if(isNaN(year)){
        res.sendStatus(400)
    }

    if(isNaN(price)){
        res.sendStatus(400)
    }

    db.games.push ({
        id: 14,
        name,
        year,
        price
    })
    res.sendStatus(200)

})













module.exports = router;
