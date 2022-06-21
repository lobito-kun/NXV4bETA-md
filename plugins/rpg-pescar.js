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
  let ca = (rod == 0 ? 'No tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'Caña ????' : '' || rod == 3 ? 'Caña ????' : '' || rod == 4 ? 'Caña ????' : '' || rod == 5 ? 'Caña ????' : '')
  let word = (pickRandom(['un rio 🚣‍♀', 'el mar ⛵', 'en una playa 🏖️']))

  let type = (args[0] || ' ').toLowerCase() 
  switch (type) {
  case 'mar profundo':
  case 'en mar profundo':
  case 'en el mar profundo':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1
        user.blowfish += blowfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.commonfish += commonfish * 1 
        user.roddurability -= durability * 1
        user.exp += exp * 1
    let teks = `
*Pescaste en el ⛵ mar profundo*

*🎣 Caña:* ${ca}

*Obtienes:*
◦ Pez globo: ${blowfish}
◦ Pez tropical: ${tropicalfish}
◦ Pez comun: ${commonfish}
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
