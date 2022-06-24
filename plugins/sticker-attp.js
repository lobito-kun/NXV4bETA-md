let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*⛌ Ingrese el texto que quiera convertir a sticker*\n\n*• Ejemplo:*\n- ${usedPrefix + command} loli`
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'Error.webp', '', m, false, { asSticker: true })
}

handler.help = ['attp']
handler.tags = ['sticker']
handler.command = /^(attp)$/i

export default handler
