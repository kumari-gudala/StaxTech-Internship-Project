const display = document.getElementById('display');
const sound = document.getElementById('click-sound');

function appendValue(value) {
  display.value += value;
  playSound();
}

function clearDisplay() {
  display.value = '';
  playSound();
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  playSound();
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
  playSound();
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function playSound() {
  sound.currentTime = 0;
  sound.play();
}
