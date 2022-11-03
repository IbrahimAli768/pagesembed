const { Client, EmbedBuilder} = require ('discord.js')
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

client.on('messageCreate', async message => {
	if(message.content.includes("?test")){
		let embeds = [
			new EmbedBuilder().setTitle(' embeds: 1'),
			new EmbedBuilder().setTitle(' embeds: 2'),
			new EmbedBuilder().setTitle(' embeds: 3'),
			new EmbedBuilder().setTitle(' embeds: 4')
		   ]; // Create Embed inlimted
		let time = 600000 // Edit Time Filter end Display all Buttons 
		pagesembed(message, embeds, time)
	}
})

client.login("Add Token Here")