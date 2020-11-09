
const {Router} = require('express')
const config = require('config')
const User = require('../models/Models.Users')
const ProgramUser = require('../models/Models.ProgramsUser')
const AnalyzeUser = require('../models/Models.AnalyzeUser')
const Chats = require('../models/Models.Chats')
const Coach = require('../models/Models.Coach')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.get('/userdata', auth, async (req, res) => {
  try {
    let startedUserData = {}
    console.log(req.user.userId)
    const user = await User.findOne({_id: req.user.userId})
    
    if(user.Avatar === null || user.Avatar === undefined){
      
      user.Avatar = `${config.get('baseUrl').toString()}/api/users/avatars/default.jpg`
      
    }
    // Принимать с Бд со свех таблиц, все данные о юзере. 
    //Сначала сделать В монго чтобы были все таблицы и связать их
     
    if(user){
       const userProgram = await ProgramUser.findOne({ User: req.user.userId }) 
       const userAnalyze = await AnalyzeUser.findOne({ User: req.user.userId })
       const userChats = await Chats.findOne({ User: req.user.userId })
       const userCoach = await Coach.findOne({ User: req.user.userId })
      startedUserData = {
       user,
       userProgram,
       userAnalyze,
       userChats,
       userCoach
      }
      res.json(startedUserData)
    }
    else{
    res.json({message:'Что-то пошло не так, gjkmpsdfntkm yt ceotcndetn'})
    }
    
  
  } catch (e) {
      res.status(500).json(  e.message 
        //{ message: 'Что-то пошло не так, попробуйте снова'}
    )
  }
})


module.exports = router


