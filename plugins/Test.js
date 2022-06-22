import MessageType from '@adiwajshing/baileys'
import axios from 'axios'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  /*conn.sendButton(m.chat, `*Test button*`, '-', imgmenu, [['Speedtest', 'ping'], ['Owner', 'owner']], false, { quoted: m, contextInfo: { externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: imgmenu, title: 'Simple Bot Esm', body: 'By Papah-Chan',thumbnail: imgmenu, sourceUrl: 'https://youtu.be/poD-7_U3jXk' } } })

  conn.sendButton(m.chat, `*Test button*`, 'Creɑted by gɑtito ⾕', imgmenu, [['Info 🧃', '.ping'], ['Creador 🍭', '.owner']], false, { quoted: m, contextInfo: { externalAdReply: {
  showAdAttribution: true,
  mediaType: 'VIDEO',
  mediaUrl: '',
  title: '作成されたボット',
  body: 'By gɑtito ⾕',
  thumbnail: miniurl,
  sourceUrl: 'https://chat.whatsapp.com/ELn6Ck7InoP6UmA3QiQsgo'
  }}})


const buttons = [
{ buttonId: `.info`, buttonText: { displayText: 'Info 🧃' }, type: 1 },
{ buttonId: `.creador`, buttonText: { displayText: 'Creador 🍭' }, type: 1 }, ]

let buttonMessage = {
document: imgmenu, 
fileName: '𝕷𝖔𝖑𝖎𝖇𝖔𝖙 - 𝕺𝖋𝖎𝖈𝖎𝖆𝖑™.⁖⃟•᭄', 
mimetype: 'application/vnd.ms-excel',
jpegThumbnail: imgmenu,
caption: '*Test button*',
fileLength: '99999999999999',
mentions:[m.sender],
footer: 'By gɑtito ⾕',
buttons: buttons,
headerType: 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": '作成されたボット',
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": miniurl,
"mediaUrl": 'https://youtu.be/eC9TfKICpcY',
"sourceUrl": 'https://chat.whatsapp.com/ELn6Ck7InoP6UmA3QiQsgo' }}} 
conn.sendMessage(m.chat, buttonMessage, m)*/

conn.sendMessage(m.chat, { contentText: '*Test button*', footerText: ' Lolibot - OFC', buttons: [{buttonId: '.info', buttonText: {displayText: '🛰 INFO'}, type: 1},{buttonId: '.owner', buttonText: {displayText: '🎋 CREADOR'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.ms-excel", "title": "Dibuat Oleh: Arifi Razzaq", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 99999999999, "pageCount": 25791, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "𝕷𝖔𝖑𝖎𝖇𝖔𝖙 - 𝕺𝖋𝖎𝖈𝖎𝖆𝖑™.⁖⃟•᭄", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": imgmenu }}, MessageType.buttonsMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender], forwardingScore: 750, isForwarded: true, externalAdReply: { title: "あなたは私のすべてです", body: "💌 Lobita & Gatito 💫", thumbnail: miniurl, mediaType: "2", previewType: "VIDEO", mediaUrl: "" } } }) 

}

handler.command = ['test']

export default handler
