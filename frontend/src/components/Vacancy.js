import React from 'react';
import styles from '../styles/Vacancy.module.scss';

const Vacancy = ({
  name,
  company,
  area,
  responsibility,
  requirements,
  salary,
  currency,
}) => {
  const highlightText = (text) => {
    if (text === null) {
      return { __html: '' };
    }
    return { __html: text.replace(/<highlighttext>(.*?)<\/highlighttext>/g, `<span class="${styles.highlight}">$1</span>`) };
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <span className={styles.name__text}>{name}</span>
      </div>
      <div className={styles.salary}>
        <span className={styles.salary__text}>
          {salary + ' ' + currency}
        </span>
      </div>
      <div className={styles.company}>
        <span className={styles.company__text}>
          {company + ' • ' + area}
        </span>
      </div>
      <div className={styles.responsibility}>
        <span className={styles.responsibility__header}>
          Ответственность:
        </span>
        <span className={styles.responsibility__text} dangerouslySetInnerHTML={highlightText(responsibility)}></span>
      </div>
      <div className={styles.requirements}>
        <span className={styles.requirements__header}>
          Необходимо знать:
        </span>
        <span className={styles.requirements__text} dangerouslySetInnerHTML={highlightText(requirements)}></span>
      </div>
    </div>
  );
};

export default Vacancy;
