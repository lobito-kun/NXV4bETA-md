import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs'

let handler = async (m, { text, usedPrefix, command }) => {
  try {
  if (!text) throw `*⛌ Ingrese lo que quiere buscar en Wikipedia*\n\n*• Ejemplo:*\n- ${usedPrefix + command} minecraft`
  conn.reply(m.chat, global.wait, m) 
  const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
  const $ = cheerio.load(link.data)
  let wik = $('#firstHeading').text().trim()
  let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
  let imgwiki = fs.readFileSync('./storage/image/wikipedia.jpg')
  await conn.sendFile(m.chat, imgwiki, 'Error.jpg', `*• Buscado:* ${wik}\n\n${resulw}`, m)
} catch (e) {
  m.reply('No se han encontrado resultados')
}
}

handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = /^(wiki|wikipedia)$/i

export default handler
