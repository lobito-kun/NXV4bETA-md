import acrcloud from 'acrcloud'

//Encriptado por qué zi xd
function _0x2e7f(){const _0x32594f=['8fnITWR','2015575sJZQmH','368XTymph','17adKQKU','134666wWAUlh','107523uxNNAS','198kLCXUH','33328SfFePw','10TWdHMC','bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu','10011180lqGDtn','96206gUwBdP','100446iKCqep'];_0x2e7f=function(){return _0x32594f;};return _0x2e7f();}const _0x546bfa=_0x2d8b;function _0x2d8b(_0x5c0c68,_0x4bea2f){const _0x2e7f14=_0x2e7f();return _0x2d8b=function(_0x2d8b30,_0x436d4e){_0x2d8b30=_0x2d8b30-0x111;let _0x47006d=_0x2e7f14[_0x2d8b30];return _0x47006d;},_0x2d8b(_0x5c0c68,_0x4bea2f);}(function(_0x61528d,_0x4ee5b4){const _0x185a9f=_0x2d8b,_0x82c9ae=_0x61528d();while(!![]){try{const _0x31ba98=-parseInt(_0x185a9f(0x11a))/0x1*(-parseInt(_0x185a9f(0x111))/0x2)+-parseInt(_0x185a9f(0x116))/0x3*(-parseInt(_0x185a9f(0x117))/0x4)+parseInt(_0x185a9f(0x118))/0x5+-parseInt(_0x185a9f(0x11d))/0x6*(parseInt(_0x185a9f(0x11b))/0x7)+parseInt(_0x185a9f(0x119))/0x8*(-parseInt(_0x185a9f(0x11c))/0x9)+-parseInt(_0x185a9f(0x112))/0xa*(-parseInt(_0x185a9f(0x115))/0xb)+parseInt(_0x185a9f(0x114))/0xc;if(_0x31ba98===_0x4ee5b4)break;else _0x82c9ae['push'](_0x82c9ae['shift']());}catch(_0x4cee73){_0x82c9ae['push'](_0x82c9ae['shift']());}}}(_0x2e7f,0x6493a));let acr=new acrcloud({'host':'identify-eu-west-1.acrcloud.com','access_key':'c33c767d683f78bd17d4bd4991955d81','access_secret':_0x546bfa(0x113)});

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/video|audio/.test(mime)) {
		let buffer = await q.download()
		await m.reply('_In progress, please wait..._')
		let { status, metadata } = await acr.identify(buffer)
		if (status.code !== 0) throw status.msg 
		let { title, artists, album, genres, release_date } = metadata.music[0]
		let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
		txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		txt += `*• Release Date:* ${release_date}`
    conn.sendMessage(m.chat, { text: txt.trim(), buttons: [{ buttonText: { displayText: 'Play Music' }, buttonId: `${usedPrefix}play ${title}` }] }, { quoted: m })
		// m.reply(txt.trim())
	} else throw `Reply audio/video with command ${usedPrefix + command}`
}

handler.help = handler.alias = ['whatmusic']
handler.tags = ['tools']
handler.command = /^(whatmusic)$/i

export default handler
