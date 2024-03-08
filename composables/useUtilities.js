export const useUpperCase = () => {
  function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  }
  return {
    capitalizeFirstLetter,
  };
};
