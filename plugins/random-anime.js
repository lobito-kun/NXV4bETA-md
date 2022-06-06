import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
 await conn.reply(m.chat, global.wait, m)

let type = (m.text.replace(usedPrefix + ' ', '') || m.text.replace(usedPrefix, '')).toLowerCase()

switch (type) {
case 'waifu':
 let res = await fetch('https://api.waifu.pics/sfw/waifu')
 if (!res.ok) throw await res.text()
 let json = await res.json()
 if (!json.url) throw global.error
 conn.sendFile(m.chat, json.url, 'Error.jpg', '*WAIFU*', m)
break

default:
 }
}

handler.help = ['waifu']
handler.tags = ['nime']
handler.command = /^(waifu)$/i

export default handler
