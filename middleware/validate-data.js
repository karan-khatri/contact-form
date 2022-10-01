import BadRequestError from '../errors/BadRequestError.js';

const validate = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name.trim() || !email.trim() || !message.trim()) {
    throw new BadRequestError('Please enter all the fields!');
  }
  if (name.length <= 2) {
    throw new BadRequestError('Name must be more than 2 characters!');
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    throw new BadRequestError('Please provide a valid Email address!');
  }

  next();
};

export default validate;
