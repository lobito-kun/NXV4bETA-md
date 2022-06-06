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

export default handler
