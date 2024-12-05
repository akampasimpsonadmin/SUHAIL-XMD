const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
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
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SUHAIL_22_34_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIxLFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaWFEWlBsSnpOa1hVY2o1TUI4VmRNN1VzK1p1cXdqTWs3cDRyS095Ym8yRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOFBCZG1nNnpUM0tMMWprdVZFZ0NSd1wiLFxuICBcInBob25lSWRcIjogXCI3ZmNhNDg2Mi1lYmYzLTQ2ZmUtODRkNi1hZDllNjZhMmZjNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgMTI2LFxuICAgICAgMjQyLFxuICAgICAgMTc0LFxuICAgICAgNTMsXG4gICAgICA2OCxcbiAgICAgIDEzMixcbiAgICAgIDExOCxcbiAgICAgIDE3MyxcbiAgICAgIDIyMyxcbiAgICAgIDE0NCxcbiAgICAgIDkxLFxuICAgICAgMTk2LFxuICAgICAgMTA0LFxuICAgICAgMjE1LFxuICAgICAgNTAsXG4gICAgICA2OCxcbiAgICAgIDc3LFxuICAgICAgMTE5LFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDE0MyxcbiAgICAgIDE1MixcbiAgICAgIDY3LFxuICAgICAgODAsXG4gICAgICAyMzUsXG4gICAgICA4NCxcbiAgICAgIDQxLFxuICAgICAgMjE1LFxuICAgICAgMjcsXG4gICAgICAyMSxcbiAgICAgIDE1MSxcbiAgICAgIDE2MSxcbiAgICAgIDE3NixcbiAgICAgIDk4LFxuICAgICAgNixcbiAgICAgIDI4LFxuICAgICAgMTEzLFxuICAgICAgMTc3LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDlKN0hOWjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc4Njc5ODUxNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVlBOUyBURUNIXCIsXG4gICAgXCJsaWRcIjogXCIxODkxODA5OTQ5MzI3NzE6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcU56YUlIRUlIVnlMb0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5QeksydTFWVlhkMjI3RXBnZVZ2UFJDbmNjeWhxOHFZREJ4bVVVWXBQZ2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNkV2a0VsQnJRcmtpSi9tMFdGa1pqalJnZmdFVzBzWEd5azNmeDd5Q3R4WXVZd1VEYzI3bWpOTGJBL0lNSWQyT056MDVmR2ZtUmlDZGdnVjVkTldGQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSkxSZEpyeFdMY2tHVlRseVJXQjEvdVpJTjVZWGdwbk9JeUYwZ1d0RklIc0c4dHZzazFRVEd2WUl3UzVmbUZJbkhyOHpjUytvNlB0bFIydEo3VjhoREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzg2Nzk4NTE3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQzODA4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhzblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHNuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMytwOG9MZlNUU0MvT1YreEtva01EZ2ZZMHcyMndFVFpycHFDaW5rQ1FrST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTUxNjE0Njk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM0Mjc1Njg5MTVcIn0iCn0=  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "SIMPSON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
