import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

const dnw = Date.now();
const hoy = new Date(dnw);
let dtw = hoy.toLocaleDateString()

global.owner = [
  ['51940617554', '「gatitoツ」', true], 
  ['5356588048'], 
  ['5493885839638'], 
  ['573125484672'] 
  
] //Numeros de owner 

global.mods = ['50246028932'] // Moderadores
global.prems = ['50489079501', '5219631769130', '573125484672']  // El usuario Premium tiene diamantes ilimitado
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = ''
global.author = '[ NekoBot - MD ]'

global.wait = '*↻ Esperɑ soy lentɑ. . .*'
global.error = '*☓ Ocurrió un error inesperado*'

global.igfg = '\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98._\n' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'

global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel


global.imgmenu = fs.readFileSync('./storage/image/menu.jpg')
global.miniurl = fs.readFileSync('./storage/image/miniurl.jpg')


global.stime = function clockString(seconds) {
  var d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  var h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  var m = Math.floor((seconds / (1000 * 60)) % 60);
  var s = Math.floor((seconds / 1000) % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay ? dDisplay + hDisplay + mDisplay + sDisplay : '0 Segundos'
  //return dDisplay + hDisplay + mDisplay + sDisplay;
};

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      bibitanggur: '🍇 Semilla de uva',
      bibitpisang: '🍌 Semilla de platano',
      bibitjeruk: '🍊 Semilla de naranja',
      bibitapel: '🍎 Semilla de manzana',
      bibitmangga: '🥭 Semilla de mango',
      level: '📊 Nivel',
      limit: '🎫 Limite',
      health: '❤️ Salud',
      exp: '✨ Exp',
      money: '💹 Dinero',
      bank: '🏦 Banco',
      potion: '🥤 Poción',
      diamond: '💎 Diamnate',
      common: '📦 Caja comun',
      uncommon: '🛍️ Caja poco comun',
      mythic: '🎁 Caja mítica',
      legendary: '🗃️ Caja legendaria',
      superior: '💼 Caja superior',
      pet: '🔖 Macota',
      trash: '🗑 Basura',
      armor: '🥼 Armadura',
      sword: '⚔️ Espada',
      pickaxe: '⛏️ Pico',
      fishingrod: '🎣 Caña',
      wood: '🪵 Madera',
      rock: '🪨 Piedra',
      string: '🕸️ Cuerda',
      horse: '🐴 Caballo',
      cat: '🐱 Gato',
      dog: '🐶 Perro',
      fox: '🦊 Zorro',
      petFood: '🍖 Comida de mascota',
      iron: '⛓️ Hierro',
      gold: '🪙 Oro',
      emerald: '❇️ Esmeralda',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
