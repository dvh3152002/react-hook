import './Nav.scss';
import { Link,NavLink } from 'react-router-dom';

const Nav=()=>{
    const navLinkClass=({isActive})=>{
      return isActive?'active1':''
    }

    return(
        <ul>
          <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
          <li><NavLink className={navLinkClass} to="/todo">Todos</NavLink></li>
          <li><NavLink className={navLinkClass} to="/timer">Timer App</NavLink></li>
        </ul>
    );
}

export default Nav;