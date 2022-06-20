import { googleIt } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix, command, args }) => {
    const fetch = (await import('node-fetch')).default
    let full = /g$/i.test(command)
    let text = args.join` `
    if (!text) throw '*⛌ Ingrese lo que quiere buscar en Google*\n\n*• Ejemplo:*\n- ${usedPrefix + command}google minecraft'
    await conn.reply(m.chat, global.wait, m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*${title}*\n_${url}_\n_${description}_`
    }).join('\n\n')
    try {
        let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await conn.sendFile(m.chat, ss, 'Error.jpg', url + '\n\n' + msg, m)
    } catch (e) {
        m.reply(msg)
    }
}

handler.help = ['google']
handler.tags = ['tools']
handler.command = /^(google)$/i

export default handler
