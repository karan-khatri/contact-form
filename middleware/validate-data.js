import BadRequestError from '../errors/BadRequestError.js';

const validate = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name.trim() || !email.trim() || !message.trim()) {
    throw new BadRequestError('Please enter all the fields!');
  }

  next();
};

export default validate;
