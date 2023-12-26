var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const Author  = require('./models/author');

port = 3000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var secondIndexRouter= require('./routes/secondindex')
var app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery",false);
const mongoDB = "mongodb+srv://stbacmtd:Stru5932@cluster0.qoxy26k.mongodb.net/?retryWrites=true&w=majority";

main().catch((err)=>console.log(err));
async function main(){
  await mongoose.connect(mongoDB);
}



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/secondindex',secondIndexRouter);

app.post('/addAuthor', async (req, res) => {
  const { first_name, family_name, other_fields } = req.body;

  try {
    const newAuthor = new Author({
      first_name,
      family_name,
      // Assign other fields...
    });

    await newAuthor.save();
    res.redirect('/'); // Redirect to home page or appropriate route
  } catch (error) {
    // Handle error, e.g., render a page with an error message
    res.render('error', { error });
  }
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
