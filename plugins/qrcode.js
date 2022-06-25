import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*⛌ Ingrese el texto que quiera convertir a código QR*\n\n*• Ejemplo:*\n- ${usedPrefix + command} loli`
  conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'Error.png', '*✔️ Texto convertido a código QR*', m)
}

handler.help = ['qrcode']
handler.tags = ['tools']
handler.command = /^(qrcode)$/i

export default handler
