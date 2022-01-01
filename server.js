require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

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

const PORT = process.env.PORT ?? 3000; // process.env.PORT ??

// app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());


// app.use(userCheck);

app.use('/', router);

app.listen(PORT, () => {
    console.log(`------------------- here we  go on  ${PORT}-------------------`);
});
