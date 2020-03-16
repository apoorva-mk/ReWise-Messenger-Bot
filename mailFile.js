nodemailer = require('nodemailer');
require('dotenv').config();

function sendAttachments(recipient_email) {
    myEmail = "rewise_bot.com";
    let transport = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        secure: false,
        service: 'yahoo',
        auth: {
            user: myEmail,
            pass: process.env.PASS
        },
        debug: false,
        logger: true
    });

    let message= {
        from: myEmail, 
        to: recipient_email,
        subject: "Mail from ReWise",
        text: "Hey, please find attached your quiz generated with answer keys",
        attachements: [
            {
                path: "./Questions.pdf"
            },
            {
                path: "./Answers.pdf"
            }
        ]
    }

    transport.sendMail(message, function(err){
        if(err){
            console.log(err);
            console.log("Failed to send email.\n");
            return;
        }
        else{
            console.log("Attachments successfully sent!");
        }
    });
}


module.exports.sendAttachments = sendAttachments;
