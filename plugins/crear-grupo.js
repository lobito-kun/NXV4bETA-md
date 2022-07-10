let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('Escribe el nombre del grupo!')
  try{
  let group = await conn.groupCreate(text, [m.sender])
  let link = await conn.groupInviteCode(group.gid)
  let url = 'https://chat.whatsapp.com/' + link;
  await m.reply(`\t*✅ Grupo creado correctamente*\n\n• Nombre: ${text}\n• ID: ${group.gid}`)
  } catch (e) {
  await m.reply(`Error al crear el grupo`)
  }
}

handler.help = ['creargrupo']
handler.tags = ['owner']
handler.command = /^(creargrupo)$/

handler.owner = true

export default handler
