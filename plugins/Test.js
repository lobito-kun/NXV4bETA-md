import MessageType from '@adiwajshing/baileys'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  let bb = await conn.prepareMessage('0@s.whatsapp.net', false, 'documentMessage', { mimetype: 'application/pdf', thumbnail: false })
  let _p = '!'
  let cc = await conn.prepareMessageFromContent(m.chat, { buttonsMessage: { contentText: `Hi! Im ${conn.user.name}\n\nHere my menu...`, footerText: 'Test', buttons: [{ buttonId: `${_p}ping`, buttonText: { displayText: `ping` }, type: 1 }, { buttonId: `${_p}owner`, buttonText: { displayText: `owner` }, type: 1 }, { buttonId: `${_p}donasi`, buttonText: { displayText: `donasi` }, type: 1 }], headerType: 'DOCUMENT', documentMessage: { url: bb.message.documentMessage.url, mimetype: bb.message.documentMessage.mimetype, title: bb.message.documentMessage.title, fileSha256: bb.message.documentMessage.fileSha256, fileLength: '999999999', pageCount: '100', mediaKey: bb.message.documentMessage.mediaKey, fileName: conn.user.name, fileEncSha256: bb.message.documentMessage.fileEncSha256, directPath: bb.message.documentMessage.directPath, jpegThumbnail: bb.message.documentMessage.jpegThumbnail }}}, { quoted: m, contextInfo: { externalAdReply: { title: 'ᴅᴀғʏ乂ɴᴇʀɪɴᴀ乂ᴠᴀʟᴇɴ', body: 'ɪɴɪ ʙᴜᴀᴛᴀɴ ᴅᴀғʏ', mediaType: 2, thumbnail: false, mediaUrl: 'https://instagram.com/raaihankhadafi8' }}})
  conn.relayWAMessage(cc)
}

handler.command = ['test']
handler.tags = ['owner']
handler.help = /^(test)$/i

export default handler
