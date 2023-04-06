//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by Name#0000 | https://discord.gg/NAME:
 * @INFO
 * Work for Development | https://NAME:.eu
 * @INFO
 * Please mention him / Development, when using this Code!
 * @INFO
 */
