let handler = async (m, { conn, args }) => {

  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  let sortedExp = Object.entries(global.db.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.db.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)

  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])

  let len = args[1] && args[1].length > 1 ? Math.min(100, Math.max(parseInt(args[1]), 5)) : Math.min(10, sortedExp.length)

let type = (args[0] || ' ').toLowerCase()

switch (type) {

case 'exp':
case 'xp':
case 'experiencia':
  exp = `\t\t\t\t*乂 T O P  -  E X P*

*• Posicion:* *${userslevel.indexOf(m.sender) + 1}* de *${userslevel.length}*

${sortedExp.slice(0, len).map(([user, data], i) => '*' + (i + 1) + `. @${user.split`@`[0]}*\n*✨ Exp:* ${shortNum(data.exp)}`).join`\n╶\n`}
`
  m.reply(exp)
break

case 'limit':
case 'limite':
case 'límite':
  limite = `\t\t\t*乂 T O P  -  L I M I T E*

*• Posicion:* *${usersLim.indexOf(m.sender) + 1}* de *${usersLim.length}*

${sortedLim.slice(0, len).map(([user, data], i) => '*' + (i + 1) + `. @${user.split`@`[0]}*\n*🎟️ Limite:* ${shortNum(data.limit)}`).join`\n╶\n`}
`
  m.reply(limite)
break

case 'dinero':
case 'money':
  dinero = `\t\t\t*乂 T O P  -  D I N E R O*

*• Posicion:* *${usersmoney.indexOf(m.sender) + 1}* de *${usersmoney.length}*

${sortedmoney.slice(0, len).map(([user, data], i) => '*' + (i + 1) + `. @${user.split`@`[0]}*\n*💵 Dinero:* ${shortNum(data.money)}`).join`\n╶\n`}
`
  m.reply(dinero)
break

case 'nivel':
case 'level':
  dinero = `\t\t\t*乂 T O P  -  N I V E L*

*• Posicion:* *${userslevel.indexOf(m.sender) + 1}* de *${userslevel.length}*

${sortedlevel.slice(0, len).map(([user, data], i) => '*' + (i + 1) + `. @${user.split`@`[0]}*\n*⭐ Nivel:* ${shortNum(data.level)}`).join`\n╶\n`}
`
  m.reply(dinero)
break
}

}

handler.help = ['top']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb|top)$/i
handler.fail = null
handler.exp = 0

export default handler

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
