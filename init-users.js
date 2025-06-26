// Ce fichier sera exécuté automatiquement par MongoDB au démarrage
db = db.getSiblingDB("tptiers");
db.users.insertMany([
  { name: "Nolan" },
  { name: "Lorenzo" },
  { name: "LeXav" },
]);
