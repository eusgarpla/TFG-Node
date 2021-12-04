import express, { json } from 'express';
import morgan from 'morgan';

const app = express()

var cors = require("cors")

// Routes
import userRoutes from './routes/user';
import tierlistRoutes from './routes/tierlist';
import gameRoutes from './routes/game';
import characterRoutes from './routes/character';

// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors())

app.use('/api/users',userRoutes);
app.use('/api/tierlists', tierlistRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/characters', characterRoutes);

export default app;

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var usersRouter = require('./routes/users');

// var app = express();

// // app.set("views", path.join(__dirname, "views"));
// // app.set("view engine", "jade");
// app.use(express.static(__dirname + 'public'));

// // middlewares
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// // routes
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// export default app;
