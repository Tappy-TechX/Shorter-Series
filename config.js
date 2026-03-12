require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 50900,
    SESSION_PREFIX: process.env.SESSION_PREFIX || "Shadow-Xtech~",
    GC_JID: process.env.GC_JID || "CbUGTuJP03D1LJfK6wENCN",
    DATABASE_URL: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_AeNhu3a2VFOM@ep-bitter-bird-an8g7zvq-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=verify-full&channel_binding=require", 
    BOT_REPO: process.env.BOT_REPO || "https://github.com/Tappy-TechX/Shadow-Xtech",
    WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
    MSG_FOOTER: process.env.MSG_FOOTER || "> *Powered By Tappy-TechX*",
};
