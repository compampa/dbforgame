require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);
// const { idAndName, userCheck } = require('./middlewares/middleware');

// const Sequelize = require('sequelize');
// sequelize = new Sequelize(process.env.DATABASE_URL, {
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             }
//         }
//     }
// );
//
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });


const router = require('./routes/indexRouter');
// const userRouter = require('./routes/user');
// const registerRouter = require('./routes/register');
// const postRouter = require('./routes/post');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'hbs');
hbs.registerHelper('checkId', (idpostuser, idsession) => idpostuser === idsession);
// app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());
app.use(session({
    store: new FileStore(),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false},
    name: 'myAuth',
}));


// const client = new Client({
//     connectionString: process.env.DB_HOST,
//     ssl: true,
// });
//
// client.connect();


// app.use(idAndName);
// app.use(userCheck);

app.use('/', router);
// app.use('/register', registerRouter);
// app.use('/user', userRouter);
// app.use('/post', postRouter);

app.listen(PORT, () => {
    console.log(`-------------------here we  go on ${PORT}-------------------`);
});
