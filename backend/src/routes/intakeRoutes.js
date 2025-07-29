// routes/intakeRoutes.js

const express = require('express');
const router = express.Router();
const intakeController = require('../controllers/intakeController');
const requireSuperadmin = require('../middleware/requireSuperadmin'); // <-- import middleware

// ✅ User routes
router.get('/intake-form', intakeController.getIntakeForm);
router.post('/intake-form', intakeController.submitIntakeForm);

// ✅ Admin routes (consistent base path)
// router.get('/intake-form/admin/quizzes/:id', intakeController.getQuizById);
// router.post('/intake-form/admin/create', intakeController.createQuizWithQuestions);
// router.put('/intake-form/admin/edit/:quizId', intakeController.editQuizWithQuestions);
// router.get('/intake-form/admin/quizzes', intakeController.getAllQuizzes);

router.post('/quizzes/:quizId/submit', intakeController.submitQuizAnswers);
router.get('/quizzes/:quizId/submission', intakeController.getQuizSubmissionByUser);
router.get('/intake/user', intakeController.getIntakeByUser);


router.delete('/intake-form/admin/quizzes/:id', intakeController.deleteQuizById);




// ✅ Admin routes (protected with superadmin)
router.get('/intake-form/admin/quizzes/:id', requireSuperadmin, intakeController.getQuizById);
router.post('/intake-form/admin/create', requireSuperadmin, intakeController.createQuizWithQuestions);
router.put('/intake-form/admin/edit/:quizId', requireSuperadmin, intakeController.editQuizWithQuestions);
router.get('/intake-form/admin/quizzes', requireSuperadmin, intakeController.getAllQuizzes);
router.delete('/intake-form/admin/quizzes/:id', requireSuperadmin, intakeController.deleteQuizById);

module.exports = router;




