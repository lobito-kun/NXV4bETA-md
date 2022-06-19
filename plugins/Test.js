import MessageType from '@adiwajshing/baileys'
import axios from 'axios'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  conn.reply(m.chat, '*Test*', false, { quoted: m, contextInfo: { externalAdReply: { showAdAttribution: true } }})
  conn.sendButton(m.chat, `*Test button*`, '-', imgmenu, [['Speedtest', '.ping'], ['Owner', '.owner']], false, { quoted: m, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: 'https://www.kibrispdr.org/dwn/7/yotsuba-nakano-wallpaper.jpg',
title: 'Simple MD',
body: 'By Rendyzzx',
thumbnail: imgmenu,
sourceUrl: 'https://youtu.be/poD-7_U3jXk'
}
  }
})
}

handler.command = ['test']

export default handler
