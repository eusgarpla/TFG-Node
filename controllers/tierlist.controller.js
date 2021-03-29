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