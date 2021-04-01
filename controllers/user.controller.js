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

export async function getUsers(req, res){
    try {
        let users = await User.findAll();
        if(users) {
            return res.json({
                data: users
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error finding users'
        });
    }
}

export async function getUser(req, res){
    const { userId } = req.params;

    try {
        let user = await User.findAll({
            where: {
                id: userId
            }
        });

        if(user) {
            return res.json({
                data: user
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: `Error finding user with id ${userId}`
        });
    }
}

export async function deleteUser(req, res){
    const { userId } = req.params;

    try { 
        let deletedUser = await User.destroy({
            where: {
                id: userId
            }
        });

        if(deletedUser) {
            return res.json({
                message: 'User deleted',
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error deleting user'
        });
    }

}

export async function updateUser(req, res){
    const {         
        username, 
        twitterAccount, 
        contactInformation 
    } = req.body;
    const {userId} = req.params;

    try {
        let updatedUser = await User.update({
            username: username,
            twitterAccount: twitterAccount,
            contactInformation
        },{
            where: {
                id: userId
            }
        });

        if(updatedUser) {
            return res.json({
                message: 'User updated',
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: `Error updating user ${userId}`
        })
    }
}