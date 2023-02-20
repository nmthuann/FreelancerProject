const homeService = require("../Services/homeService")

class homeController{
        // [GET] /
        index(req, res, next) {
            try {
                const information = homeService.getInformation();
                res.status(200).json({
                information: information,
            });
            } catch (error) {
                res.status(400);
            }
        }
}

module.exports = new homeController();