import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `Transmision realizada a ${chats.length} chats`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast|tx/i.test(teks) ? teks : `\t\t\t\t*Anuncio | grupos*\n\n${teks}` ), true).catch(_ => _)
  m.reply('Se transmitió a todos los chats')
}

handler.help = ['bc']
handler.tags = ['owner']
handler.command = /^(broadcast|bc|tx)$/i

handler.owner = true

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
