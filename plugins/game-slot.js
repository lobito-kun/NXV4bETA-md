
let handler = async (m, { args, usedPrefix, command }) => {
    let fa = `
Cuanto quieres apostar? 

📌 Ejemplo :
*${usedPrefix + command}* 100`.trim()
    if (!args[0]) throw fa
    if (isNaN(args[0])) throw fa
    let apuesta = parseInt(args[0])
    let win2 = Math.ceil(apuesta * 3)
    let win = Math.ceil(apuesta * 2)
    let unwin = Math.ceil(apuesta / 2)
    let user = global.db.data.users[m.sender]
    let time = users.lastslot + 3000
    if (new Date - users.lastslot < 3000) throw `Espere ${stime(time - new Date())}`
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
        end = `Ganaste *+$${win2}*`
        user.money += win2 * 1
    } else if (a == b || a == c || b == c) {
        end = `Casi ganas *+$${win}*`
        user.money += win * 1
    } else {
        end = `Perdiste *-$${unwin}*`
        user.money -= unwin * 1
    }
    users.lastslot = new Date * 1
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
handler.command = ['slot']

export default handler


function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " m " + seconds + " s "
}


