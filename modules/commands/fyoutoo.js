const fs = require("fs");
module.exports.config = {
	name: "تبا",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "fuck",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("Fuck")==0 || event.body.indexOf("fuck you")==0 || event.body.indexOf("Fuck you")==0 || event.body.indexOf("pakyu")==0 || event.body.indexOf("Pakyu")==0 || event.body.indexOf("pak you")==0 || event.body.indexOf("Pak you")==0 || event.body.indexOf("pak u")==0 || event.body.indexOf("Pak u")==0 || event.body.indexOf("pak yu")==0 || event.body.indexOf("Pak yu")==0) {
		var msg = {
				body: "F you too",
				attachment: fs.createReadStream(__dirname + `/noprefix/fuck.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }