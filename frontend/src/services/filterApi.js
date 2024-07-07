async function getVacancies(
    name,
    page = 0,
    filters = {
        salary: null,
        area: null,
        selectedArea: null,
        selectedCurrency: null,
        selectedExperience: null,
        selectedEmployment: null,
        selectedSchedule: null,
    }
) {
    try {
        const url =
            `http://localhost:3001/api/vacancies?name=${name}&page=${page}` +
            `${filters.salary ? `&salary=${filters.salary}` : ''}` +
            `${filters.selectedCurrency ? `&currency=${filters.selectedCurrency}` : ''}` +
            `${filters.selectedArea ? `&area=${filters.selectedArea}` : ''}` +
            `${filters.selectedEmployment ? `&employment=${filters.selectedEmployment}` : ''}` +
            `${filters.selectedExperience ? `&experience=${filters.selectedExperience}` : ''}` +
            `${filters.selectedSchedule ? `&schedule=${filters.selectedSchedule}` : ''}`;

        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching vacancies:', error);
        return [];
    }
}

export default getVacancies;
