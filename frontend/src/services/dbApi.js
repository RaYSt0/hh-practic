async function getAllVacancies(
    page = 0
) {
    try {
        const url =
            `http://localhost:3001/api/allVacancies?page=${page}`

        const response = await fetch(url);
        
        const data = await response.json();
        console.log('Response:', data);
        return data;
    } catch (error) {
        console.error('Error fetching vacancies:', error);
        return [];
    }
}

export default getAllVacancies;
