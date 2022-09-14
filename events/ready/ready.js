module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Name :${client.user.tag} \n Status: online`);
        console.log('Wating for Event ...(/)')
    },
};