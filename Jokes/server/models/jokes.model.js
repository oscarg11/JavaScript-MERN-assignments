const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [3, "Setup must be at least 4 characters"],
        maxlength: [255, "Setup must be less than 255 charcters"]
    },
    punchline: {
        type: String,
        minlength: [3, "Punchline must be at least 4 characters"],
        maxlength: [255, "Punchline must be less than 255 charcters"]
    },
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;
