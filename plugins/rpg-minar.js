let handler = async (m, { conn, text, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let user = global.db.data.users[m.sender]
  let time = user.lastmiming + 37500 
  if (new Date - user.lastmiming < 37500) throw `Espera *${stime(time - new Date())}* para volver a minar` 

  let type = (args[0] || ' ').toLowerCase()

  switch (type) {
  case 'estaño':
  case 'tin':
    if (user.pickaxe_bronze < 1) throw 'Necesitas un pico para poder minar'
    let tin = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp1 = tin * 10
    user.mineral_tin += tin * 1 
    user.exp += exp1 * 1 
    let m1 = `
*Minaste 🏔️ mineral de estaño*

*Obtienes:*
◦ Estaño: ${tin}
◦ Exp: ${exp1}

*⛏️ Pico:* normal
`.trim()
    m.reply(m1)
    user.lastmiming = new Date * 1 
  break

  case 'cobre':
  case 'copper':
    if (user.pickaxe_bronze < 1) throw 'Necesitas un pico para poder minar'
    let copper = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp2 = copper * 10
    user.mineral_copper += copper * 1 
    user.exp += exp2 * 1 
    let m2 = `
*Minaste 🏔️ mineral de cobre*

*Obtienes:*
◦ Cobre: ${copper}
◦ Exp: ${exp2}

*⛏️ Pico:* normal
`.trim()
    m.reply(m2)
    user.lastmiming = new Date * 1 
  break

  case 'hierro':
  case 'iron':
    if (user.pickaxe_bronze < 1) throw 'Necesitas un pico para poder minar'
    let iron = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp3 = iron * 50
    user.mineral_iron += iron * 1 
    user.exp += exp3 * 1 
    let m3 = `
*Minaste 🏔️ mineral de hierro*

*Obtienes:*
◦ Hierro: ${iron}
◦ Exp: ${exp3}

*⛏️ Pico:* normal
`.trim()
    m.reply(m3)
    user.lastmiming = new Date * 1 
  break

  case 'sal':
  case 'salt':
    if (user.pickaxe_bronze < 1) throw 'Necesitas un pico para extraer la sal'
    if (user.mining_level < 10) throw 'Necesitas un nivel de minería de 10 para extraer la sal'
    let salt = Math.floor(Math.random() * (25 - 30) + 30) + 1
    let exp4 = salt * 80
    user.mineral_salt += salt * 1 
    user.exp += exp4 * 1 
    let m4 = `
*Minaste 🏔️ mineral de sal*

*Obtienes:*
◦ Sal: ${salt}
◦ Exp: ${exp4}

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
