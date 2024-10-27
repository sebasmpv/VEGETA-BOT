/*
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'
let handler  = async (m, { conn }, args) => {
let parentw = conn
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
if (global.conn.user.jid !== conn.user.jid) return conn.sendMessage(m.chat, {text: '*Use este comando directamente en el numero del Bot principal*'}, { quoted: m }) 
else {
await conn.sendMessage(m.chat, {text: "*👋🏻 Adiós Bot, haz dejado de ser un Bot*"}, { quoted: m }) 
}
try {
fs.rmdir("./IgnaJadiBot/" + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, {text : "*Todos los archivos de session fueron eliminados*" } , { quoted: m })
} catch(err) {
console.error('La carpeta o archivo de sesion no existen ', err)   
}}
handler.help = ['deletebot']
handler.tags = ['jadibot']
handler.command = /^(deletebot|eliminarsesion|deletesesion)$/i
handler.private = false
handler.fail = null
export default handler
/



/*⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠
El codigo de este archivo fue realizado por:
- ReyEndymion >> https://github.com/ReyEndymion
*/

import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'

let handler  = async (m, { conn, usedPrefix, command}, args) => {
let parentw = conn
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
let userS = `${conn.getName(who)}`
    
if (global.conn.user.jid !== conn.user.jid) {
return conn.sendMessage(m.chat, {text: lenguajeGB.smsJBDel() + `\n\n*https://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0*`}, { quoted: m }) 
} else {
try {
await fs.rmdir("./IgnaJadiBot/" + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, { text: lenguajeGB.smsJBAdios() }, { quoted: m })
await conn.sendMessage(m.chat, { text : lenguajeGB.smsJBCerrarS() } , { quoted: m })
} catch(err) {
if (err.code === 'ENOENT' && err.path === `./GataJadiBot/${uniqid}`) {
await conn.sendMessage(m.chat, { text: "Usted no es Sub Bot" }, { quoted: m })
} else {
console.error(userS + ' ' + lenguajeGB.smsJBErr(), err)
}}}
}

handler.command = /^(deletesess?ion|eliminarsesion|borrarsesion|delsess?ion|cerrarsesion)$/i
handler.private = false
handler.fail = null

export default handler
