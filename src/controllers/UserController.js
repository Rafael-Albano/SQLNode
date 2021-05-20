const User = require("../models/User");

module.exports = {

  //LISTANDO USUÁRIOS
  async index(req, res){
    try{
      const users = await User.findAll();
      console.log(users);
      res.json(users);
    }catch(error){
      console.log(`Error message: ${error}`);
    }
  },

  // ADICIONANDO USUÁRIO.
  async store(req, res){
    const { name, email } = req.body;

    const user = await User.create({name, email});

    res.send(user.toJSON());
  }
}