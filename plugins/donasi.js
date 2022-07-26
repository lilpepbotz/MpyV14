let handler = async m => m.reply(`
            .✵.GRUP NIU.✵.

            https://chat.whatsapp.com/D8jEgAYOBGFBIAHRx9JAt9
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
