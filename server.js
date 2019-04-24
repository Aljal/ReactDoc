const express = require('express')
const next = require('next')

const env = process.env.NODE_ENV !== 'production'
const app = next({ env })
const handle = app.getRequestHandler()

const path = require("path")
const fs = require('fs')

const filePath = path.join(__dirname, 'ressources/json/doc.json')
const doc = fs.readFileSync(filePath, {encoding: 'utf-8'})

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(express.static(path.join(__dirname, 'ressources/images')))

    server.get('*', (req, res) => {
      console.log(req.url)
      if (req.url != '/' && req.url.indexOf('_next') < 0)
        res.redirect('/')
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })