async function getAreas() {
    try {
        const response = await fetch('https://api.hh.ru/areas');
        const data = await response.json();
        const areas = [];

        function traverseAreas(areasData) {
            areasData.forEach((area) => {
                areas.push({
                    value: area.id,
                    label: area.name,
                });
                if (area.areas && area.areas.length > 0) {
                    traverseAreas(area.areas);
                }
            });
        }

        traverseAreas(data);
        return areas;
    } catch (error) {
        console.error('Error fetching areas:', error);
        return [];
    }
}

export default getAreas;
