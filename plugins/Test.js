import MessageType from '@adiwajshing/baileys'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  conn.sendMessage(m.chat, { contentText: 'Test', footerText: '  Lolibot - OFC', buttons: [{buttonId: '.info', buttonText: {displayText: '🛰 INFO'}, type: 1},{buttonId: '.owner', buttonText: {displayText: '🎋 CREADOR'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.ms-excel", "title": "Dibuat Oleh: Arifi Razzaq", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 99999999999, "pageCount": 25791, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "𝕷𝖔𝖑𝖎𝖇𝖔𝖙 - 𝕺𝖋𝖎𝖈𝖎𝖆𝖑™.⁖⃟•᭄", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": false }}, MessageType.buttonsMessage, { quoted: m, thumbnail: false, contextInfo: { mentionedJid: [m.sender, ownernum], forwardingScore: 750, isForwarded: true, externalAdReply: { title: "あなたは私のすべてです", body: "💌 Lobita & Gatito 💫", thumbnail: false, mediaType: "2", previewType: "VIDEO", mediaUrl: "" } } })
}

handler.command = ['test']
handler.tags = ['owner']
handler.help = /^(test)$/i

export default handler
