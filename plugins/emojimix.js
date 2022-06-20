import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import fs from 'fs'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) throw `*• Ingrese dos emojis pɑrɑ mezclɑr*\n\n*Ejemplo de uso:*\n1. ${usedPrefix + command} <emoji1 + emoji2>\n2. ${usedPrefix + command} 🐱+👻`
let [emoji1, emoji2] = text.split`+`
const anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)).json()
if (anu.results[0] == undefined) throw 'No se encontró el emoji'
let emix = anu.results[0].media_formats.png_transparent.url
let stiker = await sticker(false, emix, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}

handler.help = ['emojimix']
handler.tags = ['sticker']
handler.command = /^(emojimix|emix)$/i

export default handler




/*import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import fs from "fs"

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
  fetch(url, options)
  .then(response => response.json())
  .then(json => {
  resolve(json)
  })
  .catch((err) => {
  reject(err)
  })
 }
)

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `Ejemplo: ${usedPrefix + command} 😎+🤑`
  let [emoji, emoji2] = text.split`+`
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji)}_${encodeURIComponent(emoji2)}`)
  for (let res of anu.results) {
  let stiker = await sticker(false, res.url, global.packname, global.author)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
 }
}

handler.help = ['emojimix']
handler.tags = ['sticker']
handler.command = /^(emojimix|emix)$/i

export default handler*/
