import React, {useState} from 'react';
import s from './Paginator.module.css';

const positionSize = 21;

export const Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {pages.push(i)};

	let portionCount = Math.ceil(pagesCount / positionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * positionSize + 1;
	let rightPortionPagenumber = portionNumber * positionSize;
	

	let page = pages.filter(p => (p >= leftPortionPageNumber) && (p <= rightPortionPagenumber)).map(p => {
		return <div className={s.paginator}>
			<a className={props.currentPage === p && s.selectedPage} onClick={() => {props.changeCurrentPage(p)}}>{p}</a>
		</div>
	})

	let prevButton = portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>PREV</button>;
	let nextButton = portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber+1)}>NEXT</button>
	
	return <div>
		{portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>PREV</button>}
		{page}
		{portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber+1)}>NEXT</button>}
	</div>
}