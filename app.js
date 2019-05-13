const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const models = require('./models')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('hola')
})

app.post('/register', (req,res) => {
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
            password: password
        }
    })
})

app.get('/profile',(req,res) => {
    res.json(users)

})

app.listen(8080, () => {
    console.log('server is a go!')
})

// let games = [
//     {   
//         id: 1,
//         name: 'Spider-Man',
//         image: 'https://tshop.r10s.com/7dd/e09/d093/04fc/50d3/c112/ebe2/113be8ad552c600c737499.jpg',
//         dev: 'Insomniac Games',
//         pub: 'Sony Interactive Entertainment',
//         genre: 'Action',
//         deck: 'Swing around a beautiful New York in the all new adventure for your favorite friendly neighboorhood web-crawler.',
//         platforms: 'Playstation 4',
//         videos: 'https://www.giantbomb.com/shows/quick-look-marvels-spider-man/2970-11251',
//         giantbomb: 'https://www.giantbomb.com/marvels-spider-man/3030-54233/'
//     },
//     {   
//         id: 2,
//         name: 'God of War',
//         image: 'https://i.redd.it/6yquel5ks7k01.jpg',
//         dev: 'Santa Monica Studio   ',
//         pub: 'Sony Interactive Entertainment',
//         genre: 'Action',
//         deck: 'Kratos is back in an all-new adventure like nothing you have ever seen before.',
//         platforms: 'Playstation 4',
//         videos: 'https://www.giantbomb.com/shows/quick-look-god-of-war/2970-11477',
//         giantbomb: 'https://www.giantbomb.com/god-of-war/3030-54229/'
//     },
//     {
//         id: 3,
//         name: 'Call of Duty: Black Ops IV',
//         image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Call_of_Duty_Black_Ops_4_official_box_art.jpg/220px-Call_of_Duty_Black_Ops_4_official_box_art.jpg',
//         dev: 'Treyarch',
//         pub: 'Activision',
//         genre: 'Action',
//         deck: 'Black Ops is back in this rocking and rolling shooter with an all new mode - Blackout.',
//         platforms: 'PS4',   
//         videos: 'https://www.giantbomb.com/shows/quick-look-call-of-duty-black-ops-4/2970-11180',
//         giantbomb: 'https://www.giantbomb.com/call-of-duty-black-ops-4/3030-66897/'
//     },
//     {
//         id: 4,
//         name: 'Super Smash Bros Ultimate',
//         image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg',
//         dev: 'Bandai Namco Studios',
//         pub: 'Nintendo',
//         genre: 'Fighting',
//         deck: 'As the name implies, this is the ultimate Super Smash Bros game!  Everyone who has ever fought is back in this one to fight again.',
//         platforms: 'Nintendo Switch',   
//         videos: 'https://www.giantbomb.com/super-smash-bros-ultimate/3030-66900/',
//         giantbomb: 'https://www.giantbomb.com/shows/super-smash-bros-ultimate/2970-18622'
//     }
// ]


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

