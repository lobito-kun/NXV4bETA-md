let handler = async (m, { conn }) => {
  await conn.reply(m.chat, global.wait, m)
  let url = 'https://api.zacros.my.id/randomimg/cosplay'
  conn.sendFile(m.chat, url, 'Error.png', '*COSPLAY*', m)
}

handler.help = ['cosplay']
handler.tags = ['random']
handler.command = /^(cosplay)$/i

export default handler
