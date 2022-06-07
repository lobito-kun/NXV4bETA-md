let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    if (!fromMe) throw 'Etiqueta un mensaje mio para eliminarlo'
    if (!isBaileys) throw 'Ese no es mi mensaje'
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
}

handler.help = ['delete']
handler.tags = ['main']
handler.command = /^(del|delete)$/i

handler.admin = true

export default handler
