let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw 'Ingrese el error ue desea reportar'
    if (text.length < 10) throw 'Especifique bien el error, mínimo 10 caracteres'
    if (text.length > 1000) throw 'Máximo 1000 caracteres para enviar el error'
    let teks = `*[ REPORTE DE BUG O ERROR ]*\n\n*• Usuario:* @${m.sender.split`@`[0]}\n*• Texto:* ${text}`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply('El reporte se envío a mi creador, cualquier informe falso puede ocasionar banneo')
}

handler.help = ['reportar']
handler.tags = ['info']
handler.command = /^(report|reportar)$/i

export default handler
