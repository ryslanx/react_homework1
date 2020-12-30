import React from 'react';
import cl from './Header.module.css'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header(props) {
    return (
        <header>
            <div>
                <h3><span className={cl.header_span}>urstore</span>.com</h3>
            </div>
            <div className={cl.icons}>
                <FontAwesomeIcon className={cl.heart_icon} icon={["fas", "heart"]} />
                <FontAwesomeIcon icon={"shopping-cart"} />
            </div>
        </header>
    );
}

export default Header;