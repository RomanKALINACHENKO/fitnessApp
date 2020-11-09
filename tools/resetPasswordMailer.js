const nodemailer = require("nodemailer")
const config = require('config')

 const sendMailMessage = (candidateEmail = null, candidateUrl= '#') => {
     if(candidateUrl === '#' || candidateUrl===''){
         console.log(`CandidateUrl =  ${candidateUrl}`)
         return
     }
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.get('mailerName'), 
            pass: config.get('mailerPassword')            
        }
    })

    let mailOptions ={
        from: config.get('mailerName'),
        to: `${candidateEmail}`,
        subject: 'Подтверждение смены пароля',
        html: `
        <html>
        <head>
        <meta charset="utf-8">
        <style type="text/css">
            .main{
                height: 100vh;
                width: 100%;
                background-color: black;
            }
            .text{
                color: white;
            }
            .topImg{
                width:100%;
                margin: 5px;
                height: 300px;
            }
            .text-center{
                margin:0 auto;
            }
            .button-link{   
                color: white;
                font-size: 20px;
                background-color: red;
                height:100px;
                width:200px;
            }
        </style>
        </head>
        <body>
        <div class="main">
        <img class="topImg" src="https://nodemailer.com/nm_logo_200x136.png">
        <h1 class="text">Доброго времени суток. ${candidateEmail}</h1>
        <h2 class="text">На вашем аккаунте в <strong>FitnessDiary</strong> хотят сменить пароль!</h2>
        <h2>Если вы этого не делали то проигнорируйте это сообщение</h2>
        <p class="text-center text">------</p>
        <h1 class="text">Перейдите по ссылке если хотите сменить пароль...</h1>
            <div class="button-link"><a  href="${candidateUrl}">Перейти</a></div>    
        
            
        </div >
        </body>
        </html>
        `
    }

    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            console.log('err occurs')
        } else {
            console.log('mail sent!')
        }
    })
}

module.exports = sendMailMessage

sendMailMessage('rkalinachenko@gmail.com','')

