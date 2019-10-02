import util from '../../helpers/util';

const full = 100;
// const healthy = 10;
// const unhealthy = -3;
// will javascript pick up negative numbers

// const foods = [
//   { name: 'broccoli', value: healthy },
//   { name: 'ice cream', value: unhealthy }
// ];

const eatStringInfo = () => {
  let eatString = '<h1>Eat</h1>';
  eatString += '<button id="healthy" type="button">Healthy</button>';
  eatString += '<button id="unhealthy" type="button">Unhealthy</button>';
  eatString += `<h3>Score = ${full}</h3>`;
  util.printToDom('eat', eatString);
};

export default { eatStringInfo };
