const server = require('./server.js');

const PORT = process.env.ENV || 5000;

server.listen(PORT, () => {
    console.log(`\n*** Server Running on localhost:${PORT}/  ***\n`)
})
