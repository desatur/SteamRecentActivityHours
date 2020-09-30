const SteamUser = require('steam-user');
const client = new SteamUser({enablePicsCache: true});
console.log("SteamRecentActivityHours Version 2");
console.log("Logging in...");

client.logOn({
  accountName: "your username",
  password: "your password",
});

client.on('appOwnershipCached', () => {
  var games = client.getOwnedApps();
  games[0] = 730;
  console.log(`Launched ${games.length} games!`);
  client.gamesPlayed(games);
});
