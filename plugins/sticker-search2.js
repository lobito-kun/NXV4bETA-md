import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Ingrese el nombre del paquete de stickers que desea buscar`
  let json = await fetch(`https://api.zacros.my.id/search/sticker?query=${text}`)
  let jsons = await json.json()
  let res = jsons.result.map((v, index) => `*💌 • Resultado:* ${1 + index}\n*🌺 • Nombre:* ${v.title}\n*🧃 • Url:* ${v.url}`).join`\n\n╶\n\n`
  let imgstick = fs.readFileSync('./storage/image/sticker-maker.jpg')
  await conn.sendFile(m.chat, imgstick, 'Error.jpg', res, m)
}

handler.help = ['stickers2']
handler.tags = ['search']
handler.command = /^(stickers2)$/i

export default handler
