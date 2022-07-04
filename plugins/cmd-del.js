let handler = async (m, { conn, usedPrefix, text, command }) => {
  let hash = text
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
  if (!hash) throw 'Ingrese el nombre del comando para eliminar'
  let sticker = global.db.data.sticker
  if (sticker[hash] && sticker[hash].locked) throw 'No puedes eliminar este comando'
  delete sticker[hash]
  m.reply(`Se eliminó el comando [ *${sticker.text}* ]`)
}

handler.help = ['delcmd']
handler.tags = ['database']
handler.command = /^(delcmd)$/i

export default handler
