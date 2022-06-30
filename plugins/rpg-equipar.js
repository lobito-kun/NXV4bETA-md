let handler = async (m, { conn, text, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let user = global.db.data.users[m.sender]
  let min = user.pickaxe_bronze + user.pickaxe_iron + user.pickaxe_steel + user.pickaxe_crimsteel + user.pickaxe_mythan + user.pickaxe_cobalt + user.pickaxe_varaxite + user.pickaxe_magic + user.pickaxe_umbral + user.pickaxe_ancient

  let type = (args[0] || ' ').toLowerCase()

  switch (type) {
  case 'pico':
    if (min == 0) throw 'No tienes ningun pico para equiparte'
    user.pickaxe_equipped = pick * 1
    m.reply(`Te equipaste un pico de ${tpick}`)
  break
  }
}

handler.help = ['equipar']
handler.tags = ['rpg']
handler.command = /^(equipar)$/i

export default handler
