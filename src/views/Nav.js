import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav=()=>{
    const navLinkClass=({isActive})=>{
      return isActive?'active1':''
    }

    return(
        <ul>
          <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
          <li><NavLink className={navLinkClass} to="/todo">Todos</NavLink></li>
          <li><NavLink className={navLinkClass} to="/timer">Timer App</NavLink></li>
          <li><NavLink className={navLinkClass} to="/blog">Blog App</NavLink></li>
        </ul>
    );
}

export default Nav;