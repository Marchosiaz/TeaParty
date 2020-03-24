import React from 'react';
import s from './Paginator.module.css';

export const Paginator = (totalCount, pageSize, currentPage, changeCurrentPage) => {
	let pagesCount = Math.ceil(totalCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {pages.push(i)};
	let page = pages.map(p => {
		return <a className={currentPage === p && s.selectedPage} onClick={() => {changeCurrentPage(p)}}>{p}</a>
	})
	
	return page
}