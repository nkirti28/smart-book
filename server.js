const express = require("express");
const routes = require("./controllers/api");
const sequelize = require("./config/connection");
require("dotenv").config();
const path = require("path");

// helper function
// const helpers = require("./utils/helpers");

// // handlebars
// const exphbs = require("express-handlebars");
// const hbs = exphbs.create({ helpers });

// session (connects session to sequelize Database) --> authentication
// const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const sess = {
//   secret: "project2 super secret",
//   cookie: {},
//   resave: false, // passport example is set to true, but leaving false for now
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers/'));

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  // true will recreate the tables, set back to false after creating
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
