import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  if (!text) throw 'Ingrese un texto para enviar el anuncio a todos los grupos'
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '*Anuncio 🕊️*', 'jpegThumbnail': false }}}
  let teks = `\t\t\t\t*Anuncio | grupos*\n\n${text}`
  for (let id of groups) {
  conn.sendMessage(m.chat, { text: teks, mentions: (await conn.groupMetadata(`${id}`)).participants.map(v => v.id) }, { quoted: fakegif })
  //conn.sendButton(id, '────━┅ *BROADCAST* ┅━────\n' + text, 'lolibot-md', 'BROADCAST', [['OWNER 🎐', '.owner'],['DONASI ✨', '.donasi']], false, { contextInfo: { externalAdReply: { title: 'Test', body: '-', sourceUrl: '', thumbnail: false }}})
  }
  conn.reply(m.chat, `El anuncio se envío a *${groups.length} grupos*!`, m)
}

handler.command = ['test']
handler.tags = ['owner']
handler.help = /^(test)$/i

export default handler
