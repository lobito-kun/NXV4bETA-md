import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'

/**
 * @type {import('@adiwajshing/baileys')}
 */
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.healt)) user.healt = 100
                if (!isNumber(user.title)) user.title = 0
                if (!isNumber(user.stamina)) user.stamina = 100
                if (!isNumber(user.haus)) user.haus = 100
                if (!isNumber(user.laper)) user.laper = 100
                if (!isNumber(user.level)) user.level = 0
                if (!('pasangan' in user)) user.pasangan = ''
                if (!isNumber(user.exp)) user.exp = 0
                if (!isNumber(user.pc)) user.pc = 0
                if (!isNumber(user.korbanngocok)) user.korbanngocok = 0
                if (!isNumber(user.ojekk)) user.ojekk = 0
                if (!isNumber(user.trofi)) user.trofi= 0
                if (!user.rtrofi) user.rtrofi = 'Perunggu'
                if (!isNumber(user.troopcamp)) user.troopcamp = 0
                if (!isNumber(user.coin)) user.coin = 0
                if (!isNumber(user.atm)) user.atm = 0
                if (!isNumber(user.limit)) user.limit = 20
                if (!isNumber(user.glimit)) user.glimit = 20
                if (!isNumber(user.tprem)) user.tprem = 0
                if (!isNumber(user.tigame)) user.tigame = 50
                if (!isNumber(user.lastclaim)) user.lastclaim = 0
                if (!isNumber(user.money)) user.money = 0
                if (!isNumber(user.rumahsakit)) user.rumahsakit= 0
                if (!isNumber(user.fortress)) user.fortress = 0
                if (!isNumber(user.shield)) user.shield = false
                if (!isNumber(user.pertanian)) user.pertanian = 0
                if (!isNumber(user.pertambangan)) user.pertambangan = 0
                
                
                if (!isNumber(user.botol)) user.botol = 0
                if (!isNumber(user.kardus)) user.kardus = 0
                if (!isNumber(user.kaleng)) user.kaleng = 0
                if (!isNumber(user.aqua)) user.aqua = 0
                if (!isNumber(user.diamond)) user.diamond = 0
                if (!isNumber(user.iron)) user.iron = 0
                if (!isNumber(user.emas)) user.emas = 0
                if (!isNumber(user.arlok)) user.arlok = 0
    
                if (!isNumber(user.common)) user.common = 0
                if (!isNumber(user.as)) user.as = 0
                if (!isNumber(user.uncommon)) user.uncommon = 0
                if (!isNumber(user.mythic)) user.mythic = 0
                if (!isNumber(user.legendary)) user.legendary = 0
                if (!isNumber(user.glory)) user.glory = 0
                if (!isNumber(user.enchant)) user.enchant = 0
                if (!isNumber(user.pet)) user.pet = 0
                if (!isNumber(user.psepick)) user.psepick = 0
                if (!isNumber(user.psenjata)) user.psenjata = 0
            
                if (!isNumber(user.potion)) user.potion = 0
                if (!isNumber(user.sampah)) user.sampah = 0
                if (!isNumber(user.armor)) user.armor = 0
                if (!isNumber(user.pancing)) user.pancing = 0
                //penambah stamina
                if (!isNumber(user.apel)) user.apel = 0
                if (!isNumber(user.ayamb)) user.ayamb = 0
                if (!isNumber(user.ayamg)) user.ayamg = 0
                if (!isNumber(user.sapir)) user.sapir = 0
                if (!isNumber(user.ssapi)) user.ssapi = 0
                if (!isNumber(user.esteh)) user.esteh = 0
                if (!isNumber(user.leleg)) user.leleg = 0
                if (!isNumber(user.leleb)) user.leleb = 0
                //tools
                if (!isNumber(user.sword)) user.sword = 0
                if (!isNumber(user.sworddurability)) user.sworddurability = 0
                if (!isNumber(user.pickaxe)) user.pickaxe = 0
                if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                if (!isNumber(user.fishingrod)) user.fishingrod = 0
                if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
                if (!isNumber(user.umpan)) user.umpan = 0
                
                if (!isNumber(user.kucing)) user.kucing = 0
                if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
                if (!isNumber(user.kuda)) user.kuda = 0
                if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
                if (!isNumber(user.rubah)) user.rubah = 0
                if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
                if (!isNumber(user.anjing)) user.anjing = 0
                if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
                if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
                if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
                if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
                if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0
                if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
                
                if (!isNumber(user.makananpet)) user.makananpet
                if (!isNumber(user.makanannaga)) user.makanannaga = 0
                if (!isNumber(user.makananphonix)) user.makananphonix = 0
                if (!isNumber(user.makanangriffin)) user.makanangriffin = 0
                if (!isNumber(user.makananserigala)) user.makananserigala = 0
                if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
    
                if (!'Banneduser' in user) user.Banneduser = false
                if (!'BannedReason' in user) user.BannedReason = ''
                if (!isNumber(user.warn)) user.warn = 0
    
                if (!isNumber(user.afk)) user.afk = -1
                if (!'afkReason' in user) user.afkReason = ''
            
            //PET
                if (!isNumber(user.healthmonster)) user.healthmonster = 0
                if (!isNumber(user.anakkucing)) user.anakkucing = 0
                if (!isNumber(user.anakkuda)) user.anakkuda = 0
                if (!isNumber(user.anakrubah)) user.anakrubah = 0
                if (!isNumber(user.anakanjing)) user.anakanjing = 0
                if (!isNumber(user.serigala)) user.serigala = 0
                if (!isNumber(user.anakserigala)) user.anakserigala = 0
                if (!isNumber(user.naga)) user.naga = 0
                if (!isNumber(user.anaknaga)) user.anaknaga = 0
                if (!isNumber(user.phonix)) user.phonix = 0
                if (!isNumber(user.anakphonix)) user.anakphonix = 0
                if (!isNumber(user.griffin)) user.griffin = 0
                if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
                if (!isNumber(user.kyubi)) user.kyubi = 0
                if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
                if (!isNumber(user.centaur)) user.centaur = 0
                if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
                if (!isNumber(user.makananpet)) user.makananpet = 0
    
                if (!isNumber(user.antispam)) user.antispam = 0
                if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
    
                if (!isNumber(user.kayu)) user.kayu = 0
                if (!('kingdom' in user)) user.kingdom = true
                if (!isNumber(user.batu)) user.batu = 0
                if (!isNumber(user.ramuan)) user.ramuan = 0
                if (!isNumber(user.string)) user.string = 0
                if (!isNumber(user.sword)) user.sword = 0
                if (!isNumber(user.sworddurability)) user.sworddurability = 0
                if (!isNumber(user.pickaxe)) user.pickaxe = 0
                if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                if (!isNumber(user.fishingrod)) user.fishingrod = 0
                if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
    
                //mancing
                if (!isNumber(user.paus)) user.paus = 0
         if (!isNumber(user.kepiting)) user.kepiting = 0
         if (!isNumber(user.gurita)) user.gurita = 0
         if (!isNumber(user.cumi)) user.cumi= 0
         if (!isNumber(user.buntal)) user.buntal = 0
         if (!isNumber(user.dory)) user.dory = 0
         if (!isNumber(user.lumba)) user.lumba = 0
         if (!isNumber(user.lobster)) user.lobster = 0
         if (!isNumber(user.hiu)) user.hiu = 0
         if (!isNumber(user.udang)) user.udang = 0
         if (!isNumber(user.ikan)) user.ikan = 0
         if (!isNumber(user.nila)) user.nila = 0
         if (!isNumber(user.bawal)) user.bawal = 0
         if (!isNumber(user.lele)) user.lele = 0
         if (!isNumber(user.orca)) user.orca = 0
            
         if (!isNumber(user.banteng)) user.banteng = 0
         if (!isNumber(user.harimau)) user.harimau = 0
         if (!isNumber(user.gajah)) user.gajah = 0
         if (!isNumber(user.kambing)) user.kambing = 0
         if (!isNumber(user.panda)) user.panda = 0
         if (!isNumber(user.buaya)) user.buaya = 0
         if (!isNumber(user.kerbau)) user.kerbau = 0
         if (!isNumber(user.sapi)) user.sapi = 0
         if (!isNumber(user.monyet)) user.monyet = 0
         if (!isNumber(user.babihutan)) user.babihutan = 0
         if (!isNumber(user.babi)) user.babi = 0
         if (!isNumber(user.ayam)) user.ayam = 0
     
                if (!isNumber(user.lastadventure)) user.lastadventure = 0
                if (!isNumber(user.lastkill)) user.lastkill = 0
                if (!isNumber(user.lastfishing)) user.lastfishing = 0
                if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                if (!isNumber(user.lastwar)) user.lastwar = 0
                if (!isNumber(user.lastsda)) user.lastsda = 0
                if (!isNumber(user.lastberbru)) user.lastberbru = 0
                if (!isNumber(user.lastduel)) user.lastduel = 0
                if (!isNumber(user.lastjb)) user.lastjb = 0
                if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
                if (!isNumber(user.lastmining)) user.lastmining = 0
                if (!isNumber(user.lasthunt)) user.lasthunt = 0
                if (!isNumber(user.lastngocok)) user.lastngocok = 0
                if (!isNumber(user.lastgift)) user.lastgift = 0
                if (!isNumber(user.lastrob)) user.lastrob = 0
                if (!isNumber(user.lastngojek)) user.lastngojek = 0
                if (!isNumber(user.lastgrab)) user.lastgrab = 0
                if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
                if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
                if (!isNumber(user.lastdagang)) user.lastdagang = 0
                if (!isNumber(user.lasthourly)) user.lasthourly = 0
                if (!isNumber(user.lastweekly)) user.lastweekly = 0
                if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
                if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
                if (!isNumber(user.lastturu)) user.lastturu = 0
                if (!isNumber(user.lastseen)) user.lastseen = 0
                if (!isNumber(user.lastbansos)) user.lastbansos = 0
                if (!isNumber(user.lastrampok)) user.lastrampok = 0
                if (!('registered' in user)) user.registered = false
                if (!user.registered) {
                if (!('name' in user)) user.name = conn.getName(m.sender)
    
                if (!isNumber(user.apel)) user.apel = 0
                if (!isNumber(user.anggur)) user.anggur = 0
                if (!isNumber(user.jeruk)) user.jeruk = 0
                if (!isNumber(user.semangka)) user.semangka = 0
                if (!isNumber(user.mangga)) user.mangga = 0
                if (!isNumber(user.stroberi)) user.stroberi = 0
                if (!isNumber(user.pisang)) user.pisang = 0
                if (!isNumber(user.kayu)) user.kayu = 0
                if (!isNumber(user.emas)) user.emas = 0
                if (!isNumber(user.makanan)) user.makanan = 0
                if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                if (!isNumber(user.bibitapel)) user.bibitapel = 0
                if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
    
                  
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.premiumDate)) user.premiumDate = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                
            } else
                global.db.data.users[m.sender] = {
                    exp: 0,
                    limit: 10,
                    lastclaim: 0,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    afkReason: '',
                    banned: false,
                    warn: 0,
                    level: 0,
                    role: 'Novato',
                    autolevelup: true,


                    money: 0,
                    health: 100,
                    limit: 10,
                    potion: 10,
                    trash: 0,
                    wood: 0,
                    rock: 0,
                    string: 0,

                    //Minerales
                    emerald: 0,
                    reddiamond: 0,
                    diamond: 0,
                    gold: 0,
                    iron: 0,
                    stone: 0,

                    //Frutas
                    strawberry: 0,
                    watermelon: 0,
                    grape: 0,
                    kiwi: 0,

                    //Peces
                    commonfish: 0,
                    tropicalfish: 0,
                    blowfish: 0,
                    crab: 0,
                    locust: 0,
                    shrimp: 0,
                    squid: 0,
                    octopus: 0,

                    //Cajas
                    common: 0,
                    rare: 0,
                    mythic: 0,
                    legendary: 0,


                    pet: 0,
                    horse: 0,
                    horseexp: 0,
                    cat: 0,
                    catngexp: 0,
                    fox: 0,
                    foxexp: 0,
                    dog: 0,
                    dogexp: 0,


                    horselastfeed: 0,
                    catlastfeed: 0,
                    foxlastfeed: 0,
                    doglastfeed: 0,


                    armor: 0,
                    armordurability: 0,
                    sword: 0,
                    sworddurability: 0,


                    //Herramientas
                    pickaxe: 0,
                    pickaxedurability: 0,
                    rod: 0,
                    roddurability: 0,



                    lastclaim: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                    
                    
                    premium: false,
                    premiumTime: 0,
                    limitjoin: 0,

                    // Tipos de minerales
                    mineral_tin: 0,
                    mineral_copper: 0,
                    mineral_iron: 0,
                    mineral_salt: 0,
                    mineral_coal: 0,
                    mineral_silver: 0,
                    mineral_crimsteel: 0,
                    mineral_gold: 0,
                    mineral_pink_salt: 0,
                    mineral_mythan: 0,
                    mineral_sandstone: 0,
                    mineral_cobalt: 0,
                    mineral_varaxium: 0,
                    mineral_black_salt: 0,
                    mineral_magic: 0,

                    // Tipos de picos
                    pickaxe_bronze: 0,
                    pickaxe_iron: 0,
                    pickaxe_steel: 0,
                    pickaxe_crimsteel: 0,
                    pickaxe_mythan: 0,
                    pickaxe_cobalt: 0,
                    pickaxe_varaxite: 0,
                    pickaxe_magic: 0,
                    pickaxe_umbral: 0,
                    pickaxe_ancient: 0,

                    pickaxe_equipped: 0,

                    mining_level: 0,
                    mining_exp: 0,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat)) chat.isBanned = false
                if (!('welcome' in chat)) chat.welcome = false
                if (!('detect' in chat)) chat.detect = false
                if (!('sWelcome' in chat)) chat.sWelcome = ''
                if (!('sBye' in chat)) chat.sBye = ''
                if (!('sPromote' in chat)) chat.sPromote = ''
                if (!('sDemote' in chat)) chat.sDemote = ''
                if (!('delete' in chat)) chat.delete = false
                if (!('antiLink' in chat)) chat.antiLink = false
                if (!('antispam' in chat)) chat.antispam = false
                if (!('viewonce' in chat)) chat.viewonce = false
                if (!('antiToxic' in chat)) chat.antiToxic = false
                if (!('nsfw' in chat)) chat.nsfw = false
                if (!('autosticker' in chat)) chat.autosticker = false
                if (!isNumber(chat.expired)) chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: false,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    delete: false,
                    antiLink: false,
                    antispam: false,
                    viewonce: false,
                    useDocument: true,
                    antiToxic: false,
                    nsfw: false,
                    autosticker: false,
                    expired: 0,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = false
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                restrict: false
            }
        } catch (e) {
            console.error(e)
        }

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0 || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        //const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0

        if (opts['nyimak'])
            return
        if (!m.fromMe && !isOwner && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'unbanchat.js' && chat?.isBanned && !isOwner)
                        return // Except this
                    if (name != 'unbanuser.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.restrict && !(isROwner || isOwner)) { //Comando restringido
                    fail('restrict', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // Real Owner
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Number Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) { // Moderator
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) { // Premium
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Only
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // User Admin
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                if (plugin.nsfw && m.isGroup && !db.data.chats[m.chat].nsfw) { //Modo nsfw (+18)
                    fail('nsfw', m, this)
                    continue
                }

                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('chirrido -_-') // Hehehe
                else
                    m.exp += xp
                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                    m.reply(`*🧃 Yɑ no tienes mɑs límites escribɑ ${usedPrefix}buylimit pɑrɑ comprɑr mɑs*`)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `✳️ nivel requerido ${plugin.level} para usar este comando. \nTu nivel ${_user.level}`, m)
                    continue // If the level has not been reached
                }

                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        m.reply(`*🧃 Menos ${m.limit <= 1 ? 'un límite' : `${m.limit} límites`} por utilizɑr estɑ función*`)
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
    }
}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
          let puserd = participants
          //if (`${puserd}`.startsWith('51')) return this.groupParticipantsUpdate(id, [puserd], 'remove')
          
        break

        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = './src/avatar_contact.png'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Bienvenido, @user').replace('@group', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'Desconocido') :
                            (chat.sBye || this.bye || conn.bye || 'Adiós, @user')).replace('@user', '@' + user.split('@')[0])
                        this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })
                    }
                }
            }
            break
           
        case 'promote':
        case 'promover':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ahora es administrador')
        case 'demote':
        case 'degradar':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ya no es administrador')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, { text, mentions: this.parseMention(text) })
            break
    }
}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        await this.reply(msg.chat, `
≡ Borró un mensaje  
┌─⊷  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀 
▢ *Nombre :* @${participant.split`@`[0]} 
└─────────────

Para desactivar esta función, escriba 
*/off antidelete*
`.trim(), msg, {
            mentions: [participant]
        })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rowner: '• Esta función solo puede ser utilizado por el *creador* de la bot',
        owner: '• Esta función solo puede ser utilizado por el *creador* de la bot',
        mods: '• Esta función es solo para para *moderadores\'as* de la bot',
        premium: '• Esta función es solo para miembros *premium*',
        group: '• Esta función solo se puede usar en *grupos*',
        private: '• Esta función solo se puede usar en el chat *privado* de la bot',
        admin: '• Esta función es solo para *admins* del grupo',
        botAdmin: '• Para ejecutar esta función debo ser *administradora*',
        unreg: 'Regístrese para usar esta función  Escribiendo:\n\n*/reg nombre.edad*\n\n📌Ejemplo : */reg dylux.16*',
        restrict: '• Esta función está *deshabilitada*',
        nsfw: '• En este grupo está prohibido el contenido +18'
    }[type]
    if (msg) return conn.reply(m.chat, msg.replace(/a/g, 'ɑ').replace(/á/g, 'ά'), false, { quoted: m, ephemeralExpiration: 604800 })
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
})
