import React from 'react';
//import './HeaderButtons.css';
import '../../../Main.scss';

const HeaderButtons= function HeaderButtons(props) {
    return (
    <button className="header_button" onClick={props.handleClick}>
        {props.label}
    </button>
    );
    }

export default HeaderButtons;