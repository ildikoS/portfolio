import './Menu.css'
import MenuItem from './MenuItem'
import { useState } from 'react';

const Menu = () => {
    const [active, setActive] = useState(false);

    function navSlide() {
        setActive(!active);
    }

    return (
        <nav className={`m ${active ? '' : 'm-closed'}`}>
            <div className='m-butt' onClick={navSlide}>
                <div className={`${active ? 'line1' : ''}`}></div>
                <div className={`${active ? 'line2' : ''}`}></div>
                <div className={`${active ? 'line3' : ''}`}></div>
            </div>
            <ul className={`m-ul ${active ? '' : 'ul-closed'}`}>
                <MenuItem to="i" title="Kezdőlap"/>
                <MenuItem to="e" title="Tapasztalat"/>
                <MenuItem to="s" title="Készségek"/>
                <MenuItem to="p" title="Projektek"/>
            </ul>
        </nav>
    )
}

export default Menu;