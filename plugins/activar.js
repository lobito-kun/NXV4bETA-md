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
    if (!text) return conn.sendButton(m.chat, '\t\t\t\t*∙ 🎐 Auto Sticker 🎐 ∙*\n\nConvierte automáticamente los imágenes, gif y videos en sticker\n\nNota :\n[ El video no debe pasar los 10s | 1 MB ]', fr, [['Desactivar', `${usedPrefix + command} off`], ['Activar', `${usedPrefix + command} on`]], m)
    chat.autosticker = isOption
    await m.reply(`La función Auto Sticker se ${isOption ? 'activó' : 'desactivó'} en este Grupo`)
  break

  case 'antispam':
    if (!text) return conn.sendButton(m.chat, '\t\t\t\t*∙ 📵 Anti Spam 📵 ∙*\n\nElimina automáticamente a los usuarios que envíen mensajes consecutivos 10 veces en menos de 5 segundos', fr, [['Desactivar', `${usedPrefix + command} off`], ['Activar', `${usedPrefix + command} on`]], m)
    chat.antispam = isOption
    await m.reply(`La función Anti Spam se ${isOption ? 'activó' : 'desactivó'} en este Grupo`)
  break

  case 'antilink':
    if (!text) return conn.sendButton(m.chat, '\t\t\t\t*∙ 📵 Anti Link 📵 ∙*\n\nElimina automáticamente a los usuarios que envíen enlaces de grupos de WhatsApp', fr, [['Desactivar', `${usedPrefix + command} off`], ['Activar', `${usedPrefix + command} on`]], m)
    chat.antiLink = isOption
    await m.reply(`La función Anti Link se ${isOption ? 'activó' : 'desactivó'} en este Grupo`)
  break

  case 'antidelete':
    if (!text) return conn.sendButton(m.chat, '\t\t\t\t*∙ 📵 Anti Delete 📵 ∙*\n\nReenvia el mensaje eliminado del usuario', fr, [['Desactivar', `${usedPrefix + command} off`], ['Activar', `${usedPrefix + command} on`]], m)
    chat.antidelete = isOption
    await m.reply(`La función Anti Delete se ${isOption ? 'activó' : 'desactivó'} en este Grupo`)
  break

  case 'nsfw':
    if (!text) return conn.sendButton(m.chat, '\t\t\t\t*∙ 📵 Contenido +18 📵 ∙*\n\nPermite el acceso al comandos +18 (hentai, porno, rule34, etc)', fr, [['Desactivar', `${usedPrefix + command} off`], ['Activar', `${usedPrefix + command} on`]], m)
    chat.nsfw = isOption
    await m.reply(`La función +18 se ${isOption ? 'activó' : 'desactivó'} en este Grupo`)
  break
  }
}

handler.help = ['autosticker', 'antispam', 'antilink', 'antidelete', 'nsfw']
handler.tags = ['nable']
handler.command = /^(autosticker|antispam|antilink|antidelete|nsfw)$/i
handler.group = true
handler.admin = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

