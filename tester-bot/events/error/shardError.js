module.exports = {
    name: 'shardError',
    execute(error) {
        if(error)
            console.error(`A websocket connection encountered an error:-`, error);
    },
};