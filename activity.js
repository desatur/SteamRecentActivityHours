const SteamUser = require('steam-user');
const client = new SteamUser({enablePicsCache: true});
const config = require("./config.json");
console.log("SteamRecentActivityHours Version 4-0.6");

client.logOn({
  accountName: (config.username),
  password: (config.password),
});

client.on('appOwnershipCached', () => {
  console.log(`\nAccount Name: ${client.accountInfo.name}\nVAC Ban Count: ${client.vac.numBans}\nWallet Balance: ${client.wallet.balance}\n`);
  console.log(`Launching Games...`);
  var games = client.getOwnedApps();
  games[0] = 730;
  console.log(`Launched ${games.length} games and apps!`);
  client.gamesPlayed(games);
});
