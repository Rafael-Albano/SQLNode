const Address = require("../models/Address");
const User = require("../models/User");


module.exports = {

  async index(req, res){
    const { id: user_id } = req.params;

    // FAZENDO CONSULTAS COM AS ASSOICIAÇÕES COMO RETORNO.(MANEIRA DE USAR JOIN NO SEQUELIZE);
    // MONTANDO QUERY BUILDER.
    const user = await User.findByPk(user_id,{
      include: { association: 'addresses'}
    });

    return res.json(user);
  },

  async store(req, res){

    try{

      const {id: user_id} = req.params;

      const {zipcode, street, number} = req.body;

      console.log(user_id,zipcode,street,number);

      const user = await User.findByPk(user_id);

      if(!user){ return res.status(400).json({ error: 'User not found'}) }

      const address = await Address.create({
        
        zipcode,
        street,
        number,
        user_id,
      });

      res.json(address);
  
    }catch(error){
      console.log(error);
    }
    

  }
}