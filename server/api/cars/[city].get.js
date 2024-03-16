import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);

  const filters = {
    city: city.toLowerCase(),
  };

  if (make) {
    filters.make = make;
  }

  if (minPrice || maxPrice) {
    filters.price = {};
  }

  if (minPrice) {
    filters.price.gte = parseInt(minPrice);
  }

  if (maxPrice) {
    filters.price.lte = parseInt(maxPrice);
  }

  let car;

  if (city === "city") {
    car = await prisma.car.findMany();
  } else {
    car = await prisma.car.findMany({
      where: filters,
    });
  }

  return car;
});
