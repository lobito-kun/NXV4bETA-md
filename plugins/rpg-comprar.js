//Pico
const Pickaxe1 = 175000 //Madera
const Pickaxe2 = 225000 //Piedra
const Pickaxe3 = 325000 //Hierro
const Pickaxe4 = 375000 //Oro
const Pickaxe5 = 475000 //Diamante

//Hacha
const Axe1 = 100000 //Madera
const Axe2 = 150000 //Piedra
const Axe3 = 250000 //Hierro
const Axe4 = 300000 //Oro
const Axe5 = 400000 //Diamante

//Espada
const Sword1 = 50000 //Madera
const Sword2 = 75000 //Piedra
const Sword3 = 125000 //Hierro
const Sword4 = 150000 //Oro
const Sword5 = 200000 //Diamante

//Armadura 
const Armor1 = 250000 //Cuero
const Armor2 = 450000 //Malla
const Armor3 = 650000 //Hierro
const Armor4 = 850000 //Oro
const Armor5 = 1050000 //Diamante

//Caña
const Rod1 = 250000 //Normal

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

switch (type) {
case 'pico':
      if (global.db.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Tu *pico* esta al nivel máximo!', m)
      if (global.db.data.users[m.sender].money > pickaxe * 1) {
      	 global.db.data.users[m.sender].pickaxe += 1
           global.db.data.users[m.sender].pickaxedurability += pickaxedurability * 1
           global.db.data.users[m.sender].money -= pickaxe * 1
           conn.reply(m.chat, `Compraste un pico de *${cpickaxe}* por ${pickaxe} de dinero` ,m)
          } else conn.reply(m.chat, `No tienes suficiente dinero para comprar el pico de *${cpickaxe}* que cuesta ${pickaxe} de dinero`, m)
      break

case 'hacha':
      if (global.db.data.users[m.sender].axe == 5) return conn.reply(m.chat, 'Tu *hacha* esta al nivel máximo', m)
      if (global.db.data.users[m.sender].money > axe * 1) {
       	global.db.data.users[m.sender].axe += 1
           global.db.data.users[m.sender].axedurability += axedurability * 1
           global.db.data.users[m.sender].money -= axe * 1
           conn.reply(m.chat, `Compraste una hacha de *${caxe}* por ${axe} de dinero` ,m)
          } else conn.reply(m.chat, `No tienes suficiente dinero para comprar el hacha de *${caxe}* que cuesta ${axe} de dinero`, m)
      break

case 'espada':
      if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'Tu *espada* esta al nivel máximo', m)
      if (global.db.data.users[m.sender].money > sword * 1) {
       	global.db.data.users[m.sender].sword += 1
           global.db.data.usersñ[m.sender].sworddurability += sworddurability * 1
           global.db.data.users[m.sender].money -= sword * 1
           conn.reply(m.chat, `Compraste una espada de *${csword}* por ${sword} de dinero` ,m)
          } else conn.reply(m.chat, `No tienes suficiente dinero para comprar el espada de *${csword}* que cuesta ${sword} de dinero`, m)
      break

case 'armadura':
      if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Tu *armadura* esta al nivel máximo', m)
      if (global.db.data.users[m.sender].money > armor * 1) {
       	global.db.data.users[m.sender].armor += 1
           global.db.data.users[m.sender].armordurability += armordurability * 1
           global.db.data.users[m.sender].money -= armor * 1
           conn.reply(m.chat, `Compraste una armadura de *${carmor}* por ${armor} de dinero` ,m)
          } else conn.reply(m.chat, `No tienes suficiente dinero para comprar el armadura de *${carmor}* que cuesta ${armor} de dinero`, m)
      break

case 'caña':
      if (global.db.data.users[m.sender].rod == 1) return conn.reply(m.chat, 'Tu *caña* esta al nivel máximo', m)
      if (global.db.data.users[m.sender].money > rod * 1) {
       	global.db.data.users[m.sender].rod += 1
           global.db.data.users[m.sender].roddurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
           global.db.data.users[m.sender].money -= rod * 1
           conn.reply(m.chat, `Compraste una caña *${crod}* por *$${rod}*` ,m)
          } else conn.reply(m.chat, `Necesitas *$${rod}* para comprar la caña *${crod}*`, m)
      break

    default:
return m.reply(`El item *${args[0]}* no esta en la tienda!`)
  }
}

handler.help = ['comprar']
handler.tags = ['rpg']
handler.command = /^(comprar|buy)$/i

export default handler
