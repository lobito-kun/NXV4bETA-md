import { promises } from 'fs'
import { join } from 'path'
import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': 'Menu 🧇',
  'rpg': 'Juego - RPG 🌋',
  'game': 'Juegos 🎮',
  'xp': 'Exp & limite ✨',
  'sticker': 'Stickers 🧩',
  'quotes': 'Citas 💌',
  'adm': 'Admins 😎',
  'group': 'Grupos 👥',
  'premium': 'Premiun 👑',
  'internet': 'Internet 📶',
  'random': 'Random 🍥',
  'nsfw': 'Nsfw 🔞',
  'anonymous': 'Chat - anónimo 🕵️‍♂️',
  'maker': 'Logo - maker 🎨',
  'audio': 'Audio 🔊',
  'downloader': 'Descargas 📥',
  'tools': 'Ajustes ⚙️',
  'fun': 'Diverción 🎡',
  'database': 'Almacenamiento 📂',
  'vote': 'Votación 🗳️',
  'jadibot': 'Jadi - bot 🤖',
  'owner': 'Creador 🐈',
  'host': 'Host 📡',
  'advanced': 'Abanzado 💠',
  'info': 'Info 📍',
  '': 'Sin - categoría 🏵️',
}
const defaultMenu = {
  before: `Holɑ *@%user 👋*, %greeting

*• Biografíɑ:* %bio

🍬 *Nombre:* Lolibot
🍬 *Versión:* 7.0.0
🍬 *Prefijo:* 「 *%p* 」
🍬 *Batería:* %batery
🍬 *Estado:* %batery2
🍬 *Lenguɑje:* JavaScript
🍬 *Libreria:* Baileys
🍬 *Comandos:* %comand Totɑl

*• Fechɑ:* %date
*• Horɑ:* %time

Cuɑlquier bug o error en un comɑndo reportɑr con el comɑndo *%preport <bug/error>
`,
  header: '❒ *%category*',
  body: '│∙ *%cmd* %islimit %isPremium',
  footer: '╰•\n',
  after: '',
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(limite)' : '')
                .replace(/%isPremium/g, menu.premium ? '(premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      comand: Object.values(global.plugins).filter( (v) => v.help && v.tags ).length,
      greeting: saludo,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    
    let tumbv = fs.readFileSync('./storage/video/menu.mp4')
    //conn.sendMessage(m.chat, { video: tumbv, caption: text.trim(), gifPlayback: true }, { quoted: m })
    conn.sendMessage(m.chat, { video: tumbv, gifPlayback: true, gifAttribution: 2, caption: text.trim(), footer: '⺋⺋⺋', templateButtons: [{ quickReplyButton: { displayText: '☘️ Info', id: `${_p}info` }}, { quickReplyButton: { displayText: '🐈 Creador', id: `${_p}creador` }} ] }, { quoted: m })
    /*conn.sendHydrated(m.chat, text.trim(), '▢ DyLux  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98._\n', pp, 'https://youtube.com/fg98f', 'YouTube', null, null, [
      ['ꨄ︎ Apoyar', '/donate'],
      ['⏍ Info', '/botinfo'],
      ['✆ Owner', '/owner']
    ], m)*/
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m)
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = true
handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

var ase = new Date();
var waktoonyabro = ase.getHours();
switch(waktoonyabro){
 case 0: waktoonyabro = `que tengas una linda noche 🌙`; break;
 case 1: waktoonyabro = `que tengas una linda noche 💤`; break;
 case 2: waktoonyabro = `que tengas una linda noche 🦉`; break;
 case 3: waktoonyabro = `que tengas una linda mañana ✨`; break;
 case 4: waktoonyabro = `que tengas una linda mañana 💫`; break;
 case 5: waktoonyabro = `que tengas una linda mañana 🌅`; break;
 case 6: waktoonyabro = `que tengas una linda mañana 🌄`; break;
 case 7: waktoonyabro = `que tengas una linda mañana 🌅`; break;
 case 8: waktoonyabro = `que tengas una linda mañana 💫`; break;
 case 9: waktoonyabro = `que tengas una linda mañana ✨`; break;
 case 10: waktoonyabro = `que tengas un lindo dia 🌞`; break;
 case 11: waktoonyabro = `que tengas un lindo dia 🌨`; break;
 case 12: waktoonyabro = `que tengas un lindo dia ❄`; break;
 case 13: waktoonyabro = `que tengas un lindo dia 🌤`; break;
 case 14: waktoonyabro = `que tengas una linda tarde 🌇`; break;
 case 15: waktoonyabro = `que tengas una linda tarde 🥀`; break;
 case 16: waktoonyabro = `que tengas una linda tarde 🌹`; break;
 case 17: waktoonyabro = `que tengas una linda tarde 🌆`; break;
 case 18: waktoonyabro = `que tengas una linda noche 🌙`; break;
 case 19: waktoonyabro = `que tengas una linda noche 🌃`; break;
 case 20: waktoonyabro = `que tengas una linda noche 🌌`; break;
 case 21: waktoonyabro = `que tengas una linda noche 🌃`; break;
 case 22: waktoonyabro = `que tengas una linda noche 🌙`; break;
 case 23: waktoonyabro = `que tengas una linda noche 🌃`; break;
 }
var saludo = "" + waktoonyabro;
