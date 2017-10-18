
const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    player: { type: String, required: true, maxlength: 45, minlength: 3 },
    position: { type: String, required: true, maxlength: 45, minlength: 3 },
    status: { type: String, default: "Undecided" }
}, { timestamps: true });

const Team = mongoose.model('Team', TeamSchema);