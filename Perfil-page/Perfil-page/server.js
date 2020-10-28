var http = require('http')
var fs = require('fs')
const port = 3000


//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('\src\html\table.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('error')
        } else {
            res.write(data)
        }
        res.end()
    })
}).listen(1337)