import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import standard from '../../assets/roman_standard.png'
import { NavLink, NavLinks } from './navigation.styles';

const Navigation = () =>{
    return(
        <div className='navigation_container'>
            <div className='navigation-bar'>
                <Link to="/">
                    <img className='Logo' src={standard}/>
                </Link>
                <NavLinks>
                    <NavLink to={'main'}>
                        <h1 className='eras-icon'>Eras</h1>
                    </NavLink>
                </NavLinks>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navigation