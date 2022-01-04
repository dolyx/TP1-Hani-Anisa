const http = require('http');

const scan = (port) => {
    http.get(`http://localhost:${port}/ping`, {res}=>{

    })
}

for (let i = 0; i < 1001; i++) {
    port++;
    scan(port)
}
