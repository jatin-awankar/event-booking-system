const validator = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: true,
    stripUnknown: true,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0]?.message ?? "Validation failed",
    });
  }

  req.body = value;
  next();
};

export default validator;
