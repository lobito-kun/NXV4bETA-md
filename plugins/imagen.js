import { googleImage } from '@bochilteam/scraper'
  let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Que imagen quieres que busque?'
  const res = await googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'image.jpg', `✅ Resultado de: *${text}*`, m)
}

handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|imagen)$/i

export default handler
