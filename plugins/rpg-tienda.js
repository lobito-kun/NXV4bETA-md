import fs from 'fs'

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

let handler = async (m, { conn, usedPrefix, command }) => {
let tumb = fs.readFileSync('./storage/image/tienda.jpg')
let tt = "```"
let shop = `\t*• 🪓 Herramientas para Comprar 🎣 •*

*⛏ Picos para Minar*
${tt}∙ Madera:   $${Pickaxe1}
∙ Piedra:   $${Pickaxe2}
∙ Hierro:   $${Pickaxe3}
∙ Oro:      $${Pickaxe4}
∙ Diamante: $${Pickaxe5}${tt}

*🪓 Hachas para Talar*
${tt}∙ Madera:   $${Axe1}
∙ Piedra:   $${Axe2}
∙ Hierro:   $${Axe3}
∙ Oro:      $${Axe4}
∙ Diamante: $${Axe5}${tt}

*🗡️ Espada*
${tt}∙ Madera:   $${Sword1}
∙ Piedra:   $${Sword2}
∙ Hierro:   $${Sword3}
∙ Oro:      $${Sword4}
∙ Diamante: $${Sword5}${tt}

*👕 Armadura*
${tt}∙ Cuero:    $${Armor1}
∙ Malla:    $${Armor2}
∙ Hierro:   $${Armor3}
∙ Oro:      $${Armor4}
∙ Diamante: $${Armor5}${tt}

*🎣 Caña para Pescar*
${tt}∙ Normal:   $${Rod1}${tt}

\t\t*• 🔩 Intems para Vender 🐡 •*

*💎 Minerales:*
${tt}∙ Diamante: $750
∙ Oro:      $500
∙ Hierro:   $150
∙ Piedra:   $10${tt}

*🐟 Peces:*
${tt}∙ Globo:    $500
∙ Tropical: $300
∙ Comun:    $50${tt}

*Maderas:*
${tt}∙ Roble:    $10${tt}`
let note = `*Nota:* Al comprar una herramienta se suben de nivel de madera hasta el diamante

*No puedes comprar una herramienta en especifico*`
conn.sendButton(m.chat, shop, note, tumb, [['Energía ⚡', '.energia'], ['Inventario 🎒', '.inv']], m)
}

handler.help = ['tienda']
handler.tags = ['rpg']
handler.command = /^(store|tienda|shop)$/i

export default handler
