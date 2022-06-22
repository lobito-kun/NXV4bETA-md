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
  sourceUrl: 'ɑ
'
  }}})*/


const buttons = [
{ buttonId: `.info`, buttonText: { displayText: 'Info 🧃' }, type: 1 },
{ buttonId: `.creador`, buttonText: { displayText: 'Creador 🍭' }, type: 1 }, ]

let buttonMessage = {
"document": imgmenu, 
"fileName": '𝕷𝖔𝖑𝖎𝖇𝖔𝖙 - 𝕺𝖋𝖎𝖈𝖎𝖆𝖑™.⁖⃟•᭄', 
"mimetype": 'application/vnd.ms-excel',
"jpegThumbnail": imgmenu,
"caption": '*Test button*',
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": 'By gɑtito ⾕',
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": '作成されたボット',
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": miniurl,
"mediaUrl": 'https://chat.whatsapp.com/ELn6Ck7InoP6UmA3QiQsgo',
"sourceUrl": 'https://chat.whatsapp.com/ELn6Ck7InoP6UmA3QiQsgo' }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })

const message = {
            document: imgmenu,
            jpegThumbnail: imgmenu,
            fileName: '𝗧 𝗜 𝗠 𝗘 : ',
            mimetype: 'application/vnd.ms-excel',
            fileLength: '99999999999999',
            pageCount: 777,
            caption: '*Test button 2*',
            footer: '-',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `Lolibot`,
                        url: 'https://simple-api-lord-bot.herokuapp.com/'
                    }
                },
                {
                    urlButton: {
                        displayText: '💌 Group Official',
                        url: 'https://chat.whatsapp.com/ELn6Ck7InoP6UmA3QiQsgo'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🌹 Owner',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🐾 Speed',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📮 Donasi',
                        id: '.donasi'
                    }
                },
            ]
        }
        await conn.sendMessage(m.chat, message)

}

handler.command = ['test']

export default handler
