let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let len = args[1] && args[1].length > 1 ? Math.min(100, Math.max(parseInt(args[1]), 5)) : Math.min(10, sortedExp.length)

  let type = (args[0] || ' ').toLowerCase()
  
  switch (type) {

  case 'exp':
  case 'xp':
  case 'experiencia':
    let topexp = `\t\t\t\t*乂 T O P  -  E X P*

*• Posicion:* *${usersExp.indexOf(m.sender) + 1}* de *${usersExp.length}*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `*${i + 1}. @${jid.split`@`[0]}*\n*✨ Exp:* ${shortNum(exp)}`).join`\n╶\n`}
`
    m.reply(topexp, null, { mentions: conn.parseMention(topexp) })
  break
  }
}

handler.help = ['top']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb|top)$/i

export default handler


function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
