const {Schema, model, Types} = require('mongoose')


const ProgramsUsers = new Schema({
    myPrograms:[{
        Program_name: {type: String, required: true},
        Type_training: {type: String, required: true},
        Program_logo: {type: String, default:null},
        Intensity: {type: String, required: true},
        cycle:[{ exercises: [{
                Images:[ String],
                Exercise_name: {type: String},
                Sets:[{
                    reps:{type:Number},
                    Projectile_weight: {type:Number},
                    Lead_time: String,
                    Rest_time: String
                }]
            }]
        
        }]
    }],
    addedPrograms:[{
        Program_name: {type: String, required: true},
        Type_training: {type: String, required: true},
        Program_logo: {type: String, default:null},
        Intensity: {type: String, required: true},
        cycle:[{ exercises: [{
                Images:[ String],
                Exercise_name: {type: String},
                Sets:[{
                    reps:{type:Number},
                    Projectile_weight: {type:Number},
                    Lead_time: String,
                    Rest_time: String
                }]
            }]
        
        }]
    }],
    User:{type: Types.ObjectId, ref: 'User'}
})
//29:44 user table.  2:07:35 link table  Vladilen MERN-stack

const ProgramUser = model('ProgramsUser', ProgramsUsers)
module.exports = ProgramUser