import MessageType from '@adiwajshing/baileys'
import axios from 'axios'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  let url = await(await fetch('https://wallpapercave.com/mwp/wp5580868.jpg')).buffer()
  conn.sendButton(m.chat, `*Test button*`, '-', url, [['Owner', '.owner'],['Info', '.info']], false, { quoted: m, 
    contextInfo: { externalAdReply: {
    title: 'Test', 
    body: '-', 
    mediaType: '2', 
    previewType: 'VIDEO', 
    thumbnail: url, 
    mediaUrl: 'https://youtu.be/S8ivHgSumeg'
  }}})

  //conn.sendButton(m.chat, 'Test', '-', url, [['Info', `.info`], ['Owner', `.owner`]], m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: '𝚁𝙴𝙿𝚁𝙾𝙳𝚄𝙲𝚃𝙾𝚁 𝙳𝙴 𝚅𝙸𝙳𝙴𝙾 𝚅𝟸',body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ', previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}

handler.command = ['test']
handler.tags = ['owner']
handler.help = /^(test)$/i

export default handler
