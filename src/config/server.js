module.exports = {
    init: function() {
        
        const cors = require('cors');
        const express = require('express');
        const server = express();
        server.use(cors());
        server.use(express.json());
        server.listen(3010);
    return server;
    }
}



