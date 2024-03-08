// 引入資料
import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  console.log("test hit");

  return {
    cars,
  };
});
