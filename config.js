//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2349112171078,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0d4R3J0dElvaWRheEZBeldwZ20rbzlOb2IvWCtDTFdLTWtxVy8vV2MzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFR4dVZFL1puaVl6ZndlR1ljQWdEb3o4WE9TOGZ4bGpjSXIzcDVFdTZrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SjIrODBZWml5S1JwdG9qOENNWUJhaEZVUW5rVTlMSFhPSDNuWTdrSm1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjd1BvemNZdVFTd3lodXVNQzVUZWQzTjRDdnJubGd0U21HMTZFS3dSNUQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJOUJqR2tyN3FpbXZXcjQ3WCt6cWs1cVYvZ2d4ZXJDTTRCYUNTbjUxRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InczU3ZMaW5peFpJSzZHU0pUWjRMejhrUmNYY0cwRk43YWJDSEU3WnZTQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dDWll5UXNINjdjOU9qSGRWMTdjS1d1c2dHbFJjbVV3QU5NSkVzT1pIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblQraUYxYnlKY3lPUXVEU2JBSWtidjhJaXMrSVdVY2lHN0Q0di9FVktXZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing0YStLbHFPbXlMMWU1RXh4OFVLdzFoVW52QUEwRjVZMXY0UnBocWRrSlpUc0dqYktMZmpER0t4aTFpdVJXK0hqSlg2NEFvOU04S1R4dURRYlVJSEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJSZVVHclJLdjl5Rzk0NWRyNlM5RSs5N1lLeG10L0wvc01kOWN6Skt2ejZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzI0MTY1MzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FFNjA3MjFBMTlERDVEMTFFMDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjAxMzQxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3MjQxNjUzMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTBEQ0UzRURDMTQ2MjU5OUZFNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2MDEzNDIxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkT2JjLXBLMFRiYXBzTjdra2ozZ3dnIiwicGhvbmVJZCI6IjU5MTljNDY0LWQ2MTgtNDc2OC1hNjRkLTYwYjcyMDE4MDcxMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSnZpUzIxK285b3I2OUNQZm1SSGJlb2h5aGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWJWMktPL2o0NGpaaVRFZkt1eEIwNThiejhVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwyU0gzQlBUIiwibWUiOnsiaWQiOiIyMzQ3MDcyNDE2NTMxOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGVucnkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ovMnRzUU1FTnUvZzdjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkM2K3hweTlwbkJXVG12a0xDWTMyQ2F1UWE5aWJtQy96NStITU5GNFc5Qlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpvbzBIZlFvbnlIQTFZaHpRZUR0b3hTZEdBZ21GdDBGaUZjWUtrVDdRTHQ0anMwamJUazhvRjZMVGFHOVRZVFR4dklDbGRpQllhQ2tPcFlRK3JGSkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHS1B2L1h6MXVEV3lka3IxMjkweUp6MlA4ZTNMQnBSbFc1QWNqU0pRRFk2NEl0bXNEVEdRNHllTzd4K09JTVlERVN2b2pONE1ucFZLalJOOStCMWdDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNzI0MTY1MzE6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRdXZzYWN2YVp3Vms1cjVDd21OOWdtcmtHdlltNWd2OCtmaHpEUmVGdlFXIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYwMTM0MTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHl0In0==="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
