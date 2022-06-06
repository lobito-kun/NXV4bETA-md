let handler = async (m, { text, usedPrefix, command }) => {
    let salah = `*🎮 Juego piedra papel tijera 🎳*\n\n- Ejemplo: ${usedPrefix + command} papel\n\n*Lista de opciones*\n- Piedra\n- Papel\n- Tijera`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'piedra' 
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tijera' 
    } else {
        astro = 'papel'
    }

    if (text == astro) {
            global.db.data.users[m.sender].exp += 100
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Empate 😐!*\n+100 Exp`)
        } else if (text == 'papel') {
        if (astro == 'piedra') {
            global.db.data.users[m.sender].exp += 500
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Ganaste 🥳!*\n+500 Exp`)
        } else {
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Perdiste 😕!*`)
        }
        } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].exp += 500
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Ganaste 🥳!*\n+500 Exp`)
        } else {
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Perdiste 😕!*`)
        }
            } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.db.data.users[m.sender].exp += 500
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Ganaste 🥳!*\n+500 Exp`)
        } else {
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Perdiste 😕!*`)
        }
        } else if (text == 'papel') {
        if (astro == 'piedra') {
            global.db.data.users[m.sender].exp += 500
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Ganaste 🥳!*\n+500 Exp`)
        } else {
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Perdiste 😕!*`)
        }
        } else if (text == 'piedra') {
        if (astro == 'tijera') {
            global.db.data.users[m.sender].exp += 500
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Ganaste 🥳!*\n+500 Exp`)
        } else {
            m.reply(`*🎮 Juego ppt 🎳*\n\nUser: ${text}\nBot: ${astro}\n\n*Perdiste 😕!*`)
        }
        } else {
        throw salah
    }
}

handler.help = ['ppt']
handler.tags = ['game']
handler.command = /^(ppt)$/i

export default handler
