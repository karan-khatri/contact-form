const notFoundMiddleware = (req, res) => {
  res.status(404).send('Resource not found!');
};

export default notFoundMiddleware;
