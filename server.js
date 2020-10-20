const express = require('express')
const hbs = require('express-handlebars')
const template = 'home'
const art = require('./art.json')
const viewData = {
  title: "Gallery",
  subheading: "List of Art",
  greeting: "Hello, world!",
  art: art,
  name: art,
  license: art,
  header: "Awesome Art Gallery!!",
  footer: "Lukin, Mave and Roy!"
}

const server = express()
module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Routes


server.get('/', (req, res) => {
  res.render(template, viewData)
})


server.get('/artwork/:id', (req, res) => {
  const id = req.params.id
  const item = art.find((el) => el.id == id)
  res.render("artwork", item)
})