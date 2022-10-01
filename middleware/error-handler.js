const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(err.statusCode).json({ success: 'false', msg: err.message });
};

export default errorHandlerMiddleware;
