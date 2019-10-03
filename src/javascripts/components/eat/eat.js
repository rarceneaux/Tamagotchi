import util from '../../helpers/util';

const eatStringInfo = () => {
  let eatString = '<h1>Eat</h1>';
  let full = 100;
  eatString += '<button id="carrot" type="button">Carrot<i class="fas fa-carrot fa-3x"></i></button>';
  eatString += '<button id="cookie" type="button">Cookie<i class="fas fa-cookie fa-3x"></i></button>';
  eatString += `<p><progress value="${full}" max="100" id="eatAmt"></progress></p>`;
  util.printToDom('eat', eatString);
  const carrotBtn = document.getElementById('carrot');
  const cookieBtn = document.getElementById('cookie');

  carrotBtn.addEventListener('click', () => {
    if (full + 10 <= 100) {
      full += 10;
      document.getElementById('eatAmt').value = full;
    }
  });
  cookieBtn.addEventListener('click', () => {
    if (full - 3 >= 0) {
      full -= 3;
      document.getElementById('eatAmt').value = full;
    }
  });
};

export default { eatStringInfo };
