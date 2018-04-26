const mongoose = require('mongoose');
const { Schema } = mongoose;
const name = 'internNotif';

const internNotifSchema = new Schema({
    ownerId: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, default: '' },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    followers: { type: [Schema.Types.ObjectId], default: [] }
});

module.exports = mongoose.model(name, internNotifSchema);