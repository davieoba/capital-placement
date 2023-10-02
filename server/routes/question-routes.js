const router = require('express').Router()
const questionController = require('../controllers/question-controller')

router.get('/', questionController.getQuestions)
router.post('/', questionController.createQuestion)

router.get('/:id', questionController.getAQuestion)
router.patch('/:id', questionController.editQuestion)
router.delete('/:id', questionController.deleteQuestion)

module.exports = router