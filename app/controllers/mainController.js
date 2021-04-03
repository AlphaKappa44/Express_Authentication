const mainController = {
    homepage: async(req, res) => {
        try {
            console.log("I'm on!")
            res.render('index');
        } catch (error){
            res.status(500).send(error);
        }

    },
    signupPage : (req, res) => {
        res.render('signupPage');
    },
    signinPage : (req, res) => {
        res.render('signinPage');
    }
}

module.exports = mainController;