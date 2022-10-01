class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
  }
}

export default CustomAPIError;