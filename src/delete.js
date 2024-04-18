const getRandomRgbColor = 
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
console.log(getRandomRgbColor());
