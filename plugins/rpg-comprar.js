  //Picos
  const p_bronze = 250
  const p_iron = 1500
  const p_steel = 2750
  const p_crimsteel = 7000

let handler = async (m, { conn, usedPrefix, command, text, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]

  if (!text) return m.reply(`*• Ingrese un ítem o herrmient pr comprr*\n\n*Ejemplo de uso:*\n1. ${usedPrefix + command} <ítem>\n2. ${usedPrefix + command} pico\n\nEscribe *${usedPrefix}tienda* pr ver l list de ítems`)

  let type = (args[0] || ' ').toLowerCase()
  let type2 = (args[2] || args[1]).toLowerCase()

  switch (type) {
  case 'pico':
    switch (type2) {
      case 'bronce':
        if (user.money > p_bronze * 1) {
        user.pickaxe_bronze += 1
        user.money -= p_bronze * 1
        await m.reply(`Compraste un pico de *bronce* por *$${p_bronze}*`)
        } else m.reply(`Necesitas *$${p_bronze}* para comprar el pico`)
      break
    }
  break

  default:
  return m.reply(`El artículo *${args[0]}* no esta en la tienda`)
  }
}

handler.help = ['comprar']
handler.tags = ['rpg']
handler.command = /^(comprar|buy)$/i

export default handler
