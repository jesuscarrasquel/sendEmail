const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    contentHTML = `
    
        <h1>User Information</h1>

        <ul>
            <li>Username: ${name}</li>
            <li>User email ${email}</li>
        </ul>
            
        <p>User message ${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'jesusmcc94@gmail.com',
            pass: 'ggwdarxtzreixjre'
        }
        // ,
        // tls: {
        //     rejectUnauthorized: false
        // }
    })

    transporter.verify( () => {
        console.log('Ready for sen emails');
    })

    const info = await transporter.sendMail({
        from: 'forgot pass <jesusmcc94@gmail.com>',
        to:'jesusmcc1106@gmail.com',
        subject: 'fasdfasd',
        html: contentHTML
    });

    console.log('message sent', info.messageId)
    // console.log(contentHTML);
    res.redirect('/success.html');
});


module.exports = router;