const {Schema, model, Types} = require('mongoose')

const Users = new Schema({
    Email: {type: String, required: true, unique: true}, //ready
    Username:{type: String, required: true }, //ready
    Password: {type: String, required: true},
    Avatar: {type: String, default:null},// link to file on HDD?server? file system //ready
    Height: {type:Number, default:null},
    Weight:{type:Number, default:null},
    Gender: {type: String, default:null},
    SleepQuality: {type: String, default:null},
    Workload: {type: String, default:null},
    Training_experience: {type: String, default:null},
    FoodQuality: {type: String, default:null},
    PhysicalForm: {type: String, default:null},
    Coachs:[{type: String}], //ready
    ProgramsUser:{type: Types.ObjectId, ref: 'ProgramsUser'},
    AnalyzeUser:{type: Types.ObjectId, ref: 'AnalyzeUser'},
    Chats:{type: Types.ObjectId, ref: 'Chat'},
    
},{
    
})

module.exports = model('User', Users)

