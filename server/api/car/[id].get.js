// route
// /car/[car-name]-[car-id]
// endpoint
// api/car/[id]

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const car = await prisma.car.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!car) {
    throw createError({
      statusCode: 404,
      statusMessage: `Product with ID of ${id} doesn't exist, please try again!`,
    });
  }

  return car;
});
