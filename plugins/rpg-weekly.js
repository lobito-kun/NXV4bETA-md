const rewards = {
  exp: 15000,
  money: 35999,
  potion: 9,
}
const cooldown = 604800000

let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastweekly < cooldown) throw `Ya has reclamado esta semana, vuelve dentro de *${stime((user.lastweekly + cooldown) - new Date())}*`
  let text = '*Acabas de reclamar tu reclamo de la semana :*\n\n'
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `+${rewards[reward]} de ${global.rpg.emoticon(reward)}\n`
  }
  m.reply(text)
  user.lastweekly = new Date * 1
}

handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.cooldown = cooldown

export default handler
