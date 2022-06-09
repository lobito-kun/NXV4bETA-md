import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
  var {age} = db.data.users[m.sender]
  if (age <17) throw conn.reply(m.chat, 'Eres menor de edad! vuelve cuando tengas más de 18 años', m) 
  let pw = ["https://api.waifu.pics/nsfw/blowjob", "https://api.waifu.pics/nsfw/neko", "https://api.waifu.pics/nsfw/waifu"] 
  let nk = pw[Math.floor(Math.random() * pw.length)]
  let res = await fetch(nk)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw global.error
  conn.sendFile(m.chat, json.url, 'Error.jpg', '*HENTAI*', m)
}

handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = ['hentai']
handler.nsfw = true
handler.register = true

export default handler
