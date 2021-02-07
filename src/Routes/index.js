const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const { flexRadioDefault1, flexRadioDefault2, flexRadioDefault3, input_13, zipCode, firstName, lastName, phone, email, company, flexRadioDefault4} = req.body;
    console.log(req.body);

    contentHTML = `
    
        <h1>User Information</h1>

        <ul>
            <li>What is Your Gross Monthly Sales?: ${flexRadioDefault1}</li>
            <li>How Long Have You Been in Business?: ${flexRadioDefault2}</li>
            <li>What is Your Credit Score?: ${flexRadioDefault3}</li>
            <li>User email ${input_13}</li>
            <li>Zip Code ${zipCode}</li>
            <li>First Name ${firstName}</li>
            <li>Last Name ${lastName}</li>
            <li>Phone ${phone}</li>
            <li>Email ${email}</li>
            <li>Company Name ${company}</li>
            <li>Do you want to establish business credit?  ${flexRadioDefault4}</li>
        </ul>
            
       
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'jesusmcc94@gmail.com',
            pass: 'ggwdarxtzreixjre'
        }

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