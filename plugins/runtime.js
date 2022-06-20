let handler = async (m, { usedPrefix, command }) => {
let uptime = await process.uptime()
let runnya = `\t\t\t\t*∙ ☀️ Runtime ☀️ ∙*

• *Hora:* ${time}
• *Tiempo activa:* ${stime(uptime)}`
await m.reply(runnya)
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

export default handler


const dd = new Date(new Date + 3600000);
const time = dd.toLocaleString('en-US', { 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true 
    });
