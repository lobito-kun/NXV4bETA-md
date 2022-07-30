const rewards = {
    exp: 50000,
    money: 49999,
    potion: 10,
    mythic: 3,
    legendary: 1
}
const cooldown = 2592000000

let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `Ya has reclamado este mes, vuelve dentro de *${stime((user.lastmonthly + cooldown) - new Date())}*`
    let text = '*Acabas de reclamar tu reclamo del mes:*\n\n'
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `◦ ${rpg.emoticon(reward)} +${rewards[reward]}\n`
    }
    m.reply(text)
    user.lastmonthly = new Date * 1
}

handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i

handler.cooldown = cooldown

export default handler
