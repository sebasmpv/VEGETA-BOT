let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `Por qué no vas directamente con el numero del Bot`, m)
else {
await conn.reply(m.chat, `𝗘𝗻𝘁𝗲𝗻𝗱𝗶𝗱𝗼 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 ✅

𝗘𝘀𝘁𝗲 𝗯𝗼𝘁 𝗲𝘀𝘁𝗮́ 𝗱𝗲𝘀𝗰𝗼𝗻𝗲𝗰𝘁𝗮𝗱𝗼.`, m)
conn.ws.close()
}}
handler.command = /^(berhenti|stop|detener)$/i
  
export default handler
