const free = 1000
const prem = 2000

let handler = async (m, { isPrems }) => {
  let user = global.db.data.users[m.sender]
  let time = user.lastclaim + 86400000
  if (new Date - user.lastclaim < 86400000) throw `Espere *${stime(time - new Date())}* para volver a reclamar`
  user.money += isPrems ? prem : free
  user.lastclaim = new Date * 1
  user.common += 1
  m.reply(`Has reclamado *$${isPrems ? prem : free}* y una caja *comun*`)
}

handler.help = ['reclamar']
handler.tags = ['xp']
handler.command = /^(daily|claim|reclamar)$/i

export default handler


/*function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}*/

