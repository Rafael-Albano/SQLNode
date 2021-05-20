const Tech = require("../models/Tech");
const User = require("../models/User");
// const { delete } = require("../routes");

module.exports = {

  async index(req, res){

    try{
      const { id: user_id } = req.params;

      const user = await User.findByPk(user_id, { 
        include: { association: 'techs', through: {attributes: []} }
      });

      if(!user){
        res.status(404).json("Not Found !");
      }

      return res.json(user.techs);
    }catch(error){

    }
    
  },

  async store(req, res){

    try{

      const { id: user_id } = req.params;
      const { name } = req.body;

      // BUSCA O USUÁRIO PELA PRIMARY KEY.
      const user = await User.findByPk(user_id);

      if(!user){
        res.status(404).json("Not found !");
      }

      // PROCURA SE A TABELA POSSUI A COLUNA DTERMINADA SE ELA NÃO POSSUIR ELE CRIA E RETORNA OS DADOS.
      // OBSERVAÇÃO: TODA RELAÇÃO BELONGSTOMANY ENTRE AS TABELAS RETORNAM MÉTODOS PARA A GENTE USAR.
      const [ tech ] = await Tech.findOrCreate({
        where: { name }
      });

      console.log(JSON.stringify(tech));
      // ADICIONA UMA TECNOLOGIA A UM USUÁRIO
      await user.addTech(tech.id)

      return res.json(tech);

    }catch(error){
      throw error;
    }
    
  },

  async delete(req, res) {
    const { id: user_id } = req.params;
    const { name } = req.body;


    const user = await User.findByPk(user_id);

    if(!user){
      return res.status(400).json({ error: "User not found" });
    }

    const tech = await Tech.findOne({
      where: { id: 1},
      raw: true
    });

    console.log("asaksjakjsa");
    console.log(tech);

    await user.removeTech([tech.id]);

    return res.status(200).json()
  }
}