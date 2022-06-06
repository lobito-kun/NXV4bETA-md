
import { Facebook } from 'xfarr-api'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
  if (!text) throw '🪄 Ingrese el link de un video de Facebook junto al comando'
  if (!args[0].match(/(https:\/\/.www.facebook.com || fb.watch)/gi)) throw 'El link debe ser de un video de Facebook'
  await conn.reply(m.chat, global.wait, m)
   try {
      let b = await Facebook(text)
     let { title, thumbnail, duration, source, medias } = b
     let { url, quality, extension, size, formattedSize  } = medias[0]
     let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
     let fbt = `\t\t\t\t*‧ 🎥 Facebook MP4 🎥 ‧*

*• Calidad:* ${quality}
*• Tamaño:* ${formattedSize}
*• Link:* ${urlshort}`
 conn.sendFile(m.chat, url, 'Error.mp4', fbt, m)
  } catch { 
 throw global.error
 }
}

handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(fb|facebook|fbdl)$/i

export default handler
