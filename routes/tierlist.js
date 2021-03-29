import { Router } from 'express';
import { createTierList } from '../controllers/tierlist.controller';

const router = Router();

router.post('/', createTierList);

module.exports = router;