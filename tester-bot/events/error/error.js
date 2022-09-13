module.exports = {
    name: 'error',
    execute(error) {
        if(error)
            console.log(`An error event was sent by Discord.js:-`, error);
    },
};