const Joi = require("joi");

const validateTickettype = (tickettype) => {
  const schema = Joi.object({
    color: Joi.string().required(),
    name: Joi.string().required(),
  });

  return schema.validate(tickettype);
};
module.exports = { validateTickettype };
