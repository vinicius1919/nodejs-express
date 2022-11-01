const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cursonodejs.mudecxf.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados",
          error
        );
      }
      return console.log("Conexão com banco de dados realizada com sucesso !");
    }
  );
};
module.exports = connectToDatabase;
