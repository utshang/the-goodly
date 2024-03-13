export default async (city, filters) => {
  // city 由參數取得
  // 可能會有其他 params 像是 minPrice 等等
  // 非同步 async await
  const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
    params: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "unable to fetch cars",
    });
  }

  return { data, refresh };
};
