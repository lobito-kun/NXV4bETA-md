let handler = async (m, { conn, text, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let user = global.db.data.users[m.sender]
  let min = user.pickaxe_bronze + user.pickaxe_iron + user.pickaxe_steel + user.pickaxe_crimsteel + user.pickaxe_mythan + user.pickaxe_cobalt + user.pickaxe_varaxite + user.pickaxe_magic + user.pickaxe_umbral + user.pickaxe_ancient
  //let pick = (text.includes('bronze') ? 1 : '' || text.includes('acero') ? 2 : '' || text.includes('acero carmesí') ? 3 : '' || text.includes('mythan') ? 4 : '' || text.includes('cobalto') ? 5 : '' || text.includes('varaxita') ? 6 : '' || text.includes('magica') ? 7 : '' || text.includes('umbral') ? 8 : '' || text.includes('ancient') ? 9 : '')
  //let tpick = (pick == 1 ? 'bronze' : '' || pick == 2 ? 'acero' : '' || pick == 3 ? 'acero carmesí' : '' || pick == 4 ? 'mythan' : '' || pick == 5 ? 'cobalto' : '' || pick == 6 ? 'varaxita' : '' || pick == 5 ? 'magica' : '' || pick == 5 ? 'umbral' : '' || pick == 5 ? 'ancient' : '')

  let type = (args[0] || ' ').toLowerCase()
  let type2 = (args[1] || args[2]).toLowerCase()

  switch (type) {
  case 'pico':
    if (min == 0) throw 'No tienes ningun pico para equiparte'
    switch (type2) {
      case 'bronce':
        if (user.pickaxe_bronze == 0) throw 'Todavia tienes el pico de bronce para equiparte'
        user.pickaxe_equipped = 1 
        m.reply(`Te equipaste un pico de bronce`)
      break
      }
  break
  }
}

handler.help = ['equipar']
handler.tags = ['rpg']
handler.command = /^(equipar)$/i

export default handler
