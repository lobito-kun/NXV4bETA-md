/*import { spawn } from 'child_process'
import { format } from 'util'

let handler = async (m, { conn, usedPrefix, command }) => {
    if (!global.support.convert && !global.support.magick && !global.support.gm) return handler.disabled = true // Disable if doesnt support
    const isSticker = `🏷️ Etiqueta un sticker con el comando *${usedPrefix + command}* para convertirlo a imagen`
    if (!m.quoted) throw isSticker
    let q = m.quoted
    if (/sticker/.test(q.mediaType)) {
        let sticker = await q.download()
        if (!sticker) throw sticker
        let bufs = []
        const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
        let im = spawn(_spawnprocess, _spawnargs)
        im.on('error', e => m.reply(format(e)))
        im.stdout.on('data', chunk => bufs.push(chunk))
        im.stdin.write(sticker)
        im.stdin.end()
        im.on('exit', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'image.png', '*Se convirtió con éxito a Imagen*', m)
        })
    } else throw isSticker
}

handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = /^(toimg|aimg|toimagen|aimagen)$/i

export default handler



import { webp2mp4 } from '../lib/webp2mp4'

let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `balas stiker dengan perintah *${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw `balas stiker dengan perintah *${usedPrefix + command}*`
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    }
    await conn.sendMessage(m.chat, {  video: out, caption: "*Se convirtió con éxito a GIF*", gifPlayback: true })
}

handler.help = ['togif']
handler.tags = ['sticker']
handler.command = /^(togif|agif)$/i

export default handler*/
