async function getOptions() {
    try {
        const response = await fetch('https://api.hh.ru/dictionaries');
        const data = await response.json();
        const options = {
            currencies: data.currency.map((currency) => ({
                value: currency.code,
                label: currency.name,
            })),
            experience: data.experience.map((experience) => ({
                value: experience.id,
                label: experience.name,
            })),
            employment: data.employment.map((employment) => ({
                value: employment.id,
                label: employment.name,
            })),
            schedule: data.schedule.map((schedule) => ({
                value: schedule.id,
                label: schedule.name,
            })),
        };
        return options;
    } catch (error) {
        console.error('Error fetching options:', error);
        return {};
    }
}

export default getOptions;
