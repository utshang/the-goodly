export default async (city, filters) => {
  // city 由參數取得
  // 可能會有其他 params 像是 minPrice 等等
  // 非同步 async await
  // const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
  //   params: {
  //     ...filters,
  //   },
  // });
  console.log(filters);
  const { make, minPrice, maxPrice } = filters;

  const { data, error, refresh } = await useAsyncData(
    "test",
    () =>
      $fetch(`/api/cars/${city}`, {
        params: {
          ...filters,
        },
      }),
    {
      watch: [make, minPrice, maxPrice],
    }
  );

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "unable to fetch cars",
    });
  }

  return { data, refresh };
};
