const Game = require("../repositories/GameRepository")

exports.findAll = async (req, res) => {
    const games = await Game.findAll();
    return res.json(games);
}

exports.findOne = async (req, res) => {
    const id = req.params.id;
    const game = await Game.findByPk(id);
    if (game) {
        return res.json(game);
    } else {
        return res.status(404).json({ message: "Game not found" });
    }
    return res.json(game);
}

exports.create = async (req, res) => {
    const { name, year, price } = req.body;

    const game = await Game.create({
        name: name,
        year: year,
        price: price
    });
    return res.json(game);


}

exports.update = async (req, res) => {
    id = req.params.id;
    const game = await Game.findByPk(id);

    let name = req.body.name || game.name;
    let year = req.body.year || game.year;
    let price = req.body.price || game.price;


    const gameUpdate = await game.update({
        name: name,
        year: year,
        price: price,
    });

    return res.json(gameUpdate);

}

exports.delete = async (req, res) => {
    id = req.params.id;
    const game = await Game.findByPk(id);
    await game.destroy();
    return res.json({ message: "Game deleted" });
}
