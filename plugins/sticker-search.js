import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import RA from 'ra-api'

let handler = async (m, { conn, text }) => {
  if (!text) throw `Example : ${prefix + command} loli`
  await conn.reply(m.chat, '*Enviando los stickers . . .*', m)
  let anu = await RA.StickerSearch(text)
  for (let i = 0; i < (anu.data.sticker.length < 5 ? anu.data.sticker.length : 5); i++) {
  let stiker = await sticker(null, anu.data.sticker[i], global.packname, global.author)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
  }
}

handler.help = ['stickers']
handler.tags = ['search']
handler.command = /^(stickersearch|stickers)$/i

export default handler
