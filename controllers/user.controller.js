import User from '../models/User';

export async function createUser(req, res){
    const {
        username, 
        twitterAccount, 
        contactInformation
        } = req.body;
    try {
        let newUser = await User.create({
            username,
            twitterAccount,
            contactInformation
        });
        if(newUser) {
            return res.json({
                message: 'User created',
                data: newUser
            });
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Error creating user'
        });
    }
}