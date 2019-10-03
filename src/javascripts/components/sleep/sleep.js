import util from '../../helpers/util';


const energyStringInfo = () => {
  let energyString = '<h1>Energy</h1>';
  let energy = 50;
  energyString += '<button id="catNap" type="button"> Cat Nap<i class="fas fa-cat fa-3x"></i></button>';
  energyString += '<button id="bearNap" type="button">Bear Nap<i class="fas fa-paw fa-3x"></i></button>';
  energyString += `<p><progress value="${energy}" max="100" id="sleepAmt"></progress></p>`;
  util.printToDom('sleep', energyString);
  const catNapBtn = document.getElementById('catNap');
  const bearNapBtn = document.getElementById('bearNap');

  catNapBtn.addEventListener('click', () => {
    if (energy + 50 <= 100) {
      energy += 50;
      document.getElementById('sleepAmt').value = energy;
    }
  });
  bearNapBtn.addEventListener('click', () => {
    if (energy + 60 >= 99){
      energy += 60;
      document.getElementById('sleepAmt').value = energy;
    }
  });
};

export default { energyStringInfo };
