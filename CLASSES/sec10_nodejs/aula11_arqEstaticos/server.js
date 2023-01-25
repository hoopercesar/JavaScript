const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname, "public")));

// EJS: embedded JavaScript Templates (Planilla, armazón incrustada de JS)
// el camino para renderizar el index.ejs
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
  console.log("Server activo en la puerta 3000");
});
