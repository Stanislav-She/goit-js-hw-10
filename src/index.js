import './css/styles.css';
// імпортуємо стилі
import debounce from 'lodash.debounce';
// імпортуємо бібліотеку lodash.debounce, спершу її завантаживши через npm
import Notiflix from 'notiflix';
// імпортуємо бібліотеку notiflix, спершу її завантаживши через npm
import { fetchCountries } from './js/fetchCountries';
// імпортуємо функцію fetchCountries, яка робить HTTP-запит на ресурс
// і повертає проміс з масивом країн - результатом запиту

const DEBOUNCE_DELAY = 300;
//створюємо сталу змінну, яка слугуватиме позначенням часового інтервалу,
// для прийому debounce, який у свою чергу після такої паузи між івентами
// дасть змогу викликати функцію для обробки цього ж івенту
const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
// створюємо змінні й ініціалізуємо їх адресами до відповідних елементів html

// console.log();
