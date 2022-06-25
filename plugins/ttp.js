import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*⛌ Ingrese el texto que quiera convertir a sticker*\n\n*• Ejemplo:*\n- ${usedPrefix + command} loli` 
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  throw stiker.toString()
}

handler.help = ['ttp']
handler.tags = ['sticker']
handler.command = /^(ttp)$/i

export default handler
