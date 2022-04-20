import Joi from "joi";

class JoiUserSignupDataValidator {
  joi: Joi.Root;
  schema: Joi.ObjectSchema;

  constructor() {
    this.schema = Joi.object()
      .keys({
        data: {
          username: Joi.string().required(),
          password: Joi.string().required(),
          profile: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            typology: Joi.number().required(),
            documentNumber: Joi.number().required(),
          },
        },
      })
      .unknown(true);
  }

  validate(payload) {
    const { error, value, warning } = this.schema.validate(payload);
    return error ? error.message : null;
  }
}

export { JoiUserSignupDataValidator };
