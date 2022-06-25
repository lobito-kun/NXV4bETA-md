let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `Elige un lugar de pesca`
  let user = global.db.data.users[m.sender]
  let rod = global.db.data.users[m.sender].rod
  let fdurability = global.db.data.users[m.sender].roddurability
  let __waktur = (new Date - global.db.data.users[m.sender].lastfishing)
  let _waktur = (180000 - __waktur)
  let waktur = stime(_waktur)
  let blowfish = (rod == 1 ? Math.floor(Math.random() * (8 - 10) + 10) + 1 : '')
  let tropicalfish = (rod == 1 ? Math.floor(Math.random() * (11 - 13) + 13) + 1 : '')
  let commonfish = (rod == 1 ? Math.floor(Math.random() * (50 - 60) + 60) + 1 : '')
  let exp = (rod == 1 ? Math.floor(Math.random() * (300 - 400) + 400) + 1 : '')
  let durability = (Math.floor(Math.random() * (50 - 100) + 100) + 1)
  let ca = (rod == 0 ? 'no tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'antigua' : '' || rod == 3 ? 'corupta' : '' )
  let word = (pickRandom(['un rio 🚣‍♀', 'el mar ⛵', 'en una playa 🏖️']))

  let mr = {
  m1: 'zona 1',
  m2: 'zona 2',
  m3: 'zona 3',
  m4: 'zona 4',
  m5: 'zona 5',
  }

  let type = (text).toLowerCase() 
  switch (type) {
  case '1':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (user.level >= 5) throw 'Minimo nivel 5 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1
        user.roddurability -= durability * 1
        user.commonfish += commonfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.blowfish += blowfish * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m1}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez comun: ${commonfish}
◦ Pez tropical: ${tropicalfish}
◦ Pez globo: ${blowfish}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  case '2':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (user.level >= 10) throw 'Minimo nivel 10 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.roddurability -= durability * 1 
        user.commonfish += commonfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.crab += crab * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m2}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez comun: ${blowfish}
◦ Pez tropical: ${tropicalfish}
◦ Cangrejo: ${commonfish}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  case '3':
    if (rod > 0) {
    if (user.level >= 20) throw 'Minimo nivel 20 para pescar en esta zona'
    if (user.roddurability > 99) {
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1
        user.blowfish += blowfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.commonfish += commonfish * 1 
        user.roddurability -= durability * 1
        user.exp += exp * 1
    let teks = `
*Pescaste en ${mr.m3}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez comun: ${blowfish}
◦ Cangrejo: ${tropicalfish}
◦ Langosta: ${commonfish}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  case '4':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (user.level >= 30) throw 'Minimo nivel 30 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1
        user.blowfish += blowfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.commonfish += commonfish * 1 
        user.roddurability -= durability * 1
        user.exp += exp * 1
    let teks = `
*Pescaste en ${mr.m4}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Cangrejo: ${blowfish}
◦ Langosta: ${tropicalfish}
◦ Camaron: ${commonfish}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  case '5':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (user.level >= 40) throw 'Minimo nivel 40 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1
        user.blowfish += blowfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.commonfish += commonfish * 1 
        user.roddurability -= durability * 1
        user.exp += exp * 1
    let teks = `
*Pescaste en ${mr.m5}*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez comun: ${blowfish}
◦ Calamar: ${tropicalfish}
◦ Pulpo: ${commonfish}
◦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
    } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
  break

  default:
  return m.reply(`La zona *${args[0]}* no esta en el mapa!`)
  }
}

handler.help = ['pescar']
handler.tags = ['rpg']
handler.command = /^(pescar|fishing)$/i

export default handler


function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
