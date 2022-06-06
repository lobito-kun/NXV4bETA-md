import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
 await conn.reply(m.chat, global.wait, m)
 let res = await fetch('https://api.waifu.pics/sfw/waifu')
 if (!res.ok) throw await res.text()
 let json = await res.json()
 if (!json.url) throw global.error
 conn.sendFile(m.chat, json, global.error, '*WAIFU*', m)
}

handler.help = ['waifu']
handler.tags = ['nime']
handler.command = /^(waifu)$/i

export default handler
