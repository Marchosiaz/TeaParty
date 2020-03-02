import React from 'react';
import preloader from '../../../assets/images/loader.gif';

const Preloader = (props) => {
	return <div>{props.isFetching ? <img src={preloader} alt="preloader"/> : null}</div>
}

export default Preloader;