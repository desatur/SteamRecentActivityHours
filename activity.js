const SteamUser = require('steam-user');
const client = new SteamUser({enablePicsCache: true});
const config = require("./config.json");
console.log("SteamRecentActivityHours Version 3");

client.logOn({
  accountName: (config.username),
  password: (config.password),
});

client.on('appOwnershipCached', () => {
  console.log(``);
  console.log(`Account Name: ${client.accountInfo.name}`);
  console.log(`VAC Ban Count: ${client.vac.numBans}`);
  console.log(`Wallet Balance: ${client.wallet.balance}`);
  console.log(``);
  console.log(`Launching Games...`);
  var games = client.getOwnedApps();
  games[0] = 730;
  console.log(`Launched ${games.length} games!`);
  client.gamesPlayed(games);
});
