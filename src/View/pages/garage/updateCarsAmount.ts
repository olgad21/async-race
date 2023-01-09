const updateCarsAmount = (carsAmount: number) => {
  const pageTitle = document.querySelector('.cars_amount-title');
  if (pageTitle) {
    pageTitle.innerHTML = `Garage (<span class="cars_amount">${carsAmount}</span>)`;
  }
};

export const getCarsAmount = () => {
  const carsAmount = document.querySelector('.cars_amount')?.innerHTML;
  return Number(carsAmount);
};

export default updateCarsAmount;
