const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Colombo,Sri lanka."


global.mongodb= process.env.MONGODB_URI || "postgres://koyeb-adm:oMfC1nbSpv5A@ep-wandering-forest-a2yfi0f2.eu-central-1.pg.koyeb.app/koyebdb"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://koyeb-adm:oMfC1nbSpv5A@ep-wandering-forest-a2yfi0f2.eu-central-1.pg.koyeb.app/koyebdb"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94776860011" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776860011";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_07_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NixcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDgzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmxGN0djeU5qQXdSakpCd3lnRWF0Tm5sRzViQXNMVTgySkhvdFZWVVM1az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieEdMaWxoaUhROTZ0MFlWVXBwaWc3UVwiLFxuICBcInBob25lSWRcIjogXCJmNmFmNzgxNi03MDY1LTRmMWYtOWEyOS0wMGRiZGE1NjY3M2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDQ3LFxuICAgICAgMTk5LFxuICAgICAgMTE3LFxuICAgICAgNjcsXG4gICAgICA4OSxcbiAgICAgIDI0NixcbiAgICAgIDE1MSxcbiAgICAgIDEyMCxcbiAgICAgIDEwNCxcbiAgICAgIDEwNSxcbiAgICAgIDY2LFxuICAgICAgMTcsXG4gICAgICA2NSxcbiAgICAgIDE2MSxcbiAgICAgIDExNyxcbiAgICAgIDEzMCxcbiAgICAgIDE2MCxcbiAgICAgIDEwMCxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE0OSxcbiAgICAgIDQwLFxuICAgICAgMTE5LFxuICAgICAgMTQsXG4gICAgICAyMzQsXG4gICAgICAzNCxcbiAgICAgIDE2MyxcbiAgICAgIDIwMSxcbiAgICAgIDEzMCxcbiAgICAgIDEzNyxcbiAgICAgIDEwMSxcbiAgICAgIDE0MyxcbiAgICAgIDI0MixcbiAgICAgIDIxMCxcbiAgICAgIDIwLFxuICAgICAgMjIsXG4gICAgICAxMTAsXG4gICAgICA0NSxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxV1YzRzlYWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzY4NjAwMTE6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MTU1MDk3NTc3NDkxNzo2MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZqz8J2aqi4g8J2QkvCdmrTwnZCY8J2Qg/CdmrXwnZqqXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1BTcVU0UWx0T05zUVlZSXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5QzZpcGEvMHNpQjNkbU9WajZNeWkvYTYrVklwYStPbVhnQjhZdVFCRVVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjQzS1lQR0h5SWRaY3BVWWFLRFFVSWo2aWppNlJEWC9wN2ZSdGJJUXRyWFRTNWZMRmpqTkNFUW1tclRhUWJPUEpXOExRVkNHMGFvOWRycFI0TWxaY0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNFN0dMWlY5RUFQU0F3YytKenRaRENrK1pDcVJGbWVYOXFNeWVxNEVtK1lkMnpuRnlBMGV1NENFcHRza0NIcGU1UWYxWE9kNEtVcWZzcGRZbWZJYkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc2ODYwMDExOjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzU5NjgyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQndBQURGRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFCd0FBREZELmpzb24iOiAie1wia2V5RGF0YVwiOlwiUmZCRjEzNktkb0tCZ2JZMHcxYVRNRGxKVlplUEtkUEtXemplcnJPbFN2UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQyNjAxMzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDI4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTA2NDU4MjU5NTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©snyder-->MRFG°" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
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
