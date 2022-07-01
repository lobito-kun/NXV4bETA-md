import { canLevelUp, xpRange } from '../lib/levelling.js'
import fs from 'fs'

  const inventory = {
  minerals: {
    mineral_tin: true,
    mineral_copper: true,
    mineral_iron: true,
    mineral_salt: true,
    mineral_coal: true,
    mineral_silver: true,
    mineral_crimsteel: true,
    mineral_gold: true,
    mineral_pink_salt: true,
    mineral_mythan: true,
    mineral_sandstone: true,
    mineral_cobalt: true,
    mineral_varaxium: true,
    mineral_black_salt: true,
    mineral_magic: true
  },
  fruits: {
    strawberry: true,
    watermelon: true,
    grape: true,
    kiwi: true
  },
  fishes: {
    commonfish: true,
    tropicalfish: true,
    blowfish: true,
    crab: true,
    locust: true,
    shrimp: true,
    squid: true,
    octopus: true
  },
  crates: {
    common: true,
    rare: true,
    mythic: true,
    legendary: true
  },
  pickaxes: {
    pickaxe_bronze: true,
    pickaxe_iron: true,
    pickaxe_steel: true,
    pickaxe_crimsteel: true,
    pickaxe_mythan: true,
    pickaxe_cobalt: true,
    pickaxe_varaxite: true,
    pickaxe_magic: true,
    pickaxe_umbral: true,
    pickaxe_ancient: true
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
  
    let pick = xpRange(user.mining_level, global.multiplier)

    //let invt = fs.readFileSync('./storage/image/inv.png')
    if (global.db.data.users[who] == undefined) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    //let items = (diamond + gold + iron + stone + wood + blowfish + tropicalfish + commonfish + potion + seed + trash)
 
    let _ardurability = Math.floor((ardurability * 100) / 5000)
    let _sdurability = Math.floor((sdurability * 100) / 5000)
    let _pdurability = Math.floor((pdurability * 100) / 5000)
    let _adurability = Math.floor((adurability * 100) / 5000)
    let _rdurability = Math.floor((rdurability * 100) / 5000)

    const minerals = Object.keys(inventory.minerals).map(v => user[v] && `*◦ ${rpg.emoticon(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    const fishes = Object.keys(inventory.fishes).map(v => user[v] && `*${rpg.emoticon(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    const fruits = Object.keys(inventory.fruits).map(v => user[v] && `*${rpg.emoticon(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    const crates = Object.keys(inventory.crates).map(v => user[v] && `*${rpg.emoticon(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()
    const pickaxes = Object.keys(inventory.pickaxes).map(v => user[v] && `*◦ ${rpg.emoticon(v)}:* ${user[v]}`).filter(v => v).join('\n').trim()

    let inv = `*Inventario de @${who.split("@s.whatsapp.net")[0]}*

*❤ Vida:* ${health}
*💵 Dinero:* ${shortNum(money)}
*🎴 Limite:* ${limit}
*⭐ Nivel:* ${level}
*✨ Exp:* ${exp}
*🆙️ Exp nivel:* ${user.exp - min}/${xp}

${pickaxes ? `*Picos ⚒*\n${pickaxes}\n\n*Minería 🌋*\n*Nivel:* ${user.mining_level}\n*Exp:* ${user.mining_exp - pick.min}/${pick.xp}` : ''}


\t\t\t\t*乂 I T E M S*
${minerals ? `\n*Minerales 💎*\n${minerals}` : ''}
`

conn.reply(m.chat, reText(inv), m, { mentions: [who] })
}

handler.help = ['inventario']
handler.tags = ['rpg']
handler.command = /^(inventario|inventory|inv)$/i

handler.restrict = true

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

const rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      mineral_tin: 'Estaño',
      mineral_copper: 'Cobre',
      mineral_iron: 'Hierro',
      mineral_salt: 'Sal',
      mineral_coal: 'Carbón',
      mineral_silver: 'Plata',
      mineral_crimsteel: 'Carmesí',
      mineral_gold: 'Oro',
      mineral_pink_salt: 'Sal rosa',
      mineral_mythan: 'Mythan',
      mineral_sandstone: 'Arenisca',
      mineral_cobalt: 'Cobalto',
      mineral_varaxium: 'Varaxio',
      mineral_black_salt: 'Sal negro',
      mineral_magic: 'Mágico',

      strawberry: '🍓 Fresa',
      watermelon: '🍉 Sandía',
      grape: '🍇 Uva',
      kiwi: '🥝 Kiwi',

      commonfish: '🐟 Pez común',
      tropicalfish: '🐠 Pez tropical',
      blowfish: '🐡 Pez globo',
      crab: '🦀 Cangrejo',
      locust: '🦞 Langosta',
      shrimp: '🦐 Camaron',
      squid: '🦑 Calamar',
      octopus: '🐙 Pulpo',

      common: '📦 Comun',
      rare: '🥡 Rara',
      mythic: '🎁 Epica',
      legendary: '🧰 Legendaria',

      pickaxe_bronze: 'Bronce',
      pickaxe_iron: 'Hierro',
      pickaxe_steel: 'Acero',
      pickaxe_crimsteel: 'Carmesí',
      pickaxe_mythan: 'Mythan',
      pickaxe_cobalt: 'Cobalto',
      pickaxe_varaxite: 'Varaxita',
      pickaxe_magic: 'Mágico',
      pickaxe_umbral: 'Umbral',
      pickaxe_ancient: 'Ancient'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
