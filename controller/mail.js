import transporter from '../model/nodemailer.js';
import CustomAPIError from '../errors/CustomAPIError.js';

const sendMail = (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECEIVER, //Receiver Email Address
    subject: 'Portfolio Contact Form', //Subject of the Email
    html: `<h3>Name: ${name}</h3> <h3>Email: ${email}</h3> <p style="font-weight:bold">Message: <span style="font-weight:normal">${message}</span></p>`, //Email content
  };
  console.log(name, email, message);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new CustomAPIError('An Error occured');
    } else {
      res.status(200).json({ success: 'true', msg: "Thank you for contacting me! I'll get in touch with you shortly." });
    }
  });
};

export { sendMail };
