const http = require('http')
const port = process.argv[2]

const requestHandler = function(request, response)  {
  console.log(request.url)
var a = '<html><head><title>?~U?~Jம?~Mப?~A வ?~Z?~M?~Z ?~Zி?~Y?~M?~Uம?~M?~_ா</title></head><body><p style="height: 100px; font-size: 50px;margin: 250px;padding: 10px 167px;font-size: 50;font-weight: bold;">?~U?~Jம?~Mப?~A வ?~Z?~M?~Z ?~Zி?~Y?~M?~Uம?~M?~_ா</p></body></html>';
  response.end(a);
}

const server = http.createServer(requestHandler)

server.listen(port, function(err) {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})