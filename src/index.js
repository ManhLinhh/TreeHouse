const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routing
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`),
);
