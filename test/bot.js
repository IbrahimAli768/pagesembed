const { Client, EmbedBuilder} = require ('discord.js')
const { token , prefix } = require('./config.json')
const client = new Client({
	intents: 131071,
     partials: [
		1, 2, 5, 3,
		4, 6, 0
	  ],
   });

/**
 * @pagesembed 
 * @install_package [npm i pagesembed]
 */

const pagesembed = require("pagesembed")
client.on('messageCreate', async pkgPage => {
	if(pkgPage.content.includes("?test")){
		let embeds = [
new EmbedBuilder().setTitle(' embeds: 1').setDescription(`
[Support Code](https://discord.gg/sJZZf4c8b5)
[Shop](https://discord.gg/8HN97GH3pP)
[Support Pkg](https://discord.gg/vDAdrVNPKt)
[𝑫𝒂𝒓𝒌_𝑴𝒂𝒔𝒕𝒆𝒓#7420](https://discord.com/channels/@me/811740947409797152)
`),
			new EmbedBuilder().setTitle(' embeds: 2').setDescription('[Description : 2]'),
			new EmbedBuilder().setTitle(' embeds: 3').setDescription('[Description : 3]'),
			new EmbedBuilder().setTitle(' embeds: 4').setDescription('[Description : 4]')
			]; // Create Embed inlimted
		pagesembed(pkgPage, [
			"⏮", // Skip Back Page[0] 
			"◀", // Back One Page
			"X", // exit Pages is Display
			"▶", // Next Pages[~]
			"⏭", // Skip Next Pages[~]
			{
				"valueEmbed":embeds,
				"style1":"",// If you don't want to change the fixed color leave it empty: you can change the time of my kidneys: [Secondary, Primary, Danger, Success]
				"style2":"",
				"style3":"",// If you don't want to change the fixed color leave it empty: you can change the time of my kidneys: [Secondary, Primary, Danger, Success]
				"style4":"", 
				"style5":"", // If you don't want to change the fixed color leave it empty: you can change the time of my kidneys: [Secondary, Primary, Danger, Success]
				"time": 30000 // Edit Time Filter end Display all Buttons  { End Time } 
			}
		])
	}
})

client.login(token)