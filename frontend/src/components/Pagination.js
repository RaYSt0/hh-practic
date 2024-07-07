import React from 'react';
import styles from '../styles/Pagination.module.scss';

const Pagination = ({ totalPages, currentPage, onPageChange, hidden }) => {
    const pageNumbers = [];
    const maxPagesToShow = 9;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.container} hidden={hidden}>
            {pageNumbers.map((number) => (
                <div
                    key={number}
                    onClick={() => {onPageChange(number); console.log(currentPage)}}
                    // eslint-disable-next-line eqeqeq
                    className={`${styles.pages} ${(number - 1) == currentPage ? styles.current : ''}`}
                >
                    {number} 
                </div>
            ))}
        </div>
    );
};

export default Pagination;
