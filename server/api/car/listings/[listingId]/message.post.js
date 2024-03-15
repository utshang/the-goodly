import Joi from "joi";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//放入所有想驗證的欄位以及條件
const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  message: Joi.string().min(20).required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { listingId } = event.context.params;

  const { value, error } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  const { name, email, phone, message } = body;

  const msg = prisma.message.create({
    data: {
      name,
      email,
      phone,
      message,
      listingId: parseInt(listingId),
    },
  });

  return msg;
});
