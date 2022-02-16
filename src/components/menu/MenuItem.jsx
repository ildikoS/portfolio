import { Link } from 'react-scroll'

const MenuItem = ({to, title}) => {
    return (
        <li className='m-item'>
            <Link 
                activeClass="active"
                to={to} 
                smooth={true} 
                duration={600}
                spy={true}> 
                    {title} 
            </Link>
        </li>
    )
}

export default MenuItem;