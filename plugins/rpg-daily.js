const rewards = {
  exp: 9999,
  money: 4999,
  potion: 5,
}
const cooldown = 86400000

let handler = async (m,{ conn } ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `Ya has reclamado este día, vuelve dentro de *${stime((user.lastclaim + cooldown) - new Date())}*`
  let text = '*Acabas de reclamar tu reclamo diario :*\n\n'
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `+${rewards[reward]} de ${global.rpg.emoticon(reward)}\n`
  }
  m.reply(text)
  user.lastclaim = new Date * 1
}

handler.help = ['daily']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler
