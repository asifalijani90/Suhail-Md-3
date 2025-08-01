const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT SUHAIL_17_07_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMxLFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTExLFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1xWTJWM3lBZWRCMGU1MGZzSkFzUmZWSk1vbURlNmVOVFZEaGxYOEFscFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDk5NjIzNTMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MzAxMzhERDAxRUQ3MUU2NTRGQUQ0MTgwNjRCOTZCNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTM5ODE2NThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwianBJSTNmX1NSVEdhUTlCS3JfeUhmQVwiLFxuICBcInBob25lSWRcIjogXCI1ZGQyZmNiZi00OWY5LTQ4ZWEtOTMwYS1hNWIyMjMxMWIzNjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgNDUsXG4gICAgICAxOCxcbiAgICAgIDUsXG4gICAgICA4MCxcbiAgICAgIDExOCxcbiAgICAgIDIxOSxcbiAgICAgIDI1NSxcbiAgICAgIDIyMixcbiAgICAgIDIzMCxcbiAgICAgIDE5LFxuICAgICAgMjMzLFxuICAgICAgMTcwLFxuICAgICAgMjA0LFxuICAgICAgMjI2LFxuICAgICAgNTQsXG4gICAgICA3NSxcbiAgICAgIDExMixcbiAgICAgIDUsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAxOTUsXG4gICAgICAxMTcsXG4gICAgICAyMTIsXG4gICAgICAyMTQsXG4gICAgICAxODcsXG4gICAgICAxMDYsXG4gICAgICAyNDQsXG4gICAgICAxNzIsXG4gICAgICAxMTgsXG4gICAgICA5OCxcbiAgICAgIDE1MyxcbiAgICAgIDExMyxcbiAgICAgIDk0LFxuICAgICAgMTUzLFxuICAgICAgOTksXG4gICAgICAxNTAsXG4gICAgICAyNTMsXG4gICAgICAxMzUsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbmEyYmdGRU03RnJzUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZYUm5GUVR0dVNvTnJuV3lQR1NHcnZwcjArYU5pUjlkU2FuV1k5R0FqMm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRCtxcDFiYThCMUhoZFg5Q0ZXMmdGVndvWnlySGtJZkRZQ2RHUFNxa2JJbzlXUHhsc2dkemlQNDRkVVUvcFZRQmhBUGlxM3NNYno1Y1A1Ny9DUWx4Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid2YvanB4TlZ5QUVYbWhVNGtpYnNHZkkxclhLYjJGSk5TbnNwZHZ0bnlrVmFDT3pPcXNIYTZzcmhqQk1UcFYrS1BhdmtqYWJNRCtmZG8xTEhTSlF0Z2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0OTk2MjM1MzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTM1NTEwOTg5NjM0NjoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcItis24zZiCDYp9mI2LEg2KzbjCDZhtuSINiv2YhcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ5OTYyMzUzMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1Mzk4MTY1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5iOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmI5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidmwxSitWMi9ZeVM1YVBnNm9hU0JLbkJBZFpXR25uLzNPNTB3UThDWjV1OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDYxMDg3NTI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTM5ODE2NTM5NzlcIn0iCn0= SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
  //aitts_Voice_Id : process.env.AITTS_ID || "03499623532",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
