import daily from './rpg-daily.js'
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'

const inventory = {
  others: {
    level: true,
    limit: true,
    health: true,
    money: true,
    exp: true,
  },
  items: {
    bibitanggur: true,
    bibitmangga: true,
    bibitpisang: true,
    bibitapel: true,
    bibitjeruk: true,
    potion: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    diamond: true,
    gold: true,
    iron: true,
    upgrader: true,
    pet: true,
  },
  durabi: {
    sworddurability: true,
    pickaxedurability: true,
    fishingroddurability: true,
    armordurability: true,
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
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
  },
  cooldowns: {
    lastclaim: {
      name: 'Reclamo diario',
      time: daily.cooldown
    },
    lastweekly: {
    	name: 'Reclamo semanal',
        time: weekly.cooldown
        },
    lastmonthly: {
      name: 'Reclamo mensual',
      time: monthly.cooldown
    },
    lastadventure: {
      name: 'Aventura',
      time: adventure.cooldown
    }
  }
}
let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const others = Object.keys(inventory.others).map(v => user[v] && `◦ ${global.rpg.emoticon(v)}: ${user[v]}`).filter(v => v).join('\n')
  const tools = Object.keys(inventory.tools).map(v => user[v] && `◦ ${global.rpg.emoticon(v)}: ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const items = Object.keys(inventory.items).map(v => user[v] && `◦ ${global.rpg.emoticon(v)}: ${user[v]}`).filter(v => v).join('\n').trim()
  const dura = Object.keys(inventory.durabi).map(v => user[v] && `◦ ${global.rpg.emoticon(v)}: ${user[v]}`).filter(v => v).join('\n').trim()
  const crates = Object.keys(inventory.crates).map(v => user[v] && `◦ ${global.rpg.emoticon(v)}: ${user[v]}`).filter(v => v).join('\n').trim()
  const pets = Object.keys(inventory.pets).map(v => user[v] && `◦ ${global.rpg.emoticon(v)}${v}: ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `${new Date() - user[cd] >= time ? '✅' : '❌'} ${name}`).filter(v => v).join('\n').trim()
  const teks = `\t\t\t*× 🎒 Inventario RPG 🎒 ×*

*📍 Estado :*
◦ 🧑🏻‍🏫 Usuario: ${conn.getName(m.sender)}
${others}${tools ? `
*📍 Herramientas :*
${tools}` : ''}${items ? `

*📍 Items :*
${items}` : ''}${crates ? `

*📍 Cajas :*
${crates}` : ''}${pets ? `

*📍 Mascotas :*
${pets}` : ''}${cooldowns ? `

*♻️ Tiempo de espera :*
${cooldowns}` : ''}
${user.lastdungeon == 0 ? '✅': '❌'} Dungeon
${user.lastmining == 0 ? '✅': '❌'} Mineria
`
  m.reply(teks)
}

handler.help = ['inventario']
handler.tags = ['rpg']
handler.command = /^(inventario|inventory|inv)$/i

export default handler
