const express = require('express');
const next = require('next');
const path = require("path");
const fs = require('fs');

// To request API server (temporary)
const request = require('request');

const env = process.env.NODE_ENV !== 'production';
const app = next({ env });
const handle = app.getRequestHandler();

// Connection parameters
const host = '127.0.0.1';
const port = 8080;

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.static(path.join(__dirname, 'ressources/images')));

    server.get('/api/*', (req, res) => {
      request('http://127.0.0.1:8081' + req.url, { json: true }, (err, response, body) => {
        if (err) {
          queryParams = {
            error: 'API server reponsed with an error',
            code: err.code
          }
          return app.render(req, res, '/Error', queryParams);
        }
        res.status(200).send(body);
      });
    });

    server.get('/privacy_policy', (req, res) => {
      const privacyFile = path.join(__dirname, 'ressources/privacy_policy.html');
      const privacy = fs.readFileSync(privacyFile, { encoding: 'utf-8' });
      res.status(200).send(privacy);
    })

    server.get('*', (req, res) => {
      if (req.url != '/' && req.url.indexOf('_next') < 0) {
        res.redirect('/');
      }
      return handle(req, res);
    })

    server.listen(port, host, err => {
      if (err) throw err
      console.log('> Ready on http://' + host + ':' + port);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });