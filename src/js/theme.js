const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
};

refs.input.addEventListener('click', onThemeSwitch);

function onThemeSwitch(event) {
  if (event.target.checked === false) {
    refs.body.classList.add('light-theme'),
      refs.body.classList.remove('dark-theme'),
      localStorage.setItem('theme', theme.LIGHT);
  }
  if (event.target.checked === true) {
    refs.body.classList.add('dark-theme'),
      refs.body.classList.remove('light-theme'),
      localStorage.setItem('theme', theme.DARK);
  }
}

const savedInput = localStorage.getItem('theme');
if (savedInput) {
  refs.body.classList.add(savedInput);
}
if (savedInput === theme.DARK) {
  refs.input.checked = true;
}
