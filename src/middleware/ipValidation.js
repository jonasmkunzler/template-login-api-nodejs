const requestIp = require('request-ip')

const clienteIpList = ['45.168.129.38','::1', '192.168.0.105']

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    (clienteIpList.includes(clientIp)) ? next() : reply404(res , clientIp) 
};

function reply404(res, ipCliente) {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.statusMessage = "Not Found";
    res.end('<span style="font-weight: bold; font-size:200%;">ERROR 404 - Voce nao tem permissao de acesso! - Contate jonasmkunzler@gmail.com;<\/span>' + ipCliente);
}

module.exports = {
    ipMiddleware,
}