require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 50900,
    SESSION_PREFIX: process.env.SESSION_PREFIX || "Shadow-Xtech~",
    GC_JID: process.env.GC_JID || "CbUGTuJP03D1LJfK6wENCN",
    DATABASE_URL: process.env.DATABASE_URL || "", // Your Db URL here(optional). Can either be mongodb or postreSQL
    BOT_REPO: process.env.BOT_REPO || "https://github.com/Tappy-TechX/Shadow-Xtech",
    WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
    MSG_FOOTER: process.env.MSG_FOOTER || "> *Powered By Tappy-TechX*",
};
