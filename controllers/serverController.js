const serverService = require("../services/serverService");
const handleAsync = require('../helpers/asyncHandlers');

const serverController = {
    getServerHealth: async (req, res) => {
        handleAsync(serverService.getServerHealth(), res);
    },
    getTestData: async (req, res) => {
        handleAsync(serverService.getTestData(), res);
    }
};

module.exports = serverController;
