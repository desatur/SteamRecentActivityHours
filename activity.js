const SteamUser = require('steam-user');
const http = require('http');
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
  console.log(`\nLaunching http info server.`)
  http.createServer(function (req, res) { // Start http server with information
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`SteamRecentActivityHours Version ${version}\nScript by: Araeon\nRunning ${games.length} games and apps on ${client.accountInfo.name}.`);
  }).listen(8080);
  console.log(`Server started. Type http://localhost:8080/ in your browser to see how many games/apps are you playing!`)
});
