const SteamUser = require('steam-user');
// Loading up npm package.

const client = new SteamUser({enablePicsCache: true});
const config = require("./config.json");
// Call client.

var version = "9CLI"
console.log(`SteamRecentActivityHours Version ${version}\nScript by: AtomSnow`);
// Just splash text.

client.logOn({ 
  accountName: (config.username),
  password: (config.password),
});
// Logging in from config file.

client.on('appOwnershipCached', () => {
  console.log(`\nAccount Name: ${client.accountInfo.name}\nVAC Ban Count: ${client.vac.numBans}\nWallet Balance: ${client.wallet.balance}\n`);
  console.log(`Launching Games...`);
  var games = client.getOwnedApps();
  games[0] = 730;
  client.gamesPlayed(games);
  console.log(`Launched ${games.length} games and apps!\nSome apps or programs may not start, i have no clue how to fix this.`);
});
// Here, the magic begins, its not buggy anymore, enjoy simple code.
