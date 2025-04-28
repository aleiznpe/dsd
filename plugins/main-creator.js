let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:ALEIZN;;\nFN:ALEIZN\nORG:ALEIZN\nTITLE:\nitem1.TEL;waid=51992621601:51992621601\nitem1.X-ABLabel:ALEIZN\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ALEIZN\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '@ale.izn_20⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
