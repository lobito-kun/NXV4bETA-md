import MessageType from '@adiwajshing/baileys'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  let url = 'https://wallpapercave.com/mwp/wp5580868.jpg'
  conn.sendButton(m.chat, `*Test button*`, '-', url, [['Owner', '.owner'],['Info', '.info']], false, { 
    contextInfo: { externalAdReply: {
    title: 'Test',
    body: '-', 
    sourceUrl: '', 
    thumbnail: false
  }}})

  //conn.sendButton(m.chat, 'Test', '-', url, [['Info', `.info`], ['Owner', `.owner`]], m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: '𝚁𝙴𝙿𝚁𝙾𝙳𝚄𝙲𝚃𝙾𝚁 𝙳𝙴 𝚅𝙸𝙳𝙴𝙾 𝚅𝟸',body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ', previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}

handler.command = ['test']
handler.tags = ['owner']
handler.help = /^(test)$/i

export default handler
