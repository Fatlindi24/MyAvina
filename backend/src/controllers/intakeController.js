const { PrismaClient } = require('@prisma/client');
const { encrypt, decrypt } = require('../utils/encryption');

const prisma = new PrismaClient();

async function getIntakeForm(req, res) {
  try {
    const quiz = await prisma.quiz.findFirst({
      include: {
        questions: {
          orderBy: { order: 'asc' }
        }
      }
    });

    if (!quiz) {
      return res.status(404).json({ message: 'No intake quiz found' });
    }

    res.json({
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      questions: quiz.questions.map((q) => ({
        id: q.id,
        text: q.text,
        type: q.type,
        options: q.options,
        order: q.order,
      })),
    });
  } catch (err) {
    console.error('getIntakeForm error:', err);
    res.status(500).json({ message: 'Failed to load intake form' });
  }
}

async function submitIntakeForm(req, res) {
  const userId = req.session.userId;
  const { answers, treatable } = req.body;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!answers || typeof treatable !== 'boolean') {
    return res.status(400).json({ message: 'Missing required data' });
  }

  try {
    const encryptedAnswers = encrypt(JSON.stringify(answers));

    const existingIntake = await prisma.intake.findUnique({ where: { userId } });

    if (existingIntake) {
      await prisma.intake.update({
        where: { userId },
        data: {
          answers: encryptedAnswers,
          treatable,
        }
      });
    } else {
      await prisma.intake.create({
        data: {
          userId,
          answers: encryptedAnswers,
          treatable,
        }
      });
    }

    await prisma.user.update({
      where: { id: userId },
      data: { status: 'intake_completed' }
    });

    res.status(200).json({ message: 'Intake form submitted successfully' });
  } catch (err) {
    console.error('submitIntakeForm error:', err);
    res.status(500).json({ message: 'Failed to submit intake form' });
  }
}


async function createQuizWithQuestions(req, res) {
  try {
    const { title, description, questions, isActive } = req.body;

    if (!title || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ message: 'Missing quiz title or questions' });
    }

    // If this quiz is to be active, deactivate others
    if (isActive) {
      await prisma.quiz.updateMany({
        data: { isActive: false }
      });
    }

    const quiz = await prisma.quiz.create({
      data: {
        title,
        description,
        isActive: !!isActive,
        questions: {
          create: questions.map((q, index) => ({
            text: q.text,
            type: q.type,
            order: index + 1,
            options: Array.isArray(q.options) ? q.options : [],
          })),
        },
      },
    });

    res.status(201).json({ message: 'Quiz created', quizId: quiz.id });
  } catch (err) {
    console.error('Create Quiz error:', err);
    res.status(500).json({ message: 'Failed to create quiz' });
  }
}



async function editQuizWithQuestions(req, res) {
  const { quizId } = req.params;
  const { title, description, questions } = req.body;

  if (!quizId || !title || !Array.isArray(questions)) {
    return res.status(400).json({ message: 'Missing quizId, title, or questions' });
  }

  try {
    // Delete existing questions
    await prisma.question.deleteMany({ where: { quizId: parseInt(quizId) } });

    // Update quiz title/description
    await prisma.quiz.update({
      where: { id: parseInt(quizId) },
      data: {
        title,
        description,
        questions: {
          create: questions.map((q, index) => ({
            text: q.text,
            type: q.type,
            order: index + 1,
            options: q.options || [],
          })),
        },
      },
    });

    res.status(200).json({ message: 'Quiz updated successfully' });
  } catch (err) {
    console.error('editQuizWithQuestions error:', err);
    res.status(500).json({ message: 'Failed to update quiz' });
  }
}

async function getAllQuizzes(req, res) {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: {
        questions: {
          orderBy: { order: 'asc' }
        }
      }
    });

    res.json(quizzes);
  } catch (err) {
    console.error('getAllQuizzes error:', err);
    res.status(500).json({ message: 'Failed to fetch quizzes' });
  }
}



// Get a specific quiz by ID with questions
async function  getQuizById (req, res)  {
  const quizId = parseInt(req.params.id);

  if (isNaN(quizId)) {
    return res.status(400).json({ error: 'Invalid quiz ID' });
  }

  try {
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        questions: true
      }
    });

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



async function deleteQuizById(req, res) {
  const quizId = parseInt(req.params.id);

  if (isNaN(quizId)) {
    return res.status(400).json({ error: 'Invalid quiz ID' });
  }

  try {
    // First, delete the related questions
    await prisma.question.deleteMany({
      where: { quizId }
    });

    // Then, delete the quiz itself
    await prisma.quiz.delete({
      where: { id: quizId }
    });

    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    console.error('Error deleting quiz:', error);
    res.status(500).json({ error: 'Failed to delete quiz' });
  }
}





async function submitQuizAnswers(req, res) {
  const userId = req.session.userId;
  const { quizId, answers } = req.body;

  if (!userId || !quizId || !answers) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const encryptedAnswers = encrypt(JSON.stringify(answers));

    const submission = await prisma.quizSubmission.create({
      data: {
        userId,
        quizId,
        encryptedAnswers,
      },
    });

    res.status(201).json({ message: 'Quiz submitted', submissionId: submission.id });
  } catch (err) {
    console.error('submitQuizAnswers error:', err);
    res.status(500).json({ message: 'Failed to submit quiz answers' });
  }
}


async function getQuizSubmissionByUser(req, res) {
  const userId = req.session.userId;
  const { quizId } = req.params;

  if (!userId || !quizId) {
    return res.status(400).json({ error: 'Missing user or quiz ID' });
  }

  try {
    const submission = await prisma.quizSubmission.findFirst({
      where: { userId: parseInt(userId), quizId: parseInt(quizId) }
    });

    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    const decryptedAnswers = JSON.parse(decrypt(submission.encryptedAnswers));

    res.json({
      ...submission,
      decryptedAnswers
    });
  } catch (err) {
    console.error('getQuizSubmissionByUser error:', err);
    res.status(500).json({ error: 'Failed to fetch submission' });
  }
}

async function getIntakeByUser(req, res) {
  const userId = req.session.userId;

  try {
    const intake = await prisma.intake.findUnique({ where: { userId } });

    if (!intake) {
      return res.status(404).json({ error: 'No intake form found' });
    }

    const decryptedAnswers = JSON.parse(decrypt(intake.answers));

    res.json({
      ...intake,
      decryptedAnswers,
    });
  } catch (err) {
    console.error('getIntakeByUser error:', err);
    res.status(500).json({ error: 'Failed to fetch intake form' });
  }
}


module.exports = {
  getIntakeForm,
  submitIntakeForm,
  createQuizWithQuestions,
  editQuizWithQuestions,
  getAllQuizzes,
  getQuizById,
  deleteQuizById,
  submitQuizAnswers,
  getQuizSubmissionByUser,
  getIntakeByUser,
};
