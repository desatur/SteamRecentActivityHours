const SteamUser = require('steam-user');
// Loading up npm packages
const client = new SteamUser({enablePicsCache: true});
const config = require("./config.json");
// Setting up
var version = 5
console.log(`SteamRecentActivityHours Version ${version}\nScript by: Aræon`);
// Splash
client.logOn({ // Logging in from config file
  accountName: (config.username),
  password: (config.password),
});

client.on('appOwnershipCached', () => {
  console.log(`\nAccount Name: ${client.accountInfo.name}\nVAC Ban Count: ${client.vac.numBans}\nWallet Balance: ${client.wallet.balance}\n`);
  console.log(`Launching Games...`);
  var games = client.getOwnedApps();
  games[0] = 730;
  client.gamesPlayed(games);
  console.log(`Launched ${games.length} games and apps!\nSome apps or programs may not start, i have no clue how to fix this.`);
});
