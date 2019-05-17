const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const models = require('./models')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('hola')
})

function authenticate(req,res, next) {

    let headers = req.headers["authorization"]
    let token = headers.split(' ')[1]

    jwt.verify(token, 'secret',(err, decoded) => {
        if(decoded) {
            if(decoded.username) {
                next()
            } else {
                res.status(401).json({message: 'Token invalid'})
            }
        } else {
            res.status(401).json({message: 'Token invalid'})
        }
    })
}

app.get('/profile', (req, res) => {
    res.json(userId)
})

app.post('/register', (req,res) => {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let location = req.body.location 
    let platform = req.body.platform 
    let genre = req.body.genre 
    let aboutme = req.body.aboutme


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
        models.Users.create(user).then(user => {
            console.log(user)
        })
    })
})

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    models.Users.findOne({
        where: {
            username: username,
            // password: password
        }
    })
    .then((user) => {
        if(user) {
            jwt.sign({username: username}, 'secret', function(err, token) {
                if (token) {
                    res.json({token: token, id: user.dataValues.id})
                }else {
                    res.status(500).json({message: 'unable to generate token'})
                }
            })
        }

    })
})

app.post('/backlog', (req,res) => {
    console.log(req.body)
    
    models.Users.findOne({
        where: {
            id: req.body.userId
        }
    }).then(user => {
        console.log(user)
        models.Logs.create({
            name: req.body.name,
            deck: req.body.deck,
            publishers: req.body.publishers,
            developers: req.body.developers,
            genre: req.body.genres,
            image: req.body.image,
            userId: req.body.userId
        }).then(result => {
            console.log(result)
            res.json(result)
        })
    }) 
    
})


app.get('/profile/:userId', async (req, res) => {
    let userId = req.params.userId
    let user = await models.Users.findOne({
        where: {
            id: userId
        }
    }).then(user => {
        res.json(user)
    })
})

app.get('/backlog/:userId', async (req, res) => {
    let userId = req.params.userId
    let log = await models.Logs.findAll({
        where: {
            userId: userId
        }
    }).then(log => {
        res.json(log)
    })
})

app.post('/update-completed', async (req, res) => {
let c
})

app.listen(8080, () => {
    console.log('server is a go!')
})


// app.get('/games', (req,res) => {
//     res.json(games)
// })





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

