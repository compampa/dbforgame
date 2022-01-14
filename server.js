require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require("path");
const cookieParser = require('cookie-parser')
const index = require('./src/routes/index')
const errorMiddleware = require('./src/middlewares/errorMiddleware')


const router = require('./routes/indexRouter');
const auctionRouter = require('./routes/auction')

const app = express();

const PORT = 4000 // process.env.PORT ??
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());

// app.use('/battle')
app.use('/auction', auctionRouter)
app.use('/db', router);
app.use('/api', index)
app.get('/*', (req, res) => {
    // res.sendFile(path.join((__dirname, 'build', 'index.html')))
    res.sendFile('./build/index.html', {root: __dirname})

})
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`------------------- here we  go on  ${PORT}-------------------`);
});
