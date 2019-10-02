import util from '../../helpers/util';

const fun = 50;

// const superFun = 50;
// const coolFun = 2;

// const funTypes = [
//   { name: 'Jump-Zone', value: superFun },
//   { name: 'playground', value: coolFun }
// ];

const funStringInfo = () => {
  let playString = '<h1>Play</h1>';
  playString += '<button id="superFun" type="button">Super Fun</button>';
  playString += '<button id="coolFun" type="button">Cool Fun</button>';
  playString += `<h3>Score = ${fun}</h3>`;
  util.printToDom('play', playString);
};

export default { funStringInfo };
