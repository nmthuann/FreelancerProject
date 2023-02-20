const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config()
const rfs = require("rotating-file-stream");
const viewEngine = require('./Configs/ViewEngine');// import view engine
const route = require('./Routes/router');
const port = process.env.PORT || 3333;
const app = express();

const isProduction = process.env.NODE_ENV === "production"
const accessLogStream = rfs.createStream("access.log",{
    size: "10M", // rotate every 10 MegaBytes written
    interval: "1d",
    path: path.join(__dirname,"log"),
});

app.use(helmet())
app.use(express.json());
app.use(isProduction ? morgan('combined',{stream: accessLogStream}): morgan('dev'));// setup the logger
app.use(cors())
app.use(express.static(path.join(__dirname, '/public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);



viewEngine(app);
route(app);// định nghĩa route



app.listen(port, () => {
    console.log(`App listening on port at  http://localhost:${port}`);
});
