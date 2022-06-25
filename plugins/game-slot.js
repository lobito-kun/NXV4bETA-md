
let handler = async (m, { args, usedPrefix, command }) => {
    let fa = `*⛌ Ingrese la cantidad de dinero que desea apostar*\n\n*• Ejemplo:*\n- ${usedPrefix + command} 500\n\n[ mínimo $100 ]`
    if (!args[0]) throw fa
    if (isNaN(args[0])) throw fa
    let apuesta = parseInt(args[0])
    let win2 = Math.ceil(apuesta * 3)
    let win = Math.ceil(apuesta * 2)
    let unwin = Math.ceil(apuesta / 2)
    let user = global.db.data.users[m.sender]
    let time = user.lastslot + 3000
    if (new Date - user.lastslot < 3000) throw `Espere *${stime(time - new Date())}*`
    if (apuesta < 100) throw '✳️ Mínimo de la apuesta es *100 de Dinero*'
    if (user.money < apuesta) {
        throw `✳️ Tu *Dinero* no es suficiente`
    }

    let emojis = ["🍎", "🍓", "🍉", "🍋", "🍊", "🍐", "🍇"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `Ganaste\n*+$${win2}*`
        user.money += win2 * 1
    } else if (a == b || a == c || b == c) {
        end = `Casi ganas\n*+$${win}*`
        user.money += win * 1
    } else {
        end = `Perdiste\n*-$${unwin}*`
        user.money -= unwin * 1
    }
    user.lastslot = new Date * 1
    return await m.reply(
`🎰 | *SLOTS* 
──────
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
──────
🎰 | ${end}`) 
}

handler.help = ['slot']
handler.tags = ['game']
handler.command = /^(slot|girar)$/i

export default handler
