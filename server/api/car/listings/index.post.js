import Joi from "joi";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//放入所有想驗證的欄位以及條件
const schema = Joi.object({
  name: Joi.string().required(),
  seats: Joi.number().max(1000).min(1).required(),
  miles: Joi.number().min(0).required(),
  price: Joi.number().min(0).required(),
  image: Joi.string().required(),
  features: Joi.array().items(Joi.string()).required(),
  city: Joi.string().min(2).required(),
  model: Joi.string().required(),
  make: Joi.string().required(),
  listerId: Joi.string().required(),
  description: Joi.string().min(20).required(),
  year: Joi.number()
    .min(1886)
    .max(new Date().getFullYear() + 1)
    .required(),
});

export default defineEventHandler(async (event) => {
  // Access data form body
  const body = await readBody(event);

  // Validate the data
  const { error } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  // Save the data to database
  const {
    name,
    seats,
    miles,
    price,
    image,
    features,
    city,
    model,
    make,
    listerId,
    description,
    year,
  } = body;

  const car = await prisma.car.create({
    data: {
      name,
      seats,
      miles,
      price,
      image,
      features,
      city,
      model,
      make,
      listerId,
      description,
      year,
    },
  });

  return car;
});
