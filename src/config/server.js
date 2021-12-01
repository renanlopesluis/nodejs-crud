module.exports = {
    init: function() {
        const express = require('express');
        const server = express();
        server.use(express.json());
        server.listen(3010);
    return server;
    }
}



