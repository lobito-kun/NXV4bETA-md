import { canLevelUp, xpRange } from '../lib/levelling.js'
import fs from 'fs'

const inventory = {
  others: {
    health: true,
    money: true,
    exp: true,
  },
  minerals: {
    emerald: true,
    red_diamond: true,
    diamond: true,
    gold: true,
    iron: true,
    stone: true
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: true,

  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
    pet: true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
  }
}

let handler = async (m, { conn, args, text, usedPrefix, command }) => {

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]

    let health = global.db.data.users[who].health
    
    let armor = global.db.data.users[who].armor
    let ardurability = global.db.data.users[who].armordurability
    let sword = global.db.data.users[who].sword
    let sdurability = global.db.data.users[who].sworddurability
    let pickaxe = global.db.data.users[who].pickaxe
    let pdurability = global.db.data.users[who].pickaxedurability
    let axe = global.db.data.users[who].axe
    let adurability = global.db.data.users[who].axedurability
    let rod = global.db.data.users[who].rod
    let rdurability = global.db.data.users[who].roddurability
    
    //Minerales
    let emerald = global.db.data.users[who].emerald
    let red_diamond = global.db.data.users[who].red_diamond
    let diamond = global.db.data.users[who].diamond
    let gold = global.db.data.users[who].gold
    let iron = global.db.data.users[who].iron
    let stone = global.db.data.users[who].stone
    let tminerals = (emerald + red_diamond + diamond + gold + iron + stone)
    
    //Madera
    let wood = global.db.data.users[who].wood
    
    //Frutas
    let strawberry = global.db.data.users[who].strawberry
    let watermelon = global.db.data.users[who].watermelon
    let grape = global.db.data.users[who].grape
    let kiwi = global.db.data.users[who].kiwi
    
    //Peces
    let blowfish = global.db.data.users[who].blowfish
    let tropicalfish = global.db.data.users[who].tropicalfish
    let commonfish = global.db.data.users[who].commonfish
    
    //Otros 
    let seed = global.db.data.users[who].seed
    let potion = global.db.data.users[who].potion
    let chest = global.db.data.users[who].chest
    let box = global.db.data.users[who].box
    let trash = global.db.data.users[who].trash

    let money = global.db.data.users[who].money
    
    let { name, exp, limit, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = xpRange(user.level, global.multiplier)
  
    //let invt = fs.readFileSync('./storage/image/inv.png')
    if (global.db.data.users[who] == undefined) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    let items = (diamond + gold + iron + stone + wood + blowfish + tropicalfish + commonfish + potion + seed + trash)
 
    const _items = Object.keys(inventory.minerals).map(v => who[v] && `*${invtype(v)}:* ${who[v]}`).filter(v => v).join('\n').trim()

    let _ardurability = Math.floor((ardurability * 100) / 5000)
    let _sdurability = Math.floor((sdurability * 100) / 5000)
    let _pdurability = Math.floor((pdurability * 100) / 5000)
    let _adurability = Math.floor((adurability * 100) / 5000)
    let _rdurability = Math.floor((rdurability * 100) / 5000)

    let inv = `*Inventario de @${who.split("@s.whatsapp.net")[0]}*

*❤ Vida:* ${health}
*💵 Dinero:* ${shortNum(money)}
*🎴 Limite:* ${limit}
*⭐ Nivel:* ${level}
*✨ Exp:* ${exp}
*🆙️ Exp nivel:* ${user.exp - min}/${xp}


*👕 Armadura de:* ${armor == 0 ? 'No tiene' : '' || armor == 1 ? 'cuero' : '' || armor == 2 ? 'malla' : '' || armor == 3 ? 'hierro' : '' || armor == 4 ? 'oro' : '' || armor == 5 ? 'diamante': ''}
*🎗 Durabilidad:* ${_ardurability}%

*🗡️ Espada de:* ${sword == 0 ? 'No tiene' : '' || sword == 1 ? 'madera' : '' || sword == 2 ? 'piedra' : '' || sword == 3 ? 'hierro' : '' || sword == 4 ? 'oro' : '' || sword == 5 ? 'diamante': ''}
*🎗 Durabilidad:* ${_sdurability}%

*⛏️ Pico de:* ${pickaxe == 0 ? 'No tiene' : '' || pickaxe == 1 ? 'madera' : '' || pickaxe == 2 ? 'piedra' : '' || pickaxe == 3 ? 'hierro' : '' || pickaxe == 4 ? 'oro' : '' || pickaxe == 5 ? 'diamante': ''}
*🎗 Durabilidad:* ${_pdurability}%

*🪓 Hacha de:* ${axe == 0 ? 'No tiene' : '' || axe == 1 ? 'madera' : '' || axe == 2 ? 'piedra' : '' || axe == 3 ? 'hierro' : '' || axe == 4 ? 'oro' : '' || axe == 5 ? 'diamante' : ''}
*🎗 Durabilidad:* ${_adurability}%

*🎣 Caña:* ${rod == 0 ? 'No tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'Caña ????' : '' || rod == 3 ? 'Caña ????' : '' || rod == 4 ? 'Caña ????' : '' || rod == 5 ? 'Caña ????' : ''}
*🎗 Durabilidad:* ${_rdurability}%


\t\t\t\t*乂 I T E M S*

${_items ? `*Minerales*\n${_items}` : ''}

*Frutas*
*🍓 Fresa:* ${strawberry}
*🍉 Sandía:* ${watermelon}
*🍇 Uva:* ${grape}
*🥝 Kiwi:* ${kiwi}

*Peces*
*🐠 Tropical:* ${tropicalfish}
*🐡 Globo:* ${blowfish}
*🐟 Comun:* ${commonfish}

*Otros items*
*🪵 Madera:* ${wood}
*🧪 Poción:* ${potion}
*🌱 Semilla:* ${seed}
*📦 Caja:* ${box}
*🗑️ Basura:* ${trash}
*🧰 Cofre:* ${chest}

*🍱 Total inv:* ${shortNum(items)} items
`
conn.reply(m.chat, reText(inv), m, { mentions: [who] })
}

handler.help = ['inventario']
handler.tags = ['rpg']
handler.command = /^(inventario|inventory|inv)$/i

export default handler

function reText(text) {
return text.replace(/a/g, 'ɑ')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}

function priceNum(num) {
return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num).replace('.00', '').replace(/,/g, '.')
}

function invtype(string) {
    let string = string.toLowerCase()
    let emot = {
      emerald: '🍀 Esmeralda',
      red_diamond: '♦️ Diamante rojo',
      diamond: '💎 Diamante',
      gold: '🪙 Oro',
      iron: '🔩 Hierro',
      stone: '🪨 Piedra'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
