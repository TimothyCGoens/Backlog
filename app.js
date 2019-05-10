const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('sequelize')
const session = require('express-session')
const bcrypt = require('bcrypt')
const models = require('./models')

app.use(session( {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('hola')
})

app.post('/add-user', (req,res) => {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let location = req.body.location 
    let platform = req.body.platform 
    let genre = req.body.genre 
    let aboutme = req.body.aboutMe


    bcrypt.hash(password, 10, function(error, hash) {
        let user = {
            username: username,
            email: email,
            password: hash,
            location: location,
            platform: platform,
            genre: genre,
            aboutme: aboutme
        }
    })
})


// app.get('/search', (req,res) => {
//     let url = `http://www.giantbomb.com/api/search/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2&format=json&query="${this.state.title}"&resources=game`

//     fetch(url).then(function(response) {
//         console.log(response.json())
//         return response.json()
//     }).then(function(json) {
//         res.send(json)
//         })
// })

// app.post('/add-search', (req,res) => {
//     console.log('body',req.body)
// })
app.listen(8080, () => {
    console.log('server is a go!')
})