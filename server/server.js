const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});
require('./db/connection');
const PORT = process.env.PORT;

//Middleware

const middleware = (req, res, next) => {
    console.log("Middleware");
    next();
}

// Routes 

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/saved', middleware, (req, res) => {
    res.send("Saved");    
});

app.get('/signin', (req, res) => {
    res.send("Sign In");    
});

app.get('/signup', (req, res) => {
    res.send("Sign Up");    
});

app.listen(PORT, () => {
    console.log('Server is running at port ', PORT);
});




 




/*
DB_URL = "mongodb+srv://vanshikasharma:2SATMtk6eFI8gqk1@cluster0.19gii.mongodb.net/StudyTools?retryWrites=true&w=majority";

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));

//mongoose

mongoose.connect(DB_URL, {
    useNewUrlParser:true
});
const db = mongoose.connection;
db.on('error',  error => console.error(error));
db.once('open', () => console.log("** Connected to mongoose **"));




//setting up routes
const indexRouter = require('./routes/indexRoute');
const userRouter = require('./routes/userRoute');
const textRouter = require('./routes/textRoute');
const stickyNotesRouter = require('./routes/stickyNotesRoute');
const screenshotRouter = require('./routes/screenshotRoute');
const pomodoroRouter = require('./routes/pomodoroRoute');

app.use('/', indexRouter); //home route
app.use('/user', userRouter); //user route
app.use('./text', textRouter); //highlightes text
app.use('./text', stickyNotesRouter); //sticky notes route
app.use('./text', screenshotRouter); //screenshot route
app.use('./text', pomodoroRouter); //pomodoro report route

app.listen(process.env.PORT || 3000); 

*/