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
    password: joi.string().trim().required().min(9).max(20).messages({
      "string.empty": "Empty password, try again",
      "string.min": "try a longer one",
      // country: joi.string().required(),
    }),
  });

  const validation = schema.validate(req.body, { abortEarly: false });
  if (!validation.error) {
    next();
  } else {
    console.log(validation.error.details);
    res.json({ success: false, errors: validation.error.details });
  }
  //next();
};

module.exports = validator;

// .pattern(new RegExp("([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)")).messages({
//    "string.pattern.base": "The format is incorrect",
//  })
