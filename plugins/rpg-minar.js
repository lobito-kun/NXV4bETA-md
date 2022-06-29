let handler = async (m, { conn, text, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let user = global.db.data.users[m.sender]
  let time = user.lastmiming + 600000 
  if (new Date - user.lastmiming < 600000) throw `Espere *${stime(time - new Date())}* para volver a minar` 

  let type = (args[0] || ' ').toLowerCase()

  switch (type) {
  case 'estaño':
  case 'tin':
    let tin = Math.floor(Math.random() * (35 - 40) + 40) + 1
    user.mineral_tin += tin * 1 
    let m1 = `
*Minaste 🏔️ mineral de estaño*

*Obtienes:*
◦ Estaño: 40
◦ Exp: 396

*⛏️ Pico:* normal
`.trim()
    m.reply(m1)
    users.lastmiming = new Date * 1
  break

  }
}

handler.help = ['minar']
handler.tags = ['rpg']
handler.command = /^(minar|mining|mine|picar)$/i

export default handler
