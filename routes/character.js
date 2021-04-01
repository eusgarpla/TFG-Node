import { Router } from 'express';
import { createCharacter, getCharacters, getCharacter, deleteCharacter, updateCharacter } from '../controllers/character.controller';

const router = Router();

router.post('/', createCharacter);
router.get('/', getCharacters);
router.get('/:characterId', getCharacter);
router.delete('/:characterId', deleteCharacter);
router.put('/:characterId', updateCharacter);

module.exports = router;