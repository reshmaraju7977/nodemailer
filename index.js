const { text } = require('express')
const nodemailer = require('nodemailer')

let transportmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'reshmaraju7977@gmail.com',
        pass: 'dtvpmxknpmrdibth'
    }
})

let mailContent = {
    from:"reshmaraju7977@gmail.com",
    to: "ashin209@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?"
}

transportmail.sendMail(mailContent,function(err,val){
    if(err){
        console.log(err)
    }else{
        console.log(val.response,"sent Mail...")
    }
})