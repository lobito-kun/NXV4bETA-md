let handler = async (m, { conn }) => {
    conn.reply(m.chat, `\t\t*∙ 🎐 Lista de Comandos 🎐 ∙*


${Object.entries(global.db.data.sticker).map(([key, value], index) => `*• ID:* ${value.locked ? `${key} (bloqueado)` : key}\n*• Cmd:* ${value.text}`).join('\n\n\n')}
`, m, null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler
