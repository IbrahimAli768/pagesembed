const { ActionRowBuilder , ButtonBuilder, EmbedBuilder, ButtonStyle} = require("discord.js")

module.exports = async (interaction, embeds, time) =>{
  let allbuttons = new ActionRowBuilder()
  .addComponents(
    [
      new ButtonBuilder()
      .setLabel('<<')
      .setCustomId("0")
      .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
      .setLabel('<') 
      .setCustomId("1")
      .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
      .setLabel('x')
      .setCustomId("2")
      .setStyle(ButtonStyle.Danger),

      new ButtonBuilder()
      .setLabel('>')
      .setCustomId("3")
      .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
      .setLabel('>>')
      .setCustomId("4")
      .setStyle(ButtonStyle.Secondary)
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
}).catch(err=> null)
            } else {
              currentPage = 0
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(err=> null)
            }
          }break;

          case "1":{
            if(currentPage < embeds.length - 1){
              currentPage--
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(err=> null)
            } else {
              currentPage--
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(err=> null)
            }
          }break;

          case "2":{
allbuttons.components.forEach((btn) => btn.setDisabled((true)))
await sendMsg.edit({
  embeds: [embeds[currentPage]],
  components: [allbuttons]
}).catch(err=> null)

          }break;

          case "3":{
            if(currentPage < embeds.length - 1){
              currentPage++
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(err=> null)
            } else {
              currentPage = 0
              await sendMsg.edit({
                embeds: [embeds[currentPage]],
                components: [allbuttons]
              }).catch(err=> null)
            }
          }break;

          case "4":{
currentPage = embeds.length -1
await sendMsg.edit({
  embeds: [embeds[currentPage]],
  components: [allbuttons]
}).catch(err=> null)
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
}).catch(err=> null)
    })
}


