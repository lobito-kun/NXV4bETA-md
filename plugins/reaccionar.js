let { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw 'Escribe un emoji junto al commando y etiqueta un mensaje'
  let q = m.quoted ? await m.getQuotedObj() : m
  conn.relayMessage(m.chat, { reactionMessage: proto.ReactionMessage.create({ key: q.key, text: args[0] }) }, { messageId: q.key.id })
}

handler.help = ['reaccionar']
handler.tags = ['sticker']
handler.command = /^(reaccionar|reaction|read|reaccion|reacción)$/i

export default handler
