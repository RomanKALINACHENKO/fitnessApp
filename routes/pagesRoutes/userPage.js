
const {Router} = require('express')
const path = require('path')
const auth = require('../../middleware/auth.middleware')
const router = Router()
const User = require('../../models/Models.Users')
const multer = require('multer')

 

const storage = multer.diskStorage({
  destination: function(req,file,next){
    next(null,'./routes/userAvatars/')
  },
  filename: function (req, file, next) {
    
    console.log(`req headers start`)
    console.log(req.headers)
    console.log(`req headers finish`)
    console.log(`file obj`)
    console.log(file)
    console.log(`req entries start`)
    console.log( Object.keys(req) )
    console.log(`req entries finish`)
   // console.log(` res image name =  ${req.body._id}${path.extname(file.originalname)} `)
    next(null, `avatar-${req.headers._id}${path.extname(file.originalname)}` )
  }
})
function checkFileType(file, next){
  const filetypes = /jpeg|jpg|png|gif/
  
  const extname = filetypes.test(
    path.extname(file.originalname).toLowerCase())

  const mimetype = filetypes.test(file.mimetype)

  if(mimetype && extname){
    console.log(`function checkFileType() TRUE`)
    return next(null, true)
  }else{
    next('Error: Images Only!')
  }
}

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
   fileFilter: function(req, file, next){
     checkFileType(file, next)
   }
})


router.post('/editUser', upload.single('Avatar'), auth, async (req, res) => {

  try {
   // upload.single('Avatar')
    // (req, res, (err)=>{
    //   if(err){
    //     res.json({
    //       message: err
    //     })
    //   }
    //   else{
    //     res.json({
    //       message: 'Неизвестная ошибка!'
    //     })
    //   }

    // })
    const avatar = req.file || false
    const userData = req.body
    const oldAvatar= userData.UserAvatar
    const validateData= {
      'Email':userData.Email,
       'Username':userData.Username,
        'Height':userData.Height,
        'Weight':userData.Weight,
        'Gender':userData.Gender,
        'SleepQuality':userData.SleepQuality,
        'PhysicalForm':userData.PhysicalForm,
        'Training_experience':userData.Training_experience,
        'FoodQuality':userData.FoodQuality,
        'Workload':userData.Workload}
        
        console.log(`validateData.Avatar`)
        console.log(validateData.Avatar)
    
    console.log(avatar)
    const user =await User.findById(userData._id,(err)=>{
      if(err){res.json({message:'Юзер не найден'})}
    })

    for (let key in validateData){
      user[key] = validateData[key]
    }
    if(avatar){
      user.Avatar = `avatar-${req.body._id}${path.extname(avatar.originalname)}` ? 
    `avatar-${req.body._id}${path.extname(avatar.originalname)}` :  oldAvatar
    }
    
    await user.save()
    
     res.json({hi:"Обновлено!!!"})

     
    
     
    
    // Принимать с Бд со свех таблиц, все данные о юзере. 
    //Сначала сделать В монго чтобы были все таблицы и связать их 
    
  } catch (e) {
      res.status(500).json(   
        { message: 'Что-то пошло не так, попробуйте снова',
        err:e.message}
    )
  }

})


module.exports = router


