require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const router = require('./routes/indexRouter');

const app = express();

const PORT = process.env.PORT ?? 3000; // process.env.PORT ??

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
