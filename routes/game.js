import { Router } from 'express';
import { createGame, getGames, getGame, deleteGame, updateGame } from '../controllers/game.controller';

const router = Router();

router.post('/', createGame);
router.get('/', getGames);
router.get('/:gameId', getGame);
router.delete('/:gameId', deleteGame);
router.put('/:gameId', updateGame);

module.exports = router;