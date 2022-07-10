import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs'
import { tmpdir } from 'os'
import path, { join } from 'path'

import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  //const tmp = [tmpdir(), join(__dirname, '../tmp')]
  //const filename = []
  //tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  //return filename.map(file => {
  //const stats = statSync(file)
  //unlinkSync(file)
  //})

  let o
  try {
      o = await exec('du -sh tmp')
  } catch (e) {
      o = e
  } finally {
      let { stdout, stderr } = o
      if (stdout.trim()) m.reply(`Se eliminó *${stdout. replace('M	tmp
', ' MB')}* de archivos de la carpeta tmp`)
      if (stderr.trim()) m.reply(`Se eliminó *${stderr. replace('M	tmp
', ' MB')}* de archivos de la carpeta tmp`)
  }
}

handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|cleartemp)$/i

handler.rowner = true

export default handler
