let handler = async (m, { conn, args, text, usedPrefix, command }) => {

  let chat = global.db.data.chats[m.chat]

  let type = (command).toLowerCase()
  let isOption = { 
  'on': true,
  'off': false,
  'activar': true,
  'desactivar': false,
  }[(args[0] || '')]

  switch (type) {
  case 'autosticker':
    if (!text) throw await conn.sendButton(m.chat, '\t\t\t- *Autosticker* - ', '-', [['Desactivar', `${usedPrefix + command} off`], ['Activar', `${usedPrefix + command} on`]], m)
    chat.autosticker = isOption
    await m.reply(`La función autosticker se ${isOption ? 'activó' : 'desactivó'} en este grupo`)
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

