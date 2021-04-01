import Tierlist from '../models/Tierlist';

export async function createTierList(req, res){
    const { title, likes, date, userId } = req.body;
    try {
        let newTierlist = await Tierlist.create({
            title,
            likes,
            date,
            userId
        });
        if(newTierlist){
            return res.json({
                message: 'Tierlist created',
                data: newTierlist
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error creating Tierlist'
        });
    }
}

export async function getTierlists(req, res){
    try {
        let tierlists = await Tierlist.findAll();
        if(tierlists) {
            return res.json({
                data: tierlists
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error finding tierlists'
        });
    }
}

export async function getTierlist(req, res){
    const { tierlistId } = req.params;

    try {
        let tierlist = await Tierlist.findAll({
            where: {
                id: tierlistId
            }
        });

        if(tierlist) {
            return res.json({
                data: tierlist
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: `Error finding tierlist ${tierlistId}`
        });
    }
}

export async function deleteTierlist(req, res){
    const {tierlistId} = req.params;
    
    try {
        let deletedTierlist = await Tierlist.destroy({
            where: {
                id: tierlistId
            }
        });

        if(deletedTierlist) {
            return res.json({
                message: 'Tierlist deleted'
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error deleting tierlist'
        });
    }
}

export async function updateTierlist(req, res){
    const { tierlistId } = req.params;
    const {
        title,
        likes,
        date
    } = req.body;

    try {
        let updatedTierlist = await Tierlist.update({
            title,
            likes,
            date
        }, {
            where: {
                id: tierlistId
            }
        });

        if(updatedTierlist) {
            return res.json({
                message: 'Tierlist updated'
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: `Error updating tierlist ${tierlistId}`
        });
    }
}