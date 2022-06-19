import MessageType from '@adiwajshing/baileys'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  let url = 'https://wallpapercave.com/mwp/wp5580868.jpg'
  conn.sendButton(m.chat, 'Test', '-', url, [['Info', `.info`], ['Owner', `.owner`]], m)
}

handler.command = ['test']
handler.tags = ['owner']
handler.help = /^(test)$/i

export default handler
