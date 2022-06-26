const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
require("dotenv").config();
const path = require("path");

// helper function
<<<<<<< HEAD
 //const helpers = require("./utils/helpers");

// // handlebars
 const exphbs = require("express-handlebars");
=======
//const helpers = require("./utils/helpers");

// // handlebars
const exphbs = require("express-handlebars");
>>>>>>> feature/category-view
const hbs = exphbs.create({});

// session (connects session to sequelize Database) --> authentication
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "project2 super secret",
  cookie: {},
  resave: false, // passport example is set to true, but leaving false for now
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, "public")));

 app.engine("handlebars", hbs.engine);
 app.set("view engine", "handlebars");

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  // true will recrete the tables, set back to false after creating
  app.listen(PORT, () => console.log("Now listening on port " + PORT));
});
