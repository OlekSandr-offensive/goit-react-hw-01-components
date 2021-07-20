const getRandomColor = () => {
  const min = 0;
  const max = 255;

  const randomColor = Math.floor(Math.random() * (max - min) + min);

  return randomColor;
};

const getRandomRgbNum = () => {
  return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
};

export default getRandomRgbNum;
