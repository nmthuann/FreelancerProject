const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const configViewEngine = (app) => {
    app.engine(
        'hbs',
        handlebars.engine({
            extname: '.hbs',
        }),
    );
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'resources','views'));
}
module.exports = configViewEngine;