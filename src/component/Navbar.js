import { NavLink } from 'react-router-dom';
import './CSS/Navbar.css'
export default function Navbar(){
    function getNavClass(navLinkProps) {
        let navClass = 'app-header-item';
        if (navLinkProps.isActive) navClass += ' app-header-item-active';
        return navClass;
      }
    return(
        <header className="app-header">
            <NavLink className={getNavClass} to='/' end>Back</NavLink>
        </header>
    )
}