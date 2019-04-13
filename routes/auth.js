const router = require('express').Router()
const User = require('../models/User')
const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy;
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    return res.json({ message: 'Unauthorized, please login first' })
}

router.post('/signup', (req, res, next) => {
    const user = new User(req.body);
    User.register(user, req.body.password)
    .then(user => {
        console.log(req.body);
        res.send(user);
    })
    .catch(err => {
        console.log(req.body);
        res.status(500).json(err)
    })
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return res.json(err) }
        if (!user) { return res.json(info) }
        req.logIn(user, (error) => {
            if (error) return res.json(error)
            return res.send(req.user)
        })
    })(req, res, next)
})

router.get('/logout', isAuth, (req, res, next) => {

    req.logOut()

    req.session.destroy(err => {
        if (!err) {
            res.status(200).clearCookie('connect.sid').json({ message: 'Logout succesful' })
        }
        res.json(err)
    })
})

router.get('/loggedUser', isAuth, (req, res, next) => {
    res.json(req.user)
})

module.exports = router
