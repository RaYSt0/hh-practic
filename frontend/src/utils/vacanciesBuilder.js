import React from 'react';
import Vacancy from '../components/Vacancy';

function createVacancyElements(vacancies) {
    console.log(vacancies);
    return vacancies.map((vacancy, index) => (
        <Vacancy
            key={index}
            name={vacancy.name}
            company={vacancy.employer.name}
            area={vacancy.area.name}
            responsibility={vacancy.snippet.responsibility}
            requirements={vacancy.snippet.requirement}
            salary={
                vacancy.salary && vacancy.salary.from
                    ? vacancy.salary.from
                    : 'Не указано'
            }
            currency={
                vacancy.salary && vacancy.salary.from
                    ? vacancy.salary.currency
                    : ''
            }
        />
    ));
}

export default createVacancyElements;
