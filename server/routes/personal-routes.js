const router = require('express').Router()
const questionController = require('../controllers/personal-controller')

router.get('/', questionController.getPersonal)
router.post('/', questionController.createPersonal)

router.get('/:id', questionController.getAPersonal)
router.patch('/:id', questionController.editPersonal)
router.delete('/:id', questionController.deletePersonal)

module.exports = router