let handler = async function (m, { conn, __dirname }) {
 m.reply(`*Este comando esta deseactivado por el programador`)
}

handler.help = ['script']
handler.tags = ['main']
handler.command = /^(sc|git|script)$/i

export default handler
