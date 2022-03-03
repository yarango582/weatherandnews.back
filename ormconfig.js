const { resolve } = require("path");

module.exports = [
  {
    name: "default",
    type: process.env.DATABASE_MONDODB_TYPE,
    url: process.env.DATABASE_MONGODB,
    useNewUrlParser: true,
    synchronize: false,
    useUnifiedTopology: true,
    logging: process.env.TYPE_ORM_LOGGING,
    entities: [resolve(__dirname, process.env.DATABASE_MONDODB_ENTITY_DIRECTORY)]
  }
];
