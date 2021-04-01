import Character from '../models/Character';

export async function createCharacter(req, res){
    const {
        name,
        version,
        gameId
    } = req.body;

    try {
        let newCharacter = await Character.create({
            name,
            version,
            gameId
        });

        if(newCharacter)  {
            return res.json({
                message: 'Character created',
                data: newCharacter
            })
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error creating character'
        });
    }
}

export async function getCharacters(req, res){
    try {
        let chars = await Character.findAll();
        if(chars) {
            return res.json({
                data: chars
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error finding characters'
        });
    }
}

export async function getCharacter(req, res){
    const { characterId } = req.params;

    try {
        let character = await Character.findAll({
            where: {
                id: characterId
            }
        });

        if(character) {
            return res.json({
                data: character
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: `Error finding character with id ${characterId}`
        });
    }
}

export async function deleteCharacter(req, res){
    const { characterId } = req.params;

    try {
        let deletedCharacter = await Character.destroy({
            where: {
                id: characterId
            }
        });

        if(deletedCharacter) {
            return res.json({
                message: 'Character deleted'
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Error deleting character'
        });
    }
}

export async function updateCharacter(req, res){
    const { characterId } = req.params;
    const {  
        name,
        version,
    } = req.body;

    try {
        let updatedCharacter = await Character.update({
            name,
            version,
        }, {
            where: {
                id: characterId
            }
        });

        if(updatedCharacter) {
            return res.json({
                message: 'Character updated'
            });
        }
    } catch(e) {
        console.log(e);
        return res.status(500).json({
            message: `Error updating character ${characterId}`
        });
    }
}