const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model')

router.get("/", (req, res) => {
    Celebrity
        .find()
        .then(celebrities => res.render('celebrities/celebrities', { celebrities }))
        .catch(err => console.log(err))
})

router.get('/crear', (req, res) => {
    res.render('celebrities/new-celebrity')

})

router.post('/crear', (req, res) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity

        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebridades'))
        .catch(err => console.log(err))


})



module.exports = router;