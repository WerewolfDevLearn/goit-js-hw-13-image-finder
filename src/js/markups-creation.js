import picturesTpl from '../templates/pictures-tpl.hbs';
import { baseInfo } from './components/notification.js';

function createMarkup(arrOfPics) {
  const markup = picturesTpl(arrOfPics);
  return markup;
}
export default createMarkup;
