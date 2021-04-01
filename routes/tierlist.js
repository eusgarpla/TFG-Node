import { Router } from 'express';
import { 
    createTierList, 
    getTierlists,
    getTierlist,
    deleteTierlist,
    updateTierlist
} from '../controllers/tierlist.controller';

const router = Router();

router.post('/', createTierList);
router.get('/', getTierlists);
router.get('/:tierlistId', getTierlist);
router.delete('/:tierlistId', deleteTierlist);
router.put('/:tierlistId', updateTierlist);

module.exports = router;