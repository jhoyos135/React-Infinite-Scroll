global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');

const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.get('/api/photos', (req,res) => { unsplash
        .photos
        .listPhotos(req.query.start, req.query.count)
        .then(toJson)
        .then(json => {
            res.json(json)
        });
});

if(process.env.NODE_ENV) {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const PORT = process.env.PORT || 4000;
app.listen(PORT)
console.log(`listening to port ${PORT}`);