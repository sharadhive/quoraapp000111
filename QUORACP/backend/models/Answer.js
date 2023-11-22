const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true, // Added validation for the "answer" field
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question', // Updated reference to "Question" model
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: Object, // Consider referencing the user's ID instead
});

module.exports = mongoose.model('Answers', AnswerSchema); // Singular model name
