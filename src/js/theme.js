const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
console.log(theme);

const themeStr = JSON.stringify(theme);
console.log(themeStr);

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
};
console.dir(refs.body);
console.dir(refs.input);

const savedInput = localStorage.getItem('theme');
if (savedInput) {
  // console.log(savedInput);
  refs.input.checked = savedInput;
}

refs.input.addEventListener('click', onThemeSwitch);

function onThemeSwitch(event) {
  const checked = refs.body.classList.value;
  console.log(event.target.value);
  // console.log(event);
  if (event.target.checked === false) {
    refs.body.classList.add('light-theme'),
      refs.body.classList.remove('dark-theme');
  }
  if (event.target.checked === true) {
    refs.body.classList.add('dark-theme'),
      refs.body.classList.remove('light-theme');
  }
  localStorage.setItem('theme', checked);
}

// function onInput() {
//   const savedInput = localStorage.getItem('theme');
//   if (savedInput) {
//     console.log(savedInput);
//     refs.input.checked = savedInput;
//   }
// }
