
const {Schema, model, Types} = require('mongoose')

const AnalyzeUsers = new Schema({
    _id_analyzeUser: { type: [String], index: true },
    Training_day: [{
        Program_name: String,
        exercises: [{
            _id: String,
            Exercise_name: String,
            Sets:[{
                _id: String,
                reps:Number,
                Projectile_weight: Number
            }]
        }],
        date: Date,
        Sleep_quality: Number,
        Eat_quality: Number,
        comment: String,
        Coachreaded: Boolean
    }],
    User:{type: Types.ObjectId, ref: 'User'}

})

const AnalyzeUser = model('AnalyzeUser', AnalyzeUsers)

module.exports = AnalyzeUser