<a href="https://discord.gg/vDAdrVNPKt">

![discord](https://img.shields.io/discord/893859514548371546?color=%237289da&label=Discord%20Server&logo=discord&logoColor=%237289da&style=for-the-badge)
</a>

# Pages Embed 📋
```md
# Create and control Embed pages
-
## This `pagesembed` the package is used for `v14` version only and will be downloaded after v13 version for users of this version 
```
# Install Package 📁
```md
# npm i pagesembed
```

# Features of what ⚒
```md
#1 Is it possible to change an emoji to words: ["🟢"]

#2 Is it possible to change words to emoji: ["🟢"]

#3 Is it useful to change the waiting time: ["🟢"]

#4 Is it possible to change the shape of the baton: ["🟢"]

#5 Can I add more than one embed: ["🟢"] 
``` 

# Details and explanation 🌚
```md
# style1: "" || If you want the fixed color "" leave it empty

# style1: "Secondary" || if you want to change the guest of steel baton [Secondary, Primary, Danger, Success]

- 

# "", // If you want the fixed emoji "" leave it empty

# "❤", // if you want to change the guest of emoji ["❤"]
```


# Example Bot 😌
```js
const { Client, EmbedBuilder } = require ('discord.js')
const client = new Client({
	intents: 131071,
     partials: [
		1, 2, 5, 3,
		4, 6, 0
	  ],
   });

/**
 * @pagesembed 
 * @install_package [ npm i pagesembed ]
 */

const pagesembed = require("pagesembed") // Package

client.on('messageCreate', async pkgPage => {
if(pkgPage.content.includes("?test")){
let embeds = [
new EmbedBuilder().setTitle(' embeds: 1').setDescription('[Description : 1]'),
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
"style1":"",
"style2":"",
"style3":"",
"style4":"", 
"style5":"", 
"time": 30000 // Edit Time Filter end Display all Buttons  { End Time } 
} // If you don't want to change the fixed color leave it empty: you can change the time of my kidneys: [Secondary, Primary, Danger, Success]
])
}
})

client.login("Add Token Here")
```
# Image [`Test Code`]
> Image Test Code Style Embed and Button 📥
![image](https://media.discordapp.net/attachments/1030320736038043678/1038176052855451658/image.png)

