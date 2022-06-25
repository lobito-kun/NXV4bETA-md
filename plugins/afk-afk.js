let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`\t\t*😴 Ahora estas afk*\n• Usuario: ${conn.getName(m.sender)}\n• Razon: ${text ? ': ' + text : '×'}`)
}

handler.help = ['afk']
handler.tags = ['fun']
handler.command = /^(afk)$/i

export default handler
