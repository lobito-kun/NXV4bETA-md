import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'waifu':
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw global.error
  conn.sendFile(m.chat, json.url, 'Error.jpg', '*WAIFU*', m)
break

case 'loli':
  let img = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/loli.json`)).data
  conn.sendFile(m.chat, pickRandom(img), 'Error.jpg', '*LOLI*', m)
break

case 'neko':
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw global.error
  conn.sendFile(m.chat, json.url, 'Error.jpg', '*NEKO*', m)
break 

case 'megumin':
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw global.error
  conn.sendFile(m.chat, json.url, 'Error.jpg', '*MEGUMIN*', m)
break

default:
 }
}

handler.help = ['waifu', 'loli', 'neko', 'megumin']
handler.tags = ['random']
handler.command = /^(waifu|loli|neko|megumin)$/i

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
