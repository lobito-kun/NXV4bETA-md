import MessageType from '@adiwajshing/baileys'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  let girl = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/girl.json`)).data
  let url = pickRandom(girl)
  conn.sendButton(m.chat, 'Test', '-', url, [['Info', `.info`], ['Owner', `.owner`]], m)
}

handler.command = ['test']
handler.tags = ['owner']
handler.help = /^(test)$/i

export default handler
