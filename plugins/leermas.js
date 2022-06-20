let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*⛌ Ingrese un texto para convertir en (... Leer más)*\n\n*• Ejemplo:*\n- ${usedPrefix + command} Hola|xd`
  let [l, r] = text.split`|`
  if (!l) l = ''
  if (!r) r = ''
  conn.reply(m.chat, l + readMore + ' ' + r, m)
}

handler.help = ['leermas'] 
handler.tags = ['tools']
handler.command = /^(leermas|readmore)$/i

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
