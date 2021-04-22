import React from 'react';
import LeftHeader from './LeftHeader/LeftHeader';
import RightHeader from './RightHeader/RightHeader';
import CenterHeader from './CenterHeader/CenterHeader';
//import './Header.css';
import '../../Main.scss';


const Header = () => {
	return (
		<div className='header'>
			<LeftHeader/>
			<RightHeader/>
			<CenterHeader/>
		</div>
	);
};

export default Header;
