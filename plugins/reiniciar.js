import { spawn } from 'child_process'

let handler = async (m, { conn, isROwner, text }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
  await m.reply('*🔄 Reiniciando NX-SYSTEM & NX-SERVER . . .*\nEspere un momento')
  process.send('reset')
 } else throw 'eh'
}

handler.help = ['reiniciar']
handler.tags = ['owner']
handler.command = /^(restart|reiniciar)$/i

handler.rowner = true

export default handler
