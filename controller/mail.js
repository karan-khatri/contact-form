import transporter from '../model/nodemailer.js';
import CustomAPIError from '../errors/CustomAPIError.js';

const sendMail = (req, res) => {
  const { name, email, message } = req.body;

  var mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECEIVER, //Receiver Email Address
    subject: 'Portfolio Contact Form', //Subject of the Email
    html: `<p>${message}</p>`, //Email content
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new CustomAPIError('An Error occured');
    } else {
      res.status(200).json({ success: 'true', msg: "Thank you for contacting me! I'll get in touch with you shortly." });
    }
  });
};

export { sendMail };
