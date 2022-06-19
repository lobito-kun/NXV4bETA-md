import MessageType from '@adiwajshing/baileys'
import axios from 'axios'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  conn.sendButton(m.chat, `*Test button*`, '-', imgmenu, [['Speedtest', '.ping'], ['Owner', '.owner']], false, { quoted: m, contextInfo: { externalAdReply: {
  showAdAttribution: true,
  mediaType: 'VIDEO',
  mediaUrl: '',
  title: '作成されたボット',
  body: 'By gɑtito ⾕',
  thumbnail: imgmenu,
  sourceUrl: 'https://chat.whatsapp.com/J3WPEgZkRVmLgj7WQlwBKU'
  }}})
}

handler.command = ['test']

export default handler
