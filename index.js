import app from './app';
import User from './models/User';
import Tierlist from './models/Tierlist';
import Game from './models/Game';
import Character from './models/Character';

async function main() {
    try{
        // Sync models
        await User.sync();
        await Game.sync();
        await Tierlist.sync();
        await Character.sync();
    } catch(e) {
        console.log(e)
    }
    await app.listen(4000)
    console.log('Server on port 4000')
}

main();