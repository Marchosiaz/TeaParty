import React from 'react';
import s from './Paginator.module.css';

export const Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {pages.push(i)};
	let page = pages.map(p => {
		return <a className={props.currentPage === p && s.selectedPage} onClick={() => {props.changeCurrentPage(p)}}>{p}</a>
	})
	
	return page
}