import { execSync } from 'child_process'

let handler = async (m, { conn, text }) => {
 if (global.conn.user.jid == conn.user.jid) {
 let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
 conn.reply(m.chat, stdout.toString(), m)
 }
}

handler.help = ['actualizar']
handler.tags = ['owner']
handler.command = /^(update|actualizar|fix|gitpull)$/i

handler.rowner = true

export default handler
