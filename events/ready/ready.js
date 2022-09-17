module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Name :${client.user.tag} \n Status: online`);
        console.log('done...\n');
        client.init();//goto functions -> init
        console.log('Wating for Event ...(/)');
    },
};