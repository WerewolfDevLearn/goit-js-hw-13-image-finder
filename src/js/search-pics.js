import api from './apiService.js';
import createMarkup from './markups-creation.js';
import { baseInfo } from './components/notification.js';
const debounce = require('debounce');

const refs = {
  input: document.querySelector('#search-form'),
  output: document.querySelector('.gallery'),
  button: document.querySelector('.button'),
};
refs.button.addEventListener('click', () => {
  galleryRender();
});

const inputSearchQuery = refs.input.addEventListener(
  'input',
  debounce(() => {
    api.query = refs.input.elements.query.value;
    refs.output.innerHTML = '';
    galleryRender();
  }, 500),
);

function injectMarkup(hits) {
  const markup = createMarkup(hits);
  if (markup !== undefined) {
    refs.output.insertAdjacentHTML('beforeend', markup);
  }
}

function galleryRender() {
  if (api.query !== '') {
    api.fetchPictures().then(hits => {
      if (hits.length !== 0) {
        console.log(hits);
        injectMarkup(hits);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } else {
        baseInfo();
      }
    });
  }
}
