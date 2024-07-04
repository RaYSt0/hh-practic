const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    premium: Boolean,
    name: String,
    department: mongoose.Schema.Types.Mixed,
    has_test: Boolean,
    response_letter_required: Boolean,
    area: {
        id: String,
        name: String,
        url: String,
    },
    salary: {
        from: Number,
        to: Number,
        currency: String,
        gross: Boolean,
    },
    type: {
        id: String,
        name: String,
    },
    address: mongoose.Schema.Types.Mixed,
    response_url: mongoose.Schema.Types.Mixed,
    sort_point_distance: mongoose.Schema.Types.Mixed,
    published_at: Date,
    created_at: {
        type: Date,
        default: Date.now,
    },
    archived: Boolean,
    apply_alternate_url: String,
    show_logo_in_search: mongoose.Schema.Types.Mixed,
    insider_interview: mongoose.Schema.Types.Mixed,
    url: String,
    alternate_url: String,
    relations: [String],
    employer: {
        id: mongoose.Schema.Types.Mixed,
        name: String,
        url: String,
        alternate_url: String,
        logo_urls: mongoose.Schema.Types.Mixed,
        vacancies_url: String,
        accredited_it_employer: Boolean,
        trusted: Boolean,
    },
    snippet: {
        requirement: String,
        responsibility: String,
    },
    contacts: mongoose.Schema.Types.Mixed,
    schedule: {
        id: String,
        name: String,
    },
    working_days: [
        {
            id: String,
            name: String,
        },
    ],
    working_time_intervals: [mongoose.Schema.Types.Mixed],
    working_time_modes: [
        {
            id: String,
            name: String,
        },
    ],
    accept_temporary: Boolean,
    professional_roles: [mongoose.Schema.Types.Mixed],
    accept_incomplete_resumes: Boolean,
    experience: {
        id: String,
        name: String,
    },
    employment: {
        id: String,
        name: String,
    },
    adv_response_url: mongoose.Schema.Types.Mixed,
    is_adv_vacancy: Boolean,
    adv_context: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model('Vacancy', vacancySchema);