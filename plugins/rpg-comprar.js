  //Picos
  const p_bronze = 250
  const p_iron = 1500
  const p_steel = 2750
  const p_crimsteel = 7000

let handler = async (m, { conn, usedPrefix, command, text, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]

let _pickaxe = global.db.data.users[m.sender].pickaxe
let pickaxe = (_pickaxe == 0 ? Pickaxe1 : '' || _pickaxe == 1 ? Pickaxe2 : '' || _pickaxe == 2 ? Pickaxe3 : '' || _pickaxe == 3 ? Pickaxe4 : '' || _pickaxe == 4 ? Pickaxe5 : '')
let cpickaxe = (_pickaxe == 0 ? 'madera' : '' || _pickaxe == 1 ? 'piedra' : '' || _pickaxe == 2 ? 'hierro' : '' || _pickaxe == 3 ? 'oro' : '' || _pickaxe == 4 ? 'diamante' : '')
let pickaxedurability = (_pickaxe == 0 ? 500 : '' || _pickaxe == 1 ? 1000 : '' || _pickaxe == 2 ? 1500 : '' || _pickaxe == 3 ? 2000 : '' || _pickaxe == 4 ? 2500 : '')

let _axe = global.db.data.users[m.sender].axe
let axe = (_axe == 0 ? Axe1 : '' || _axe == 1 ? Axe2 : '' || _axe == 2 ? Axe3 : '' || _axe == 3 ? Axe4 : '' || _axe == 4 ? Axe5 : '')
let caxe = (_axe == 0 ? 'madera' : '' || _axe == 1 ? 'piedra' : '' || _axe == 2 ? 'hierro' : '' || _axe == 3 ? 'oro' : '' || _axe == 4 ? 'diamante' : '')
let axedurability = (_axe == 0 ? 500 : '' || _axe == 1 ? 1000 : '' || _axe == 2 ? 1500 : '' || _axe == 3 ? 2000 : '' || _axe == 4 ? 2500 : '')

  let _sword = global.db.data.users[m.sender].sword
  let sword = (_sword == 0 ? Sword1 : '' || _sword == 1 ? Sword2 : '' || _sword == 2 ? Sword3 : '' || _sword == 3 ? Sword4 : '' || _sword == 4 ? Sword5 : '')
  let csword = (_sword == 0 ? 'madera' : '' || _sword == 1 ? 'piedra' : '' || _sword == 2 ? 'hierro' : '' || _sword == 3 ? 'oro' : '' || _sword == 4 ? 'diamante' : '')
  let sworddurability = (_sword == 0 ? 500 : '' || _sword == 1 ? 1000 : '' || _sword == 2 ? 1500 : '' || _sword == 3 ? 2000 : '' || _sword == 4 ? 2500 : '')

  let _armor = global.db.data.users[m.sender].armor
  let armor = (_armor == 0 ? Armor1 : '' || _armor == 1 ? Armor2 : '' || _armor == 2 ? Armor3 : '' || _armor == 3 ? Armor4 : '' || _armor == 4 ? Armor5 : '')
  let carmor = (_armor == 0 ? 'cuero' : '' || _armor == 1 ? 'malla' : '' || _armor == 2 ? 'hierro' : '' || _armor == 3 ? 'oro' : '' || _armor == 4 ? 'diamante' : '')
  let armordurability = (_armor == 0 ? 500 : '' || _armor == 1 ? 1000 : '' || _armor == 2 ? 1500 : '' || _armor == 3 ? 2000 : '' || _armor == 4 ? 2500 : '')

  let _rod = global.db.data.users[m.sender].rod
  let rod = (_rod == 0 ? Rod1 : '')
  let crod = (_rod == 0 ? 'normal' : '')

  if (!text) return m.reply(`*• Ingrese un ítem o herrmient pr comprr*\n\n*Ejemplo de uso:*\n1. ${usedPrefix + command} <ítem>\n2. ${usedPrefix + command} pico\n\nEscribe *${usedPrefix}tienda* pr ver l list de ítems`)

  let type = (args[0] || ' ').toLowerCase()
  let type2 = (args[2] || args[1]).toLowerCase()

  switch (type) {
  case 'pico':
    switch (type2) {
      case 'bronce':
        if (user.money > p_bronze * 1) {
        user.pickaxe_bronze += 1
        user.money -= p_bronze * 1
        await m.reply(`Compraste un pico de *bronce* por *$${p_bronze}*`)
        } else m.reply(`Necesitas *$${p_bronze}* para comprar el pico`)
      break
    }
  break

  default:
  return m.reply(`El artículo *${args[0]}* no esta en la tienda`)
  }
}

handler.help = ['comprar']
handler.tags = ['rpg']
handler.command = /^(comprar|buy)$/i

export default handler
