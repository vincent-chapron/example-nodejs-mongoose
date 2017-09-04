const {Router} = require('express')

const {User} = require('./model/user')

const router = Router()

router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(`${__dirname}/public/index.html`)
})

router.get('/users', function(req, res) {
    User.find({}, function (error, users) {
        res.json({error, users})
    })
})

router.post('/users', function(req, res) {
    console.log('HERE', req.body)
    let user = new User(req.body)
    user.save(function(err) {
        res.json({err, user})
    })
})

router.delete('/users/:id', function(req, res) {
    User.remove({_id: req.params.id}, function(err, data) {
        res.json({err, data})
    })
})

module.exports = router
