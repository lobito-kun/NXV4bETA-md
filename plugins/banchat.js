let handler = async (m, { participants }) => {
  let chat = global.db.data.chats[m.chat]
  if (chat.isBanned) return m.reply('Este grupo ya está muteado!')
  chat.isBanned = true
  m.reply('*🔇 La bot a sido desactivada en este grupo*')
}

handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^(banchat|chatoff)$/i

handler.owner = true

export default handler
