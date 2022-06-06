import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'waifu':
  let _waifu = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!_waifu.ok) throw await _waifu.text()
  let waifu = await _waifu.json()
  if (!waifu.url) throw global.error
  conn.sendFile(m.chat, waifu.url, 'Error.jpg', '*WAIFU*', m)
break

case 'loli':
  let loli = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/loli.json`)).data
  conn.sendFile(m.chat, pickRandom(loli), 'Error.jpg', '*LOLI*', m)
break

case 'neko':
  let _neko = await fetch('https://api.waifu.pics/sfw/neko')
  if (!_neko.ok) throw await _neko.text()
  let neko = await _neko.json()
  if (!neko.url) throw global.error
  conn.sendFile(m.chat, neko.url, 'Error.jpg', '*NEKO*', m)
break 

case 'megumin':
  let _megumin = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!_megumin.ok) throw await _megumin.text()
  let megumin = await _megumin.json()
  if (!megumin.url) throw global.error
  conn.sendFile(m.chat, megumin.url, 'Error.jpg', '*MEGUMIN*', m)
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
