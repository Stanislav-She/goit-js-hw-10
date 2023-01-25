export function countryListMarkup(countryData) {
  // колбек, яка викликається у функції getCountryData та приймає data масив
  // із об'єктами даних про країни, які повернула за запитом нам API, у вигляді ключів
  // та значень
  return countryData
    .map(({ flags, name }) => {
      // Метод map() використовуємо для трансформації масиву, а саме перебираємо
      // кожен об'єкт отриманий у масиві, який ми ДЕСТРУКТУРИЗУЄМО взявши в такі дужки {}.
      // А потім повертаємо масив рядків із розміткою, що у кінці методом .join() приводяться
      // всі елементи отриманого масиву в рядок
      return `
    <li class="cards__item">
    <img class="cards__img" src="${flags.svg}" alt="flag">
    <p class="card__text">${name.official}</p>
    </li>
    `;
    })
    .join('');
}
