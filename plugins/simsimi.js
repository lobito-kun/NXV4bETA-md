import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
  let name = conn.getName(m.sender)
  if (!text) throw 'Ingrese un texto junto al comando'
  try {
  let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  let tes = json.success
   m.reply(`${tes}`) 
  } catch {
   m.reply(' No entiendo')
  }
}

handler.help = ['nixi']
handler.tags = ['main']
handler.command = /^(simi|simsimi)$/i

export default handler
