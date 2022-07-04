let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
  if (!text) throw `Ingrese el link de un grupo de WhatsApp`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw 'El link es invalido'
  let res = await conn.groupAcceptInvite(code)
  await m.reply(`${JSON.stringify(res, null, 1)}`)
  //await m.reply(`*Enviando spam . . .*`)
}

handler.help = ['spamjp']
handler.tags = ['premium']
handler.command = ['spamgp'] 

handler.owner = true

export default handler
