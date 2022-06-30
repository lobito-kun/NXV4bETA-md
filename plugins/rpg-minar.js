let handler = async (m, { conn, text, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let user = global.db.data.users[m.sender]
  let time = user.lastmiming + 600000 
  if (new Date - user.lastmiming < 600000) throw `Espera *${stime(time - new Date())}* para volver a minar` 

  let type = (args[0] || ' ').toLowerCase()

  switch (type) {
  case 'estaño':
  case 'tin':
    let tin = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp = tin * 10
    user.mineral_tin += tin * 1 
    user.exp += exp * 1 
    let m1 = `
*Minaste 🏔️ mineral de estaño*

*Obtienes:*
◦ Estaño: ${tin}
◦ Exp: ${exp}

*⛏️ Pico:* normal
`.trim()
    m.reply(m1)
    user.lastmiming = new Date * 1 
  break

  case 'cobre':
  case 'copper':
    let copper = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp = copper * 10
    user.mineral_copper += copper * 1 
    user.exp += exp * 1 
    let m2 = `
*Minaste 🏔️ mineral de cobre*

*Obtienes:*
◦ Cobre: ${copper}
◦ Exp: ${exp}

*⛏️ Pico:* normal
`.trim()
    m.reply(m2)
    user.lastmiming = new Date * 1 
  break

  case 'hierro':
  case 'iron':
    let iron = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp = iron * 10
    user.mineral_iron += iron * 1 
    user.exp += exp * 1 
    let m3 = `
*Minaste 🏔️ mineral de hierro*

*Obtienes:*
◦ Hierro: ${iron}
◦ Exp: ${exp}

*⛏️ Pico:* normal
`.trim()
    m.reply(m3)
    user.lastmiming = new Date * 1 
  break

  case 'sal':
  case 'salt':
    let salt = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp = salt * 10
    user.mineral_salt += salt * 1 
    user.exp += exp * 1 
    let m4 = `
*Minaste 🏔️ mineral de sal*

*Obtienes:*
◦ Sal: ${salt}
◦ Exp: ${exp}

*⛏️ Pico:* normal
`.trim()
    m.reply(m4)
    user.lastmiming = new Date * 1 
  break
  }
}

handler.help = ['minar']
handler.tags = ['rpg']
handler.command = /^(minar|mining|mine|picar)$/i

export default handler
