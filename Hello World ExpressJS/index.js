import express from 'express';

const server = express();
const port = 1234

server.get('/', (req, res)=>{
    res.send('Hello World!')
})



server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})