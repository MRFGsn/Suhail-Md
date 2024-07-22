const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Snyder:Snyder@liya.cluiny3.mongodb.net/?retryWrites=true&w=majority&appName=Liya"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Snyder:Snyder@liya.cluiny3.mongodb.net/?retryWrites=true&w=majority&appName=Liya"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_22_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5LFxuICAgICAgICA4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTEhic3dhRTYydHNhK1EzVXVhME1pcm1USW5zekV0N0RyU24zazM3eklSVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibTZiMGNSc3BRLUc4Q0xpMTRvOXpwd1wiLFxuICBcInBob25lSWRcIjogXCJlNjI4YzVmZS0zM2YzLTQ0MDItOTAwOC04Nzk4ZjBjNmQ4ODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMTA0LFxuICAgICAgMTAxLFxuICAgICAgNjMsXG4gICAgICAxNzIsXG4gICAgICAyNTUsXG4gICAgICA1MCxcbiAgICAgIDQyLFxuICAgICAgOTYsXG4gICAgICA3MCxcbiAgICAgIDkwLFxuICAgICAgMjQ2LFxuICAgICAgMTc0LFxuICAgICAgMjQxLFxuICAgICAgMjAxLFxuICAgICAgMTQxLFxuICAgICAgMTIxLFxuICAgICAgMTcsXG4gICAgICAzNyxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMTg4LFxuICAgICAgODEsXG4gICAgICA1LFxuICAgICAgODUsXG4gICAgICAyMzQsXG4gICAgICAyMDUsXG4gICAgICAxMzcsXG4gICAgICAyMzEsXG4gICAgICAxOTMsXG4gICAgICAxNTgsXG4gICAgICA2LFxuICAgICAgMjQ3LFxuICAgICAgMjU1LFxuICAgICAgMTUyLFxuICAgICAgMTQ3LFxuICAgICAgMTM5LFxuICAgICAgOTgsXG4gICAgICAyMDksXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODFZRVNRVjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc2ODYwMDExOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQ0MDU4NjAxODgzNTg6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFhtK1dVUWhOSHB0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVTVJBREgrOFJPQW9CcVFYaTBmVkd4dERmQ3JNUGtiWTNIOUVWOTJSNjJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndwZ05NaENWbm1ldk1UcFk5TGZwd3dZeUJBaXFyOFM2WjY4czFQdTkxVXdQSzhCVkwyZUw1VC82MS80a2RkblJrZCtTakMwc0Z2YUhLT2pTZlZuVUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVLZnAyK0xoOTRCT1hZd1JKTjJURUl0bWRCVXM0SXJsdHYzVFp3M1lKa2JVTzdGaFFSMzI4emw2T25SRExBK3l1U2R5eDRaVTMyOGZEWXg3TUJxcUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc2ODYwMDExOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM5NTMzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxjQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGNCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZUc2Sm4vSkVOWC9MTzF0czR6MyttRnpYc3RtRTAyWlR6OUg5S0NhdElwZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTM4MDc5ODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI2MTM5MzMzM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
