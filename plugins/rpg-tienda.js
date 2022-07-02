import fs from 'fs'

  //Picos
  const p_bronze = 250
  const p_iron = 1500
  const p_steel = 2750
  const p_crimsteel = 7000

  //Picos sin precio
  const p_mythan = 0
  const p_cobalt = 0
  const p_varaxite = 0
  const p_magic = 0
  const p_umbral = 0
  const p_ancient = 0


let handler = async (m, { conn, usedPrefix, command }) => {
  let tumb = fs.readFileSync('./storage/image/tienda.jpg')
  let tt = "```"
  let shop = `*Picos para comprar:*
>  Bronce:  $${p_bronze}
>  Hierro:  $${p_iron}
>  Acero:  $${p_steel}
>  Carmesí:  $${p_crimsteel}`
  let note = `-`

  conn.sendButton(m.chat, shop, note, tumb, [['Energía ⚡', '.energia'], ['Inventario 🎒', '.inv']], m)
}

handler.help = ['tienda']
handler.tags = ['rpg']
handler.command = /^(store|tienda|shop)$/i

export default handler
