import fetch from 'node-fetch'
import cheerio from 'cheerio'
import RA from 'ra-api'

let handler = async (m, { conn, text }) => {
  if (!text) throw `Example : ${prefix + command} loli`
  let anu = await RA.StickerSearch(text)
  for (let i = 0; i < (anu.sticker_url.length < 5 ? anu.sticker_url.length : 5); i++) {
  await conn.sendFile(m.chat, anu.sticker_url[i], null, { asSticker: true }, m)
  }
}

handler.help = ['stickers']
handler.tags = ['search']
handler.command = /^(stickersearch|stickers)$/i

export default handler
