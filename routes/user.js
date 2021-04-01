import { Router } from 'express';
import { 
    createUser, 
    getUsers, 
    getUser, 
    updateUser,
    deleteUser
} from '../controllers/user.controller';
const router = Router();

// /api/users

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;