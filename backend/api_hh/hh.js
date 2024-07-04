const fetch = require('node-fetch');

async function getVacancies(
    text,
    perPage = 30, // количество ваканский на страницу
    page = 0, // текущая страница
    salary = null, // зп
    currency = null, // валюта
    area = null, // регион
    experience = null, // опыт работы
) {

    let url = `https://api.hh.ru/vacancies?text=${text}&per_page=${perPage}&page=${page}`; // апи hh

    if (salary) {
        url += `&salary=${salary}`;
    }
    if (currency) {
        url += `&currency=${currency}`;
    }
    if (area) {
        url += `&area=${area}`;
    }
    if (experience) {
        url += `&experience=${experience}`;
    }


    const response = await fetch(url);
    const data = await response.json(); // ответ от hh

    return { vacanciesAmount: data.found, pages: data.pages, vacancies: data.items }; // возращает колчичесво стрниц, вакансии 
}

module.exports = { // вызов для другого файла
    getVacancies,
};