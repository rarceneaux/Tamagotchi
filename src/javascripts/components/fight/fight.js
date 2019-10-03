import util from '../../helpers/util';

const strenghtStringInfo = () => {
  let strength = 100;
  let strengthString = '<h1>Fight</h1>';
  strengthString += '<button id="buddy" type="button"> Buddy<i class="far fa-smile fa-4x"></i></button>';
  strengthString += '<button id="bully" type="button"> Bully<i class="far fa-frown fa-4x"></i></button>';
  strengthString += `<p><progress value="${strength}" max="100" id="strengthAmt"></progress></p>`;
  util.printToDom('fight', strengthString);
  const buddyBtn = document.getElementById('buddy');
  const bullyBtn = document.getElementById('bully');

  buddyBtn.addEventListener('click', () => {
    if (strength + 1 <= 100) {
      strength += 1;
      document.getElementById('strengthAmt').value = strength;
    }
  });
  bullyBtn.addEventListener('click', () => {
    if (strength - 10 >= 0) {
      strength += -10;
      document.getElementById('strengthAmt').value = strength;
    }
  });
};

export default { strenghtStringInfo };
