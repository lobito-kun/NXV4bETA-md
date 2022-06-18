import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '*Anuncio 🕊️*', 'jpegThumbnail': false }}}
  for (let id of groups) {
  conn.sendMessage(m.chat, { text: text, mentions: (await conn.groupMetadata(`${id}`)).participants.map(v => v.id) }, { quoted: fakegif })
  //conn.sendButton(id, '────━┅ *BROADCAST* ┅━────\n' + text, 'lolibot-md', 'BROADCAST', [['OWNER 🎐', '.owner'],['DONASI ✨', '.donasi']], false, { contextInfo: { externalAdReply: { title: 'Test', body: '-', sourceUrl: '', thumbnail: false }}})
  }
}

handler.command = ['test']
handler.tags = ['owner']
handler.help = /^(test)$/i

export default handler
