import { googleImage } from '@bochilteam/scraper'

let handler = m => m

handler.before = async function (m) {
  if (!m.quoted || !m.quoted.fromMe || !m.text || !/^Que imagen quieres/i.test(m.quoted.text)) return false
  const res = await googleImage(m.text)
  conn.sendFile(m.chat, res.getRandom(), 'Error.jpg', `✅ Resultado de: *${m.text}*`, m)
}

export default handler
