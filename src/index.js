import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { countryMarkup } from './js/countryMarkup';
import { countryListMarkup } from './js/countryListMarkup';
import { removeMarkup } from './js/removeMarkup';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search__box'),
  countryList: document.querySelector('.country__list'),
  countryInfo: document.querySelector('.country__info'),
};

refs.input.addEventListener('input', debounce(getCountryData, DEBOUNCE_DELAY));

function getCountryData(event) {
  const countryName = event.target.value.trim();
  if (!countryName) {
    removeMarkup(refs.countryList);
    removeMarkup(refs.countryInfo);
    return;
  }

  fetchCountries(countryName)
    .then(data => {
      if (data.length > 10) {
        removeMarkup(refs.countryList);
        removeMarkup(refs.countryInfo);
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return data;
      }
      if (data.length >= 2 && data.length <= 10) {
        removeMarkup(refs.countryInfo);
        removeMarkup(refs.countryList);
        refs.countryList.insertAdjacentHTML(
          'beforeend',
          countryListMarkup(data)
        );
        countryListMarkup(data);
        return data;
      } else {
        removeMarkup(refs.countryInfo);
        removeMarkup(refs.countryList);
        refs.countryInfo.insertAdjacentHTML('beforeend', countryMarkup(data));
        countryMarkup(data);
        return data;
      }
    })
    .catch(err => {
      removeMarkup(refs.countryList);
      removeMarkup(refs.countryInfo);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
// import './css/styles.css';
// // імпортуємо стилі
// import { fetchCountries } from './js/fetchCountries';
// // імпортуємо функцію fetchCountries, яка робить HTTP-запит на ресурс
// // і повертає проміс з масивом країн - результатом запиту
// // import { getCountryData } from './js/getCountryData';
// import { countryMarkup } from './js/countryMarkup';
// import { countryListMarkup } from './js/countryListMarkup';
// import { removeMarkup } from './js/removeMarkup';
// import debounce from 'lodash.debounce';
// // імпортуємо бібліотеку lodash.debounce, спершу її завантаживши через npm
// import Notiflix from 'notiflix';
// // імпортуємо бібліотеку notiflix, спершу її завантаживши через npm

// const DEBOUNCE_DELAY = 300;
// //створюємо сталу змінну, яка слугуватиме позначенням часового інтервалу,
// // для прийому debounce, який у свою чергу після такої паузи між івентами
// // дасть змогу викликати функцію для обробки цього ж івенту

// const refs = {
//   input: document.querySelector('#search__box'),
//   countryList: document.querySelector('.country__list'),
//   countryInfo: document.querySelector('.country__info'),
// };
// // створюємо змінні й ініціалізуємо їх адресами до відповідних елементів html

// refs.input.addEventListener('input', debounce(getCountryData, DEBOUNCE_DELAY));
// // прикріплюємо слухача подій до інпута, також використовуємо метод debounce
// // з бібліотеки lodash.debounce аби викликалась колбек-функція, але після трисекундної
// // паузи

// function getCountryData(event) {
//   // створюємо функцію, яка зпрацьовуватиме під час події інпуту
//   const countryName = event.target.value.trim();
//   // створюємо константу значенням якої виступає значення введене користувачем до
//   // інпуту та в якому за допомогою методу .trim() санітизовано (видалено) на початку та кінці пробіли
//   if (!countryName) {
//     // якщо будь-яке нове значення назви країни вписується до інпута, то
//     // для ліста та інфо викликається колбек-функція, яка їх (поля) приймає та
//     // затерає з допомогою методу .innerHTML раніше внесений зміст
//     removeMarkup(refs.countryList);
//     removeMarkup(refs.countryInfo);
//     return;
//   }

//   fetchCountries(countryName)
//     // методом фетч ми робимо запит до API сервісу та отримуємо відповідь бекенду
//     // у вигляді масивів, які об'єднані в рядок методом join(). fetchCountries
//     // викликаємо з імпортів та передаємо туди значення введене до інпуту
//     .then(data => {
//       // метод .then повертає сформований promise
//       if (data.length > 10) {
//         //якщо результат збігів більше 10, то викликаються два колбека з параметрами
//         // countryList та countryInfo, чим видаляються вмісти їхні
//         removeMarkup(refs.countryList);
//         removeMarkup(refs.countryInfo);
//         Notiflix.Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//           // додатково виводиться такий інфо-алерт через бібліотеку Notiflix
//         );
//         return data;
//       }
//       if (data.length >= 2 && data.length <= 10) {
//         // також тут же якщо результат збігів більше або дорівнює 2,
//         // то викликаються два колбека з параметрамиo сuntryList та countryInfo, чим видаляються вмісти їхні.
//         removeMarkup(refs.countryInfo);
//         removeMarkup(refs.countryList);
//         refs.countryList.insertAdjacentHTML(
//           // також до countryList записується інформація методом .insertAdjacentHTML()
//           // перед кінцем розмітки додається нова викликаючи колбек countryListMarkup,
//           // яка оперує отриманою data
//           'beforeend',
//           countryListMarkup(data)
//         );
//         countryListMarkup(data);
//         // повертає дані countryListMarkup(data)
//         return data;
//       } else {
//         removeMarkup(refs.countryInfo);
//         removeMarkup(refs.countryList);
//         // то викликаються два колбека з параметрамиo сuntryList та countryInfo, чим видаляються вмісти їхні.
//         refs.countryInfo.insertAdjacentHTML('beforeend', countryMarkup(data));
//         // також до countryInfo записується інформація методом .insertAdjacentHTML()
//         // перед кінцем розмітки додається нова викликаючи колбек countryMarkup,
//         // яка оперує отриманою data
//         countryMarkup(data);
//         // повертає дані countryMarkup(data)
//         return data;
//       }
//     })
//     .catch(err => {
//       removeMarkup(refs.countryList);
//       removeMarkup(refs.countryInfo);
//       Notiflix.Notify.failure('Oops, there is no country with that name');
//     });
//   // якщо проміс взагалі не сформований, то знову ж таки зачищається вміст полів
//   // колбеками removeMarkup та через бібліотеку Notiflix виводиться сповіщення
// }
