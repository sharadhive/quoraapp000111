const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionName: {
        type: String,
        required: true, // Added validation for "questionName" field
    },
    questionUrl: {
        type: String,
        required: true, // Added validation for "questionUrl" field
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    answers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer', // Updated reference to "Answer" model
    },
    user: Object, // Consider referencing the user's ID instead
});

module.exports = mongoose.model('Question', QuestionSchema); // Singular model name
