const {Router} = require('express')

/////////////////////////////////////////////////////////////////////
const User = require('../models/Models.Users')
const ProgramUser = require('../models/Models.ProgramsUser')
const AnalyzeUser = require('../models/Models.AnalyzeUser')
const Chats = require('../models/Models.Chats')
const Coach = require('../models/Models.Coach')
/////////////////////////////////////////////////////////////////////
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const { has } = require('config')

const router = Router()



// /api/auth/registration
router.post(
  '/registration',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
      .isLength({ min: 6 }),
    check('username', 'Некорректный UserName').isLength({min: 3})
       
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'
      })
    }

    const {email, password, username} = req.body
    
    const candidate = await User.findOne({ Email:email })
    

    if (candidate) {
      return res.status(400).json({ message: 'Такой пользователь уже существует' })
    }
    

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({ Email: email, Password: hashedPassword, Username: username })

    await user.save()
    const userID = user._id
    const userProgram = new ProgramUser({ User: userID})
    const userAnalyze = new AnalyzeUser({ User: userID})
    const userChats = new Chats({ User: userID})
    const userCoach = new Coach({ User: userID})
    await userProgram.save()
    await userAnalyze.save()
    await userChats.save()
    await userCoach.save()

    res.status(201).json({ message: 'Пользователь создан' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
  }
})

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при входе в систему'
      })
    }
    
    let {email, password} = req.body
    password= password.trimRight()
    
    const user = await User.findOne({ Email: email })
    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' })
    }

    const isMatch = await bcrypt.compare(password, user.Password)
    
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
    }

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '1000h' }
    )
    

    res.status(201).json({ token, userId: user.id })
  } catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    
  }
})

// /api/auth/forgotpassword

router.post(
  '/forgotpassword',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail()   
  ],
  async (req, res) => {
  try {
    
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные для отправки'
      })
    }
    
    const {email} = req.body
    
    const user = await User.findOne({ Email: email })
    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' })
    }
      let data =`${user.Password}${email}` 
    
    let  hashedData = await bcrypt.hash(data, 4)
    const regex = /\//gm;
    let regHashedData = hashedData.replace(regex,'-')

    const candidateUrl = `${config.get('clientUrl')}/resetpassword/${regHashedData}`.trimRight() 

    const sendMailMessage = require('../tools/resetPasswordMailer')
   
    
   await sendMailMessage(email, candidateUrl)
      
    res.status(201).json({ message: `Сообщение отправлено!` })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова',e })
  }
}) 

// /api/auth/isresetpassword
let localEmail =''

router.post(
  '/isresetpassword', async (req, res) => {
  try {
    
    const regHashedData = req.body.hash
    const email = req.body.email

    const regex = /-/gm
    let urlHash = regHashedData.replace(regex,'/')

    

    const user = await User.findOne({ Email: email })
    if (!user) {
      return res.status(400).json({ message: 'Проверка данных!' })
    }
    const data = `${user.Password}${email}`

    const isMatch = await bcrypt.compare(data, urlHash)
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверные данные!' })
    }
  
    localEmail = email
    

    res.status(201).json({ message: `Good.` })
    
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// /api/auth/resetpassword

router.post(
  '/resetpassword', async (req, res) => {
  try {
    const email = localEmail
    const password = req.body.password 

    const user = await User.findOne({ Email: email })
    if (!user) {
      return res.status(400).json({ message: 'Пользывателя с такой почтой не существует!' })
    }

    let hashedPassword = await bcrypt.hash(password, 12)
   
     user.Password = hashedPassword
    await user.save()

        res.status(201).json({ message: 'Пароль обновлен!' })

    
    
     // сделать отправку письма с паролем , неправильно работает смена пароля
       
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})




module.exports = router
