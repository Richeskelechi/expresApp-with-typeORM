const { response } = require('../response/response');
const AppDataSource = require('../db/data-source');

const serverService = {
    getServerHealth: async () => {
        try {
            return response(200, "Healthy Server", null, "Success");
        } catch (error) {
            console.log(error);
            return response(500, error.message, null, "Failure");
        }
    },
    getTestData: async () => {
        try {
            const userRepository = AppDataSource.getRepository("User");
            const users = await userRepository.find();
            return response(200, "Healthy Server", users, "Success");
        } catch (error) {
            console.log(error);
            return response(500, error.message, null, "Failure");
        }
    }
};

module.exports = serverService;