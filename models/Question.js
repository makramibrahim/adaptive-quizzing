const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  topic: {type: String, required: true },
  subTopics: [String],
  questionText: {type: String, required: true },
  answerChoices: [String],
  answerIndex: {type: Number, required: true },
  questionType: {type: String, enum: ['adaptive', 'mc']},
  userID: {type: Number, required: true },
});



module.exports = mongoose.model('Question', QuestionSchema);