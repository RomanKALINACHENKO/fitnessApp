const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')




const app = express()



app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/users', require('./routes/userData.routes'))
app.use('/api/userPage', require('./routes/pagesRoutes/userPage'))
//app.use('/api/userTrainingCollection', require('./routes/userTrainingCollection.routes'))
app.use('/api/users/avatars',express.static(path.join(__dirname, 'routes', 'userAvatars')))


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

