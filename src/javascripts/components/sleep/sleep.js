import util from '../../helpers/util';

const energy = 50;

// const catNap = 50;
// const bearNap = 60;

// const sleepTypes = [
//   { name: 'Quick Nap', value: catNap },
//   { name: 'Long Nap', value: bearNap }
// ];

const energyStringInfo = () => {
  let energyString = '<h1>energy</h1>';
  energyString += '<button id="catNap" type="button"> Quick Nap</button>';
  energyString += '<button id="bearNap" type="button">Long Nap</button>';
  energyString += `<h3>Score = ${energy}</h3>`;
  util.printToDom('sleep', energyString);
};

export default { energyStringInfo };
