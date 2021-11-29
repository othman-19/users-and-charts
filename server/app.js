const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const debug = require('debug')('api:');
const cors = require('cors');
const methodOverride = require('method-override');
const compression = require('compression');

// const jwtAuth = require('./config/authentication');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const {
  database,
  port,
} = require('./config/config');

mongoose.connect(
  database,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(() => {
  debug('DataBase Connected');
  debug(`app listening on port ${port}!`);
})
  .catch(err => {
    debug(`update error:  ${err}`);
  });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const allowedOrigins = ['null', 'http://localhost:3000', 'https://users-and-charts.herokuapp.com, https://users-and-charts1.vercel.app/'];
app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not '
                + 'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

app.use(compression());

app.set('trust proxy', 1);

// eslint-disable-next-line consistent-return
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use('/', indexRouter);
app.use('/api/v1/', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((error, req, res, next) => {
  if (req.app.get('env') === 'production') {
    res.status(500);
    res.render('error', { message: '500: Internal Server Error', error });
  } else {
    // set locals, only providing error in development
    res.message = error.message;
    res.error = error;
    // render the error page
    res.status(error.status || 500);
    res.send(error);
  }
});

module.exports = app;
