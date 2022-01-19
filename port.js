const server = require('./sockets')

const PORT = process.env.PORT || 8000 //  process.env.PORT || 8000
// 4000
server.listen(PORT, ()=> console.log(`OMFG it's happening on port ${PORT}`))