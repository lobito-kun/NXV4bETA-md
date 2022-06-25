import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*⛌ Ingrese el imagen que quiere buscar en Pinterest*\n\n*• Ejemplo:*\n- ${usedPrefix + command} minecraft`
  await conn.reply(m.chat, global.wait, m)
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'Error.jpg', `*Pinterest:* ${text}`, m)
}

handler.help = ['pinterest']
handler.tags = ['img']
handler.command = /^(pinterest)$/i

export default handler
