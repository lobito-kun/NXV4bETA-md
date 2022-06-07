let handler = function (m) {
  if (!m.quoted) throw 'Etiqueta un mensaje mio para eliminarlo'
  let { chat, fromMe, isBaileys } = m.quoted
  if (!fromMe) throw 'Ese no es mi mensaje'
  if (!isBaileys) throw 'Ese no es mi mensaje'
  conn.sendMessage(chat, { delete: m.quoted.vM.key })
}

handler.help = ['delete']
handler.tags = ['main']
handler.command = /^(del|delete)$/i

handler.admin = true

export default handler
