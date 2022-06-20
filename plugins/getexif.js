import { format } from 'util'
const { default: { Image } } = await import('node-webpmux')

let handler = async (m) => {
  if (!m.quoted) return m.reply(`🏷️ Etiqueta un sticker con el comando *${usedPrefix + command}*`)
  if (/sticker/.test(m.quoted.mtype)) {
      let img = new Image()
      await img.load(await m.quoted.download())
      let ins = format(JSON.parse(img.exif.slice(22).toString()))
      m.reply(ins)
 }
}

/*handler.help = ['<']
handler.tags = ['advanced']
handler.customPrefix = /^[<] /
handler.command = new RegExp

handler.owner = true

export default handler*/

handler.help = ['getexif']
handler.tags = ['sticker']
handler.command = /^(getexif|infosticker|infostick)$/i

export default handler
