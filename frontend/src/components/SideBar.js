
    import React, { useState, useEffect, useCallback } from 'react';
    import { useLocation, useNavigate } from 'react-router-dom';
    import styles from '../styles/Sidebar.module.scss';
    import Select from 'react-dropdown-select';
    import '../styles/Select.scss';
    import getOptions from '../services/dictionaries';
    import getAreas from '../services/areas';
    
    const selectStyle = {
        boxShadow: 'none',
        border: '1px solid #E4E5E7',
        borderRadius: '9px',
        backgroundColor: '#FAFAFB',
    };
    
    const Sidebar = ({ onChange }) => {
        const [options, setOptions] = useState([]);
        const [areas, setAreas] = useState([]);    
        const [salary, setSalary] = useState(null);
        const [selectedArea, setSelectedArea] = useState([]);
        const [selectedCurrency, setSelectedCurrency] = useState([]);
        const [selectedExperience, setSelectedExperience] = useState([]);
        const [selectedEmployment, setSelectedEmployment] = useState([]);
        const [selectedSchedule, setSelectedSchedule] = useState([]);
    
        const location = useLocation();
        const navigate = useNavigate();
    
        useEffect(() => {
            const fetchData = async () => {
                const options = await getOptions();
                const areas = await getAreas();
                setOptions(options);
                setAreas(areas);
    
                const query = new URLSearchParams(location.search);
                const salary = query.get('salary');
                const selectedArea = query.get('area');
                const selectedCurrency = query.get('currency');
                const selectedExperience = query.get('experience');
                const selectedEmployment = query.get('employment');
                const selectedSchedule = query.get('schedule');
    
                if (salary) {
                    setSalary(salary);
                }
    
                if (selectedArea) {
                    const areaOption = areas.find((a) => a.value === selectedArea);
                    if (areaOption) {
                        setSelectedArea([areaOption]);
                    } else {
                        console.error('Area option not found:', selectedArea);
                    }
                }
    
                if (selectedCurrency) {
                    if (options.currencies) {
                        const currencyOption = options.currencies.find(
                            (c) => c.value === selectedCurrency
                        );
                        if (currencyOption) {
                            setSelectedCurrency([currencyOption]);
                        } else {
                            console.error(
                                'Currency option not found:',
                                selectedCurrency
                            );
                        }
                    } else {
                        console.error(
                            'Currencies property not found on options object'
                        );
                    }
                }
    
                if (selectedExperience) {
                    if (options.experience) {
                        const experienceOption = options.experience.find(
                            (e) => e.value === selectedExperience
                        );
                        if (experienceOption) {
                            setSelectedExperience([experienceOption]);
                        } else {
                            console.error(
                                'Experience option not found:',
                                selectedExperience
                            );
                        }
                    } else {
                        console.error(
                            'Experience property not found on options object'
                        );
                    }
                }
    
                if (selectedEmployment) {
                    if (options.employment) {
                        const employmentOption = options.employment.find(
                            (e) => e.value === selectedEmployment
                        );
                        if (employmentOption) {
                            setSelectedEmployment([employmentOption]);
                        } else {
                            console.error(
                                'Employment option not found:',
                                selectedEmployment
                            );
                        }
                    } else {
                        console.error(
                            'Employment property not found on options object'
                        );
                    }
                }
                if (selectedSchedule) {
                    if (options.schedule) {
                        const scheduleOption = options.schedule.find(
                            (s) => s.value === selectedSchedule
                        );
                        if (scheduleOption) {
                            setSelectedSchedule([scheduleOption]);
                        } else {
                            console.error(
                                'Schedule option not found:',
                                selectedSchedule
                            );
                        }
                    } else {
                        console.error(
                            'Schedule property not found on options object'
                        );
                    }
                }
            };
            fetchData();
        }, []);

        
        const resetFilters =() => {
            setSalary(null);
            setSelectedArea([]);
            setSelectedCurrency([]);
            setSelectedExperience([]);
            setSelectedEmployment([]);
            setSelectedSchedule([]);
        };

    
        const handleChange = (field, values) => {
            const newFilters = {
                salary,
                selectedArea,
                selectedCurrency,
                selectedExperience,
                selectedEmployment,
                selectedSchedule,
            };
            switch (field) {
                default:
                    break;
                case 'salary':
                    setSalary(values);
                    newFilters.salary = values;
                    break;
                case 'area':
                    setSelectedArea(values);
                    newFilters.selectedArea = values;
                    break;
                case 'currency':
                    setSelectedCurrency(values);
                    newFilters.selectedCurrency = values;
                    break;
                case 'experience':
                    setSelectedExperience(values);
                    newFilters.selectedExperience = values;
                    break;
                case 'employment':
                    setSelectedEmployment(values);
                    newFilters.selectedEmployment = values;
                    break;
                case 'schedule':
                    setSelectedSchedule(values);
                    newFilters.selectedSchedule = values;
                    break;
            }
            onChange(newFilters);
        };
    
        return (
            <div className={styles.sideBar}>
                <div className={styles.sideBar__header}>
                    <div className={styles.sideBar__header__text}>Фильтр</div>
                    <div
                        className={styles.sideBar__header__reset}
                        onClick={() => {
                            resetFilters()
                            navigate('/');
                        }}
                    >
                        Сбросить
                    </div>
                </div>
                <div className={styles.sideBar__area}>
                    <div className={styles.sideBar__area__text}>Регион</div>
                    <Select
                        style={selectStyle}
                        className="reactDropdownSelect"
                        placeholder="Все регионы"
                        options={areas}
                        values={selectedArea}
                        onChange={(values) => {handleChange('area', values)}}
                    />
                </div>
                <div className={styles.sideBar__area}>
                    <div className={styles.sideBar__area__text}>Зарплата</div>
                    <div className={styles.sideBar__area__input__container}>
                        <span className={styles.sideBar__area__input__text}>
                            От
                        </span>
                        <input
                            type="text"
                            className={styles.sideBar__area__input__element}
                            value={salary || ''}
                            onChange={(event) => {
                                setSalary(event.target.value || null);
                                handleChange('salary', event.target.value || null);
                            }}
                        />
                    </div>
                </div>
                <div className={styles.sideBar__area}>
                    <div className={styles.sideBar__area__text}>Валюта</div>
                    <Select
                        style={selectStyle}
                        className="reactDropdownSelect"
                        placeholder="Не важно"
                        options={options.currencies}
                        values={selectedCurrency}
                        onChange={(values) => {handleChange('currency', values)}}
                    />
                </div>
                <div className={styles.sideBar__area}>
                    <div className={styles.sideBar__area__text}>Опыт работы</div>
                    <Select
                        style={selectStyle}
                        className="reactDropdownSelect"
                        placeholder="Не важно"
                        options={options.experience}
                        values={selectedExperience}
                        onChange={(values) => handleChange('experience', values)}
                    />
                </div>
            </div>
        );
    };
    
    export default Sidebar;
    