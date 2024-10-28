import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
if (!text) throw `𝘏𝘰𝘭𝘢 𝘏𝘶𝘮𝘢𝘯𝘰 😎 
𝘔𝘪 𝘯𝘰𝘮𝘣𝘳𝘦 𝘦𝘴 𝘌𝘭𝘪𝘵𝘦 𝘉𝘰𝘵 , 𝘱𝘢𝘳𝘢 𝘪𝘯𝘵𝘦𝘳𝘢𝘤𝘵𝘶𝘢𝘳 𝘤𝘰𝘯𝘮𝘪𝘨𝘰 𝘦𝘴𝘤𝘳𝘪𝘣𝘪𝘳: 
.𝘣𝘰𝘵 𝘏𝘰𝘭𝘢 𝘦𝘭𝘪𝘵𝘦 𝘣𝘰𝘵`
try {
await conn.sendPresenceUpdate('composing', m.chat)
let api = await fetch(`${apis}/tools/simi?text=${text}`)
let resSimi = await api.json()
await m.reply(resSimi.data.message)
} catch {
try {
if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
if (text.includes('hola')) text = text.replace('hola', 'Hello');
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
const resu = await reis.json();
const nama = m.pushName || '1';
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
const res = await api.json();
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
const resu2 = await reis2.json();
m.reply(resu2[0][0][0]);
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi'] 
export default handler
