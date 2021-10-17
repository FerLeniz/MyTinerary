const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    google:joi.boolean(),
    country:joi.string().required(),
    name: joi.string().trim().min(2).max(10).required().messages({
      "string.empty": "Empty name...",
    }),
    lastName: joi.string().trim().min(2).max(15).required(),
    email: joi.string().required().trim().email(),
    url: joi
      .string()
      .required()
      .trim()
      .pattern(new RegExp("(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)"))
      .message({
        "string.pattern.base": "The format is incorrect!",
      }),
    password: joi.string().trim().required().min(6).max(250).messages({
      "string.empty": "Empty password, try again",
      "string.min": "try a longer one",
    }),
  });

  const validation = schema.validate(req.body, { abortEarly: false });
  if (!validation.error) {
    next();
  } else {
    res.json({ success: false, response: validation.error.details });
  }
  //next();
};

module.exports = validator;
