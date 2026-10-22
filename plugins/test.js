const config = require('../config');
const { cmd, commands } = require('../command');

// ⚡ PING COMMAND
cmd({
    pattern: "test",
    alias: ["tes", "t"],
    use: '.test',
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        await conn.sendMessage(from, {
  text: 'Choose one:',
  footer: 'chethmina',
  nativeFlow: [
    { text: '👋🏻 Yes', id: 'yes_1' },
    { text: '📞 Call', call: '948123456789' },
    { text: '📋 Copy', copy: 'PROMO123' },
    { text: '🌐 Source', url: 'https://example.com' },
    {
      text: '📋 Select',
      sections: [{ title: '✨ Section 1', rows: [{ title: '🏷️ Coupon', id: 'coupon_code' }] }]
    }
  ]
}, { quoted: ck });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

cmd({
    pattern: "test2",
    alias: ["tes3", "t2"],
    use: '.test',
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        await conn.sendMessage(from, {
  image: { url: 'https://i.ibb.co/fd7v5197/6xs-BKLp911.jpg' },
  title: 'Flash Sale',
  caption: 'Up to 50% off today only',
  footer: 'chethmina',
  nativeFlow: [
    { text: 'Shop Now', url: 'https://shop.example.com' },
    { text: 'Copy Code', copy: 'SALE50' },
      {
      text: '📋 Select',
      sections: [{ title: '✨ Section 1', rows: [{ title: '🏷️ Coupon', id: 'coupon_code' }] }]
      }
  ]
}, { quoted: ck });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

const ck = {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        contactMessage: {
            displayName: "〴ᴄʜᴇᴛʜᴍɪɴᴀ ᴋᴀᴠɪꜱʜᴀɴ ×͜×",
            vcard: `BEGIN:VCARD
VERSION:3.0
FN:Meta
ORG:META AI;
TEL;type=CELL;type=VOICE;waid=13135550002:+13135550002
END:VCARD`
        }
    }
};
