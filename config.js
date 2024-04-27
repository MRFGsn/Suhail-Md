const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Sethsnyder06@gmail.com"
global.location="Colombo,Sri lanka."


global.mongodb= process.env.MONGODB_URI || "postgres://postgres.khyrqfdhjuxznnosguvk:Seth&Liya@4@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://postgres.khyrqfdhjuxznnosguvk:Seth&Liya@4@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94776860011" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776860011";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_13_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDczLFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDYyLFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNFdQeVJvMzczTTU5NTQ2N21jTXpCS3dFaEVkUktlcFR6c0RkNTNDZUdNOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekJIY05UX0VTdi0wN1praXBWM0I4Z1wiLFxuICBcInBob25lSWRcIjogXCI2OGViZjdlZC00YTg3LTQyMTEtOTIzNC1iY2EyZmQ2M2YwZmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAxNyxcbiAgICAgIDczLFxuICAgICAgMTM4LFxuICAgICAgOTYsXG4gICAgICAyMjAsXG4gICAgICAyNDAsXG4gICAgICAyMTgsXG4gICAgICAxNjAsXG4gICAgICAxODEsXG4gICAgICA3OSxcbiAgICAgIDIwNyxcbiAgICAgIDMxLFxuICAgICAgMTU1LFxuICAgICAgMTU2LFxuICAgICAgMTk3LFxuICAgICAgMTM3LFxuICAgICAgMTg1LFxuICAgICAgMTc2LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDE4NixcbiAgICAgIDUwLFxuICAgICAgMTkyLFxuICAgICAgMTY5LFxuICAgICAgMTA0LFxuICAgICAgMjA1LFxuICAgICAgNzAsXG4gICAgICAxNjksXG4gICAgICA3LFxuICAgICAgMTUsXG4gICAgICAxMjksXG4gICAgICAxNTIsXG4gICAgICAxMDcsXG4gICAgICAxMjIsXG4gICAgICAyOCxcbiAgICAgIDIzMixcbiAgICAgIDIyOSxcbiAgICAgIDQ0LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVRSkxaM0MzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3Njg2MDAxMTo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYxNTUwOTc1Nzc0OTE3OjY2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmrPwnZqqLiDwnZCS8J2atPCdkJjwnZCD8J2atfCdmqpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUFNxVTRRM1pLeXNRWVlKeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlDNmlwYS8wc2lCM2RtT1ZqNk15aS9hNitWSXBhK09tWGdCOFl1UUJFVWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicCtKWkxSUWJIMWNqRnVDMDN5NUdwakY5V0Y5cjV0TnhIV1VablZxVWJCRU9ZcTV4elZkRnB1RFdicEVERGh2RWcvOTdWU0ZwQmR5ZGp2MzZuY0F6QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOXptTEIzdmVHeEpLby9DUjNaRnRTWXZaZHBBckV5a2kwVU8zRUgvS0pjVXppYVNhdW5vYVhYanhzNWlSVXFYRVp2d1VjYk9xb1RCUnc2QXJzU0IraUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzY4NjAwMTE6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0MTk0Nzg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFCd0FBRElqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUJ3QUFESWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtVklGVXRJckdqbmw1RDI1ekxybVFhYklBc3AvbGtnMzgycUthQmo2WnpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDI2MDEzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMzUsMjhdfSxcInRpbWVzdGFtcFwiOlwiMTcxMzc5Njk0MTI5OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©snyder-->MRFG°" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MRFG-INFINITE",
  ownername:process.env.OWNER_NAME|| "Unlimited Snyder",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
