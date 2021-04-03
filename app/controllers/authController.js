const User = require('../models/user');
const bcrypt = require('bcrypt');

const authController = {
    signup:async (req, res) => {
        try {
        console.log(req.body);

        const user = await User.findOne({where: {pseudo: req.body.pseudo}});

        if(user){
            return res.render('signup', { error: "Ce pseudo existe"});
        }

        const salt = await bcrypt.genSalt(10);
        const cryptedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            pseudo:req.body.pseudo,
            //password: req.body.password
            password: cryptedPassword
        });

        console.log(newUser);

        // sauver dans la base de donnée
        await newUser.save(); //pour avoir le retour de la base au bon moment
        res.redirect('/');
        }catch(e){
            res.status(500).send(e);
        }
   },
   signin: async (req, res) => {
    try {
        console.log(req.body);
      const user = await User.findOne({
        where : {
          pseudo : req.body.pseudo
        }
      });
      if(!user){
        return res.render('signin', {error : "Aucun utilisateur en BDD"});
      }
      const paswdChecked = await bcrypt.compare(req.body.password, user.password);
      if(!paswdChecked){ return res.render('signin', {error : 'Les mots de passes ne correspondent pas.'})};

      req.session.user = user;
      delete req.session.user.password;
      res.render('myProfile', {user : req.session.user});
    } catch (error) {
        console.trace(error);
        res.status(500).send(error);
    }
}

}


module.exports = authController;