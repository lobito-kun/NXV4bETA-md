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
  conn.sendFile(m.chat, jsonass.url, 'Error.jpg', `*${command.toUpperCase()}*`, m)
break

case 'cosplay':
case 'pack':
  let cosp = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/pack.json`)).data 
  let url = cosp[Math.floor(Math.random() * cosp.length)]
  conn.sendFile(m.chat, url, 'Error.jpg', `*${command.toUpperCase()}*`, m)
break

case 'hentay':
case 'hentai':
case 'h':
  let pwhentai = ["https://api.waifu.pics/nsfw/blowjob", "https://api.waifu.pics/nsfw/neko", "https://api.waifu.pics/nsfw/waifu"] 
  let nkhentai = pwhentai[Math.floor(Math.random() * pwhentai.length)]
  let reshentai = await fetch(nkhentai)
  if (!reshentai.ok) throw await reshentai.text()
  let jsonhentai = await reshentai.json()
  if (!jsonhentai.url) throw global.error
  conn.sendFile(m.chat, jsonhentai.url, 'Error.jpg', `*${command.toUpperCase()}*`, m)
break

case 'pussy':
  let pwpussy = ["https://meme-api.herokuapp.com/gimme/pussy", "https://meme-api.herokuapp.com/gimme/LegalTeens"] 
  let nkpussy = pwpussy[Math.floor(Math.random() * pwpussy.length)]
  let respussy = await fetch(nkpussy)
  if (!respussy.ok) throw await respussy.text()
  let jsonpussy = await respussy.json()
  if (!jsonpussy.url) throw global.error
  conn.sendFile(m.chat, jsonpussy.url, 'Error.jpg', `*${command.toUpperCase()}*`, m)
break

case 'lesbian':
case 'lesbians':
case 'lesbianas':
  let reslesbian = await fetch('https://meme-api.herokuapp.com/gimme/lesbians')
  if (!reslesbian.ok) throw await reslesbian.text()
  let jsonlesbian = await reslesbian.json()
  if (!jsonlesbian.url) throw global.error
  conn.sendFile(m.chat, jsonlesbian, 'Error.jpg', `*${command.toUpperCase()}*`, m)
break

case 'boobs':
case 'boobies':
case 'tetas':
  let pwboobs = ["https://meme-api.herokuapp.com/gimme/tits", "https://meme-api.herokuapp.com/gimme/BestTits", "https://meme-api.herokuapp.com/gimme/boobs", "https://meme-api.herokuapp.com/gimme/amazingtits",  "https://meme-api.herokuapp.com/gimme/TinyTits"]
  let nkboobs = pwboobs[Math.floor(Math.random() * pwboobs.length)]
  let resboobs = await fetch(nkboobs)
  if (!resboobs.ok) throw await resboobs.text()
  let jsonboobs = await resboobs.json()
  if (!jsonboobs.url) throw global.error
  conn.sendFile(m.chat, jsonboobs, 'Error.jpg', `*${command.toUpperCase()}*`, m)
break

default:
 }
}

handler.help = ['ass', 'cosplay', 'hentai', 'pussy', 'lesbian', 'boobs']
handler.tags = ['nsfw']
handler.command = /^(ass|culos|culo|nalgas|pack|cosplay|h|hentai|hentay|pussy|lesbian|lesbians|lesbianas|boobs|boobies|tetas)$/i

handler.nsfw = true
handler.register = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

