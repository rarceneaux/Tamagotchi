import util from "../../helpers/util.js";

let full = 100;
let healthy = 10;
let unhealthy = -3;

const foods = [
  {"name":"broccoli","value": healthy,},
  {"name":"ice cream","value":unhealthy}
];

const eatStringInfo = () => {
  let eatString =`<button id="healthy" type="button">Healthy</button>`;
  eatString += `<button id="unhealthy" type="button">Unhealthy</button>`;
  eatString +=  `<h1>Eat</h1>`;
  eatString +=  `<h3>Score = ${ full}</h3>`;
  util.printToDom("eat",eatString);
};

