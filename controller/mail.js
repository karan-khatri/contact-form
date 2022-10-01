import transporter from '../model/nodemailer.js';
import CustomAPIError from '../errors/CustomAPIError.js';

const sendMail = (req, res) => {
  const { name, email, message } = req.body;

  var mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'khatrikamlesh23@gmail.com',
    subject: 'Portfolio Contact Form',
    html: `<p>${message}</p>`,
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
