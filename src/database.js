const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://catalinakrenz3316:coderhouse@cluster0.0yui3l4.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conexión exitosa"))
  .catch(() => console.log("Error en la conexión"));

  // class DataBase {
//     static #instancia; 

//     constructor(){
//         mongoose.connect(mongo_url)
//     };

//     static getInstancia(){
//         if(this.#instancia){
//             console.log("Previous connection");
//             return this.#instancia;
//         }

//         this.#instancia = new DataBase();
//         console.log("Successful connection");
//         return this.#instancia;
//     }
// }

// module.exports = DataBase.getInstancia();
