import MessageType from '@adiwajshing/baileys'
import { spawn, exec } from 'child_process'
import axios from 'axios'
import fetch from 'node-fetch'
import fs from 'fs'
import jimp from 'jimp'

let handler = async (m, { conn, text } ) => {

  exec(`magick './storage/image/perfilx.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 'gatito' -pointsize 35 -annotate +460+83 'Test' -pointsize 50 -annotate +460+200 'Welcome To Test' './storage/image/miniurl.jpg' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'perfil.jpg'`)
  .on('error', () => reply('error'))
  .on('exit', () => {
  try {
    conn.sendFile(m.chat, fs.readFileSync('./perfil.jpg'), 'result.jpg', '*Test imagemagick*', m)
  } catch {
    conn.sendFile(m.chat, fs.readFileSync('perfil.jpg'), 'result.jpg', '*Test imagemagick*', m)
  }
  })



      /*let str = '*Test imagemagick*'
      if (global.support.convert || global.support.magick || global.support.gm) {
        let fontLevel = 'storage/font/level_c.otf'
        let fontTexts = 'storage/font/texts.otf'

        let bufs = []
        
        const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
          'convert',
          './src/lev.jpg',
          '-gravity',
          'west',
          '-fill',
          '#000000',
          '-font',
          './src/font-gue.ttf',
          '-size',
          '1280x710',
          '-pointsize',
          '70',
          '-interline-spacing',
          '7.5',
          '-annotate',
          '+460-45',
          'gatito',
          '-pointsize',
          '35',
          '-annotate',
          '+460+83',
          'Undefined',
          '-pointsize',
          '50',
          '-annotate',
          '+460+200',
          'Leaving from Loli - Test',
          './storage/image/miniurl.jpg',
          '-resize',
          '%[fx:t?u.w*0.2:u.w]',
          '-gravity',
          'center',
          '-geometry',
          '-430+70',
          '-composite',
          'jpg:-'
        ]
        spawn(_spawnprocess, _spawnargs)
          .on('error', e => {
            throw e
          })
          .on('close', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'result.jpg', str, m)
          })
          .stdout.on('data', chunk => bufs.push(chunk))

      } else {
        m.reply(str)
      }




  conn.sendButton(m.chat, `*Test button*`, '-', await genProfile(conn, m), [['Speedtest', 'ping'], ['Owner', 'owner']], false, { quoted: m, contextInfo: { externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: imgmenu, title: 'Simple Bot Esm', body: 'By Papah-Chan',thumbnail: imgmenu, sourceUrl: 'https://youtu.be/poD-7_U3jXk' } } })

  conn.sendButton(m.chat, `*Test button*`, 'Creɑted by gɑtito ⾕', imgmenu, [['Info 🧃', '.ping'], ['Creador 🍭', '.owner']], false, { quoted: m, contextInfo: { externalAdReply: {
  showAdAttribution: true,
  mediaType: 'VIDEO',
  mediaUrl: '',
  title: '作成されたボット',
  body: 'By gɑtito ⾕',
  thumbnail: miniurl,
  sourceUrl: 'ɑ
'
  }}})


const buttons = [
{ buttonId: `.info`, buttonText: { displayText: 'Info 🧃' }, type: 1 },
{ buttonId: `.creador`, buttonText: { displayText: 'Creador 🍭' }, type: 1 }, ]

let buttonMessage = {
"document": { url: "https://wa.me/51940617554" }, 
"fileName": '𝕷𝖔𝖑𝖎𝖇𝖔𝖙 - 𝕺𝖋𝖎𝖈𝖎𝖆𝖑™.⁖⃟•᭄', 
"mimetype": 'application/vnd.ms-excel',
"jpegThumbnail": false,
"caption": '*Test button*',
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": 'By gɑtito ⾕',
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": '作成されたボット — 尼僧',
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": imgmenu,
"mediaUrl": 'https://youtu.be/jeXHB0IIzCM',
"sourceUrl": 'https://chat.whatsapp.com/ELn6Ck7InoP6UmA3QiQsgo' }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/

}

handler.command = ['test']

export default handler


async function genProfile(conn, m) {
  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read('https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg'),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, '+51 940 617 554')
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}
