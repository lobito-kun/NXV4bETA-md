
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let img = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/loli.json`)).data
conn.sendFile(m.chat, pickRandom(img), 'Error.jpg', '*LOLI*', m)
}

handler.help = ['loli']
handler.tags = ['nime']
handler.command = ['loli']
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
