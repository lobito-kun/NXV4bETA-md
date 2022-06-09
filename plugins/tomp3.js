import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `🏷️ Etiqueta un video con el comando *${usedPrefix + command}* para convertirlo a mp3`
  await conn.reply(m.chat, global.wait, m)
  let media = await q.download?.()
  if (!media) throw 'Ocurrio un error al descargar el video'
  let audio = await toAudio(media, 'mp4')
  if (!audio.data) throw 'Ocurrio un error al convertir a mp3'
  conn.sendFile(m.chat, audio.data, 'Error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}

handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^(tomp3|toaudio|aaudio|amp3)$/i

export default handler
