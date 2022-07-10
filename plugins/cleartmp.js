import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs'
import { tmpdir } from 'os'
import path, { join } from 'path'

import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  let o
  try {
      o = await exec('du -sh tmp')
  } catch (e) {
      o = e
  } finally {
      let { stdout, stderr } = o
      if (stdout.trim()) m.reply(`Se eliminó *${stdout. replace('M	tmp', ' MB').trim()}* de archivos de la carpeta tmp`)
      if (stderr.trim()) m.reply(`Se eliminó *${stderr. replace('M	tmp', ' MB').trim()}* de archivos de la carpeta tmp`)
  }
  exec('cd tmp && rm *1')
}

handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|cleartemp)$/i

handler.rowner = true

export default handler
