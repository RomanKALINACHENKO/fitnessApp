const {Schema, model, Types} = require('mongoose')

const Coachs = new Schema({
    _id_Coach: { type: [String], index: true },
    Clients:[{ id_client:String,
               alias: String
            }],
    CoachMission: String,
    AboutCoach: String,
    PhoneNumber: String,
    WorkExperiance: String,
    CoachPrograms:[{
        _id: String,
        Program_name: String,
        Type_training: String,
        Intensity: String,
        exercises: [{
            _id: String,
            Exercise_name: String,
            Sets:[{
                _id: String,
                reps:Number,
                Projectile_weight: Number,
                Lead_time: String,
                Rest_time: String
            }]
        }]
    }],
    User:{type: Types.ObjectId, ref: 'User'}
}
 
)

const Coach = model('Coach', Coachs)
module.exports = Coach