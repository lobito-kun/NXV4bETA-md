//Minerales
const Sdiamond = 750
const Sgold = 500
const Siron = 150
const Sstone = 10

//Madera
const Soak = 10

//Peces
const Sblowfish = 500
const Stropicalfish = 300
const Scommonfish = 50

let handler = async (m, { conn, text, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems }) => {

  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]

  let type = (args[0] || ' ').toLowerCase()
  let _type = (args[1] || ' ').toLowerCase()

  const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
  const _count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)

  switch (type) {
  case 'pez':
  case 'peces':
  case 'fish':
  switch (_type) {
  case 'tropical':
  case 'tropicales':
      if (user.tropicalfish >= _count * 1) {
      	user.tropicalfish -= _count * 1
      	user.money += Stropicalfish * _count
          conn.reply(m.chat, `Vendiste ${_count} peces tropical por ${Stropicalfish * _count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes peces tropicales, para vender', m)
  break
      
  case 'globo':
  case 'globos':
      if (user.blowfish >= _count * 1) {
      	user.blowfish -= _count * 1
      	user.money += Sblowfish * _count
          conn.reply(m.chat, `Vendiste ${_count} peces globos por ${Sblowfish * _count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes peces globos, para vender', m)
  break
      
  case 'comun':
  case 'común':
  case 'comunes':
  case 'comúnes':
      if (user.commonfish >= _count * 1) {
      	user.commonfish -= _count * 1
      	user.money += Scommonfish * _count
          conn.reply(m.chat, `Vendiste ${_count} peces comunes por ${Scommonfish * _count} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes peces comunes, para vender', m)
  break
  
  case 'todo':
  case 'todos':
  case 'all':
      if ((user.commonfish + user.blowfish + user.tropicalfish) * 1 == 0) {
      	user.commonfish -= user.commonfish * 1
      	user.tropicalfish -= user.tropicalfish * 1
      	user.blowfish -= user.blowfish * 1
          user.money += Scommonfish * user.commonfish
          user.money += Stropicalfish * user.tropicalfish
      	user.money += Sblowfish * user.blowfish
          conn.reply(m.chat, `Vendiste ${user.commonfish + user.blowfish + user.tropicalfish} peces por ${Scommonfish * user.commonfish + Stropicalfish * user.tropicalfish + Sblowfish * user.blowfish} de dinero`, m)
          } else conn.reply(m.chat, 'No tienes suficientes peces, para vender', m)
  break
  
  default:
  return conn.reply(m.chat, `*${text}* no está en la lista!`, m)
  }
  break


  default:
  return m.reply(`El artículo *${args[0]}* no esta para vender!`)
  }
}

handler.help = ['vender']
handler.tags = ['rpg']
handler.command = /^(vender|sell)$/i

export default handler
