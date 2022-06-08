import fs from 'fs'

let handler = async (m, { conn, text } ) => {  
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bcgc|broadcastgroup/i.test(teks) ? teks : `\t\t\t\t*Anuncio | Grupos*\n\n${teks}` ), true).catch(_ => _)
  m.reply(`El anuncio se envió a ${groups.length} grupos`)
}

handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(broadcastgroup|bcgc)$/i

handler.owner = true

export default handler
