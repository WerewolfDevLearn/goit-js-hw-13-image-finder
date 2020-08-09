import { baseAlert } from './components/notification.js';

function errorCath(respons) {
  if (respons.ok) {
    return respons.json();
  } else {
    baseAlert();
  }
}

export default errorCath;
