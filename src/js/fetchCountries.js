import errorCatch from './error-catch';

function fetchCountry(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url).then(response => errorCatch(response));
}

export default fetchCountry;
