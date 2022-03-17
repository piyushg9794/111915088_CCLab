const indexController = {
    get: async(req, res) => {
        console.log("get");
        res.render('index')
    }
}

module.exports = {indexController};