import { canLevelUp, xpRange } from '../lib/levelling.js'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let { name, exp, limit, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let str = `\t\t\t\t*‧ 🐣 Perfil Info 🐣 ‧*

 *◦ Nombre:* ${username}
 *◦ Tag:* @${who.replace(/@.+/, '')}
 *◦ Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
 *◦ Link:* wa.me/${who.split`@`[0]}
 *◦ Limite:* ${limit}
 *◦ Nivel:* ${level}
 *◦ Exp nivel:* ${user.exp - min}/${max - user.exp}
 *◦ Rango:* ${role}
 *◦ Premium:* ${prem ? 'Si' : 'No'}
 *◦ Ultimo claim:* ${lastclaim > 0 ? `${formatDate(lastclaim)}` : '×'}

 *◦ Registrado:* ${registered ? 'Si': 'No'}
 *◦ Fecha:* ${registered ? `${formatDate(regTime)}` : '×'}
 *◦ Hora:* ${registered ? `${formatHour(regTime)}` : '×'}
 *◦ Nombre:* ${registered ? `${name}` : '×'}
 *◦ Edad:* ${registered ? `${age} años` : '×'}
`
  let mentionedJid = [who]
  conn.sendFile(m.chat, pp, 'Error.jpg', str, m, false, { contextInfo: { mentionedJid }})
}

handler.help = ['perfil']
handler.tags = ['group']
handler.command = /^(perfil|profile)$/i

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}
