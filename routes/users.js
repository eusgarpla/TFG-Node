import { Router } from 'express';
import { createUser } from '../controllers/user.controller';
const router = Router();

// /api/users

router.post('/', createUser);

module.exports = router;