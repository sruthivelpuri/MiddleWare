import http from 'http';

//creating the server
const server = http.createServer((req, res) => {
    if(req.url === '/users'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({name:'thub'}))
    }else{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello this is from backend');
}
});

//starting the server
server.listen(7007,()=>{
    console.log(`server running at port ${7007}`)
})