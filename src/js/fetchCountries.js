export const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = url => {
  // створюємо функцію fetchCountries, яка робить HTTP-запит на ресурс
  // і повертає проміс з масивом країн - результатом запиту
  return fetch(
    `${BASE_URL}?fields=name,capital,population,flags,languages`
    // використовуємо змінну BASE_URL і додаємо відповідно до документації даної API
    // потрібні нам із ТЗ поля
  ).then(response => {
    // якщо проміс створився вдало, то нам повертається масив країн та їх властивостями
    if (!response.ok) {
      // якщо відповідної країни не знайдено, то буде помилка, що ми створили для відображення,
      // та яка покажеться сповіщенням у алерт із допомогою бібліотеки notiflix
      throw new Error(`no data loaded!`);
    }
    return response.json();
    // Метод масивів join() об'єднує елементи отриманих масивів із запиту в рядок
  });
};
