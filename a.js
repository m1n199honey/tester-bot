var databaseIDs = {};
let  database = ["one ,1, 11, 111, 1111",
                 "two ,2, 22, 222, 2222",
                 "three ,3, 33, 333, 3333"];



database.forEach((channel,i) => {
  let m = channel;
  
  let IDs = m.split(/[, ]+/);
  
  databaseIDs[IDs.shift()] = IDs;
});

console.log(databaseIDs);
var mID = "33";

databaseIDs.forEach(key =>{
  console.log(key);
})

for (let key in databaseIDs)
  for (let ID of databaseIDs[key])
    if (ID == mID) console.log(key);
https://discord.com/channels/967808235048423484/1022146370188087387/1022146373958770738
https://discord.com/api/v10/channels/1022146370188087387/messages/1022152710130249789
