const mongoose = require("mongoose");

// Une chaîne de connexion contient un identifiant et un mot de passe : elle se
// lit dans une variable d'environnement, elle ne s'écrit pas dans le code.
const MONGO_URL =
  process.env.MONGO_URL ??
  "mongodb+srv://UTILISATEUR:MOT_DE_PASSE@CLUSTER.mongodb.net/r18jwt?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });
