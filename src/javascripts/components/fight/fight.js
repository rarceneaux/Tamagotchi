import util from '../../helpers/util';

const strength = 100;

// const buddy = 1;
// const bully = -10;

// const strengthTypes = [
//   { name: 'friendly', value: buddy },
//   { name: 'not friendly', value: bully }
// ];

const strenghtStringInfo = () => {
  let strengthString = '<h1>Fight</h1>';
  strengthString += '<button id="buddy" type="button">Buddy</button>';
  strengthString += '<button id="bully" type="button">Bully</button>';
  strengthString += `<h3>Score = ${strength}</h3>`;
  util.printToDom('fight', strengthString);
};

export default { strenghtStringInfo };
