const free = 1000
const prem = 2000

const cooldown = 86400000

let handler = async (m, { conn, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  let __timers = (new Date - user.lastclaim)
  let _timers = (cooldown - __timers)
  let timers = stime(_timers)
  if (new Date - user.lastclaim > cooldown) {
      user.money += isPrems ? prem : free
      user.common += 1
      user.lastclaim = new Date * 1
      m.reply(`Has reclamado *$${isPrems ? prem : free}* y una caja *comun*`)
  } else {
      m.reply(`Espere *${timers}* para volver a reclamar`)
  }
}

handler.help = ['reclamar']
handler.tags = ['rpg']
handler.command = /^(reclamar|claim|daily)$/i

handler.cooldown = cooldown

export default handler
