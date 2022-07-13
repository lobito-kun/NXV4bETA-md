let handler = m => m

handler.before = async function (m) {
  let vnro = ['212', '265', '92', '44', '62', '7', '55', '48', '972', '371', '1', '377']
  if (m.sender.startsWith(vnro)) {
  global.db.data.users[m.sender].banned = false 
  m.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.')
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}

export default handler
