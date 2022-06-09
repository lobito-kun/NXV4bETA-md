import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  var { age } = db.data.users[m.sender]
  if (age < 17) throw conn.reply(m.chat, 'Eres menor de edad! vuelve cuando tengas más de 18 años', m) 
  await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'ass':
case 'culos':
case 'culo':
case 'nalgas':
  let rass = ["https://meme-api.herokuapp.com/gimme/CuteLittleButts", "https://meme-api.herokuapp.com/gimme/ass"]
  let nkass = rass[Math.floor(Math.random() * rass.length)] 
  let resass = await fetch(nkass)
  if (!resass.ok) throw await resass.text()
  let jsonass = await resass.json()
  if (!jsonass.url) throw global.error
  conn.sendFile(m.chat, jsonass.url, 'Error.jpg', `${command.toUpperCase()}`, m)
break



default:
 }
}

handler.help = ['ass']
handler.tags = ['nsfw']
handler.command = /^(ass|culos|culo|nalgas)$/i
handler.nsfw = true
handler.register = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

