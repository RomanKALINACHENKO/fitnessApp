const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StandardPrograms = new Schema({
    Program_name: {type: String},
    Type_training: {type: String},
    Intensity: {type: String},
    Program_goal: {type: String},
    Author:{type: String},
    AuthorUsername: {type: String},
    Program_logo:{type: String},
    //abautProgram:{type: String},
    cycle: [
     [{
        Exercise_name: {type: String},
        Images:[ {type: String}],
        Sets:[{
            reps:Number,
            Projectile_weight: Number,
            Lead_time: {type: String},
            Rest_time:{type: String}
        }]
    }]
    ]
})

const StandardProgram = mongoose.model('StandardProgram', StandardPrograms)
module.exports = StandardProgram