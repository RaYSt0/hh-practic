const headhunterService = require('../../api_hh/hh');
const vacancySchema = require('../shem/vacanci');

class VacanciesController {
    async fetchAndSaveVacancies(req, res) {
        try {
            const filters = req.query;

            const data = await headhunterService.getVacancies(
                filters.name,
                50,
                filters.page,
                filters.salary,
                filters.currency,
                filters.area,
                filters.experience,
            );

            const operations = data.vacancies.map(vacancy => ({
                updateOne: {
                    filter: { id: vacancy.id },
                    update: { $set: vacancy },
                    upsert: true,
                },
            }));

            await vacancySchema.bulkWrite(operations);
            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async retrieveVacancies(req, res) {
        try {
            const page = parseInt(req.query.page) || 0;
            const limit = 50;
            const skip = page * limit;

            const totalVacancies = await vacancySchema.countDocuments();
            const totalPages = Math.ceil(totalVacancies / limit);

            const vacancies = await vacancySchema
                .find({})
                .skip(skip)
                .limit(limit);

            res.json({
                paginationInfo: {
                    currentPage: page,
                    totalPages,
                    totalVacancies,
                },
                vacancies,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new VacanciesController();
