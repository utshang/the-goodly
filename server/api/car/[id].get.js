// route
// /car/[car-name]-[car-id]
// endpoint
// api/car/[id

import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { id } = event.context.params;
  const car = cars.find((c) => {
    return c.id === parseInt(id);
  });

  if (!car) {
    throw createError({
      statusCode: 404,
      statusMessage: `Product with ID of ${id} doesn't exist, please try again!`,
    });
  }

  return car;
});
