let handler = async (m, { conn, args, text, usedPrefix, command }) => {

  let chat = global.db.data.chats[m.chat]

  let type = (command).toLowerCase()
  let type2 = (args[0] || ' ').toLowerCase()

  switch (type) {
  case 'autosticker':
    conn.sendButton(m.chat, '\t\t\t- *Autosticker* - ', '-', [['Desactivar', `${usedPrefix + command} off`], ['Activar', `${usedPrefix + command} on`]], m)
    switch (type2) {
    case 'off':
      if (chat.autosticker = false) throw m.reply('La función autosticker ya ha sido desactivado')
      chat.autosticker = false 
      m.reply('Se desactivó la función de autosticker en este grupo')
    break
    case 'on':
      if (chat.autosticker = true) throw m.reply('La función autosticker ya ha sido activado'')
      chat[m.chat].autosticker = true 
      m.reply('Se activó la función de autosticker en este grupo')
    break
    }
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

