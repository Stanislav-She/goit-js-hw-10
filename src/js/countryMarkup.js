export function countryMarkup(countryData) {
  return countryData
    .map(({ flags, name, capital, population, languages }) => {
      return `
  <div class="country__container">
  <img class="country__flag" src="${flags.svg}" alt="flag" width="300px">
  <p class="country__name">${name.official}</p>
  </div>
   <ul class="country__description">
  <li class="country__item">&#127988 Capital:
  <span class="country__span">${capital}</span>
  </li>
   <li class="country__item">&#128106 Population:
  <span class="country__span">${population}</span>
  </li>
   <li class="country__item">&#128172 Languages:
  <span class="country__span">${Object.values(languages).join(', ')}</span>
  </li>
  </ul>`;
    })
    .join('');
}

// export function countryMarkup(countryData) {
//   // колбек, яка викликається у функції getCountryData та приймає data масив
//   // із об'єктом даних про країну, яка повернута за запитом із API, у вигляді ключів
//   // та значень
//   return countryData
//     .map(({ flags, name, capital, population, languages }) => {
//       // Метод map() використовуємо для трансформації масиву, а саме перебираємо
//       // кожен об'єкт отриманий у масиві, який ми ДЕСТРУКТУРИЗУЄМО взявши в такі дужки {}.
//       return `
//   <div class="country__container">
//   <img class="country__flag" src="${flags.svg}" alt="flag" width="300px">
//   <p class="country__name">${name.official}</p>
//   </div>
//    <ul class="country__description">
//   <li class="country__item">&#127988 Capital:
//   <span class="country__span">${capital}</span>
//   </li>
//    <li class="country__item">&#128106 Population:
//   <span class="country__span">${population}</span>
//   </li>
//    <li class="country__item">&#128172 Languages:
//   <span class="country__span">${Object.values(languages).join(', ')}</span>
//   </li>
//   </ul>`;
//       // повертаємо такий рядок із розміткою, де підставляються значення з отриманих ключів
//     })
//     .join('');
//   // методом .join() об'єднуємо всі елементи отриманого масиву в рядок
// }
