let handler = async (m, { conn, participants, groupMetadata }) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
  const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
  const groupAdmins = participants.filter(p => p.admin)
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
  const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
  let text = `\t\t\t*‧ ⚗️ Información del Grupo ⚗️ ‧*

*♻️ • Jid:* ${groupMetadata.id}
*🔖 • Nombre:* ${groupMetadata.subject}
*👥 • Miembros:* ${participants.length} Total
*🤿 • Dueño de Grupo:* @${owner.split('@')[0]}
*🕵🏻‍♂️ • Admins:*
${listAdmin}

*🪢 • Configuración de grupo:*
${isBanned ? '✅' : '❎'} Baneado
${welcome ? '✅' : '❎'} Bienvenida
${detect ? '✅' : '❎'} Detector
${del ? '❎' : '✅'} Anti Delete
${antiLink ? '✅' : '❎'} Anti Link WhatsApp

*📬 • Configuración de mensajes:*
Bienvenida: ${sWelcome ? sWelcome : '×'}
Despedida: ${sBye ? sBye : '×'}
Promovidos: ${sPromote ? sPromote : '×'}
Degradados: ${sDemote ? sDemote : '×'}

*📌 • Descripción:*
${groupMetadata.desc?.toString() || '×'}
`
  conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = /^(infogrupo|groupinfo|infogp|infogc)$/i

handler.group = true

export default handler
