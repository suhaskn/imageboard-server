const {Router} = require('express')

const Image = require('./model');

const router = new Router()


router.get('/image', (req, res, next) =>
  Image.findAll()
    .then(data => res.send(data))
    .catch(next)
);

router.post('/image', (req, res, next) =>
  Image.create(req.body)
    .then(data => res.send(data))
    .catch(next)
);


module.exports = router;