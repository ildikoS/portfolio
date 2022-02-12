import './Menu.css'
import MenuItem from './MenuItem'

const Menu = () => {

    return (
        <div className="m">
            <MenuItem to="i" title="Kezdőlap"/>
            <MenuItem to="e" title="Tapasztalat"/>
            <MenuItem to="s" title="Készségek"/>
            <MenuItem to="p" title="Projektek"/>
        </div>
    )
}

export default Menu;