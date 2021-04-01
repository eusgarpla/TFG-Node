import Game from '../models/Game';

export async function createGame(req, res) {
    const {
        name,
        platform,
        year
    } = req.body;

    try {
        let newGame = await Game.create({
            name,
            platform,
            year
        });

        if(newGame) {
            return res.json({
                message: 'Game created',
                data: newGame
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error creating game'
        });
    }
}

export async function getGames(req, res){
    try {
        let games = await Game.findAll();
        if(games) {
            return res.json({
                data: games
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error finding games'
        });
    }
}

export async function getGame(req, res){
    const { gameId } = req.params;

    try {
        let game = await Game.findAll({
            where: {
                id: gameId
            }
        });

        if(game) {
            return res.json({
                data: game
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: `Error finding game ${gameId}`
        });
    }
}

export async function deleteGame(req, res){
    const { gameId } = req.params;

    try {
        let deletedGame = await Game.destroy({
            where: {
                id: gameId
            }
        });

        if(deletedGame) {
            return res.json({
                message: 'Game deleted'
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: `Error deleting game ${gameId}`
        });
    }
}

export async function updateGame(req, res){
    const { gameId } = req.params;
    const {
        name,
        platform,
        year
    } = req.body;

    try {
        let updatedGame = await Game.update({
            name,
            platform,
            year
        }, {
            where: {
                id: gameId
            }
        });

        if(updatedGame) {
            return res.json({
                message: 'Game updated'
            });
        }
    } catch(e) {
        console.log(e)
        res.status(500).json({
            message: `Error deleting game ${gameId}`
        });
    }
}