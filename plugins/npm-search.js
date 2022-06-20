import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*⛌ Ingrese lo que quiere buscar en Npm*\n\n*• Ejemplo:*\n- ${usedPrefix + command} baileys`
  conn.reply(m.chat, global.wait, m)
  let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
  let { objects } = await res.json()
  if (!objects.length) throw `No se encontró *${text}* en npm`
  let txt = objects.map(({ package: pkg }) => {
    return `*• Nombre:* ${pkg.name}\n*• Versión:* v${pkg.version}\n*• Link:* ${pkg.links.npm}\n*• Descripción:* ${pkg.description}`
  }).join`\n\n╶\n\n`
  let imgnpm = fs.readFileSync('./storage/image/npm.jpg')
  await conn.sendFile(m.chat, imgnpm, 'Error.jpg', txt, m)
}

handler.help = ['npm']
handler.tags = ['search']
handler.command = /^(npmjs|npmsearch|npms|npm)$/i

export default handler
