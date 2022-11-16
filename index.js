const { ActionRowBuilder , ButtonBuilder, EmbedBuilder, ButtonStyle} = require("discord.js")

module.exports = async (interaction , [
  but1,
  but2,
  but3,
  but4,
  but5,
  {
    "style1": sbut1,
    "style2": sbut2,
    "style3": sbut3,
    "style4": sbut4,
    "style5": sbut5,
    "time":time,
    "valueEmbed":embeds
  }
]) =>{

 if(!time) time = 60000

  if(!sbut1 || sbut1 == null) sbut1 = "Secondary"
  if(!sbut2 || sbut2 == null) sbut2 = "Primary"
  if(!sbut3 || sbut3 == null) sbut3 = "Danger"
  if(!sbut4 || sbut4 == null) sbut4 = "Primary"
  if(!sbut5 || sbut5 == null) sbut5 = "Secondary"

  if(!but1 || but1 == null) but1 = "<<"
  if(!but2 || but2 == null) but2 = "<"
  if(!but3 || but3 == null) but3 = "X"
  if(!but4 || but4 == null) but4 = ">"
  if(!but5 || but5 == null) but5 = ">>"
  
  let allbuttons = new ActionRowBuilder()
  .addComponents(
    [
      new ButtonBuilder()
      .setLabel(but1)
      .setCustomId("0")
      .setStyle(sbut1),

      new ButtonBuilder()
      .setLabel(but2) 
      .setCustomId("1")
      .setStyle(sbut2),

      new ButtonBuilder()
      .setLabel(but3)
      .setCustomId("2")
      .setStyle(sbut3),

      new ButtonBuilder()
      .setLabel(but4)
      .setCustomId("3")
      .setStyle(sbut4),

      new ButtonBuilder()
      .setLabel(but5)
      .setCustomId("4")
      .setStyle(sbut5)
    ])


    if(embeds.length == 1){
      

    }

    embeds = embeds.map((embed, index) => {
      return embed.setFooter({
        text : `Page ${index + 1}/${embeds.length}`,
        iconURL: interaction.guild.iconURL({ dynamic: true})
      })
    })

    let sendMsg;
    if(interaction.deferred){
      sendMsg = await interaction.followUp({embeds: [embeds[0]], components: [allbuttons]})
    } else {
      sendMsg = await interaction.reply({embeds: [embeds[0]], components: [allbuttons]})
    }

    let filter = m =>  m.member.id == interaction.member.id

    const collector = await sendMsg.createMessageComponentCollector({
      filter: filter , 
      time: time,
    })

    let currentPage = 0;
    collector.on('collect', async (b) => {
      if(b.isButton()){
        await b.deferUpdate().catch(err=> null)
        // Page Fast
        switch (b.customId) {
          case "0":{
            if(currentPage == 0){
              //currentPage = 0
await sendMsg.edit({
  embeds: [embeds[currentPage]],
  components: [allbuttons]
}).catch(async err => {
  await sendMsg.editReply({
    embeds: [embeds[currentPage]],
    components: [allbuttons]
  })
})
            } else {
              currentPage = 0
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(async err => {
                await sendMsg.editReply({
                  embeds: [embeds[currentPage]],
                  components: [allbuttons]
                })
              })
            }
          }break;

          case "1":{
            if(currentPage < embeds.length - 1){
              currentPage--
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(async err => {
                await sendMsg.editReply({
                  embeds: [embeds[currentPage]],
                  components: [allbuttons]
                })
              })
            } else {
              currentPage--
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(async err => {
                await sendMsg.editReply({
                  embeds: [embeds[currentPage]],
                  components: [allbuttons]
                })
              })
            }
          }break;

          case "2":{
allbuttons.components.forEach((btn) => btn.setDisabled((true)))
await sendMsg.edit({
  embeds: [embeds[currentPage]],
  components: [allbuttons]
}).catch(async err => {
  await sendMsg.editReply({
    embeds: [embeds[currentPage]],
    components: [allbuttons]
  })
})

          }break;

          case "3":{
            if(currentPage < embeds.length - 1){
              currentPage++
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(async err => {
                await sendMsg.editReply({
                  embeds: [embeds[currentPage]],
                  components: [allbuttons]
                })
              })
            } else {
              currentPage = 0
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(async err => {
                await sendMsg.editReply({
                  embeds: [embeds[currentPage]],
                  components: [allbuttons]
                })
              })
            }
          }break;

          case "4":{
currentPage = embeds.length -1
await sendMsg.edit({
  embeds: [embeds[currentPage]],
  components: [allbuttons]
}).catch(async err => {
  await sendMsg.editReply({
    embeds: [embeds[currentPage]],
    components: [allbuttons]
  })
})
          }break;
        
          default:
            break;
        }

      }
    })
    collector.on("end", async () =>{
      allbuttons.components.forEach((btn) => btn.setDisabled((true)))
await sendMsg.edit({
  embeds: [embeds[currentPage]],
  components: [allbuttons]
}).catch(async err => {
  await sendMsg.editReply({
    embeds: [embeds[currentPage]],
    components: [allbuttons]
  })
})
    })
}


