import fetch from './fetchCountries';
import createMarkup from './markups-creation';
const debounce = require('debounce');

// let arrOfCountries = null;

// const refs = {
//   input: document.querySelector('.country-name'),
//   output: document.querySelector('.country-container'),
// };

// const inputCountryName = refs.input.addEventListener(
//   'input',
//   debounce(() => {
//     const searchQuery = refs.input.value;
//     refs.output.innerHTML = '';

//     if (searchQuery !== '') {
//       fetchCountry(searchQuery).then(data => {
//         injectMarkup(data);
//       });
//     }
//   }, 500),
// );

// function injectMarkup(data) {
//   const markup = createMarkup(data);
//   if (markup !== undefined) {
//     refs.output.insertAdjacentHTML('beforeend', markup);
//   }
// }
