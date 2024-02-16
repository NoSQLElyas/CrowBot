const Astroia = require('./source/structures/client/index')
const client = new Astroia()

process.on("uncaughtException", (e) => {
  console.log(e)
     if (e.code === 50013) return;
     if (e.code === 50001) return;
     if (e.code === 50035) return;
     if (e.code === 10062) return;
     console.log(e)
   })