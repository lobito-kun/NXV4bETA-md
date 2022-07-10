let handler = async (m, { conn, args, text, usedPrefix, command }) => {

  const chat = global.db.data.chats[m.chat]

  let type = (command).toLowerCase()
  let isOption = { 
  'on': true,
  'off': false,
  'activar': true,
  'desactivar': false,
  }[(args[0] || '')]
  let fr = 'Elija un opción'

  switch (type) {
  case 'autosticker':
    if (!text) return conn.sendButton(m.chat, '\t\t\t\t*∙ 🎐 Auto Sticker 🎐 ∙**\n\nConvierte automáticamente los imágenes, gif y videos en sticker\n\nNota :\n[ El video no debe pasar los 10s | 1 MB ]', fr, [['Desactivar', `${usedPrefix + command} off`], ['Activar', `${usedPrefix + command} on`]], m)
    chat.autosticker = isOption
    await m.reply(`La función AutoSticker se ${isOption ? 'activó' : 'desactivó'} en este Grupo`)
  break
  }
}

handler.help = ['autosticker']
handler.tags = ['group']
handler.command = /^(autosticker)$/i

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

