const joi=require('joi')

const validator = (req, res, next) => {
   const schema = joi.object({
     name: joi
       .string()
       .trim()
       .min(2)
       .max(10)
       .required()
       .pattern(new RegExp("g[a-zA-Z]$"))
       .messages({
         "string.empty": "Empty name...",
         "string.pattern.base": "The format is incorrect",
       }),
       lastName: joi.string().trim().min(2).max(15).required(),
       email: joi.string().required().trim().email(),
       url:joi.string().required().trim(),
       password: joi.string().trim().required().min(3).max(5).messages({
       "string.empty": "Empty password, try again",
       "string.min": "try a longer one",
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

module.exports = validator


// .pattern(new RegExp("([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)")).messages({
//    "string.pattern.base": "The format is incorrect",
//  })