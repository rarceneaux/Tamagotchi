import util from '../../helpers/util';

const funStringInfo = () => {
  let playString = '<h1>Play</h1>';
  let fun = 50;
  playString += '<button id="superFun" type="button"><img src="src/javascripts/assets/images/jumpstreet.png" alt=""></button>';
  playString += '<button id="coolFun" type="button"><i class="fas fa-paint-brush fa-4x"></i></button>';
  playString += `<p><progress value="${fun}" max="100" id="playAmt"></progress></p>`;
  util.printToDom('play', playString);
  const jumpstreetBtn = document.getElementById('superFun');
  const paintbrushBtn = document.getElementById('coolFun');

  jumpstreetBtn.addEventListener('click', () => {
    if (fun + 50 >= 100) {
      fun += 50;
      document.getElementById('playAmt').value = fun;
    }
  });
  paintbrushBtn.addEventListener('click', () => {
    if (fun + 2 >= 0) {
      fun += 2;
      document.getElementById('playAmt').value = fun;
    }
  });
};

export default { funStringInfo };
