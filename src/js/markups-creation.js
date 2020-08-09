import countryTpl from '../templates/country.hbs';
import countriesTpl from '../templates/countries.hbs';
import { baseInfo } from './components/notification.js';

function createMarkup(arrOfCountries) {
  let markup;

  if (arrOfCountries.length > 10) {
    baseInfo();
  } else if (arrOfCountries.length <= 10 && arrOfCountries.length > 2) {
    baseInfo();
    markup = countriesTpl(arrOfCountries);
    return markup;
  } else if (arrOfCountries.length < 2) {
    markup = countryTpl(arrOfCountries);
    return markup;
  }
}
export default createMarkup;
